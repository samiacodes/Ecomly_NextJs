import { Product, SiteProducts, ProthomashopProduct, GenericApiResponse } from '@/app/types/product'
import { getFallbackProducts } from './fallbackProducts'

// ============================================
// STEP 1: Define all sites/sources
// ============================================

interface SiteConfig {
  id: string
  name: string
  apiUrl: string
  imageUrl?: string // Base URL for images
  categoryApi?: (catId: number) => string
}

const SITES: SiteConfig[] = [
  { 
    id: 'prothomashop',
    name: 'প্রথম আলো শপ',
    apiUrl: 'https://admin.prothomashop.com/api/products',
    imageUrl: 'https://admin.prothomashop.com/public/uploads/products/',
    categoryApi: (catId: number) => `https://admin.prothomashop.com/api/category/${catId}/products`
  },
  // Space for adding more sites later
  // Example:
  // {
  //   id: 'daraz',
  //   name: 'Daraz',
  //   apiUrl: 'https://api.daraz.com.bd/products',
  //   imageUrl: 'https://cdn.daraz.com.bd/'
  // }
]

// ============================================
// STEP 2: Safe JSON Parser (Handle "Not found" and invalid responses)
// ============================================

async function safeJsonParse(response: Response): Promise<any> {
  try {
    const text = await response.text()
    
    // Log first 100 chars of response for debugging
    console.log('Response text (first 100 chars):', text.substring(0, 100))
    
    // Check if response is "Not found" or other error strings
    if (!text || text.includes('Not found') || text.includes('not found')) {
      console.warn('❌ API returned "Not found" or empty response')
      return null
    }
    
    // Try to parse as JSON
    return JSON.parse(text)
  } catch (error) {
    console.error('❌ JSON parse error:', error instanceof Error ? error.message : error)
    return null
  }
}

// ============================================
// STEP 3: Format Prothomashop product data
// ============================================

function formatProthomashopProduct(product: ProthomashopProduct, baseUrl?: string): Product {
  // Remove HTML tags from description
  const cleanDescription = product.short_description 
    ? product.short_description.replace(/<[^>]*>/g, '').trim()
    : ''
  
  return {
    id: product.id.toString(),
    name: product.title,
    price: product.sale_price || product.price,
    oldPrice: product.price > product.sale_price ? product.price : undefined,
    image: baseUrl ? `${baseUrl}${product.image}` : `https://admin.prothomashop.com/public/uploads/products/${product.image}`,
    rating: {
      stars: 4.5,
      count: product.total_orders || 0
    },
    category: product.category || 'Book',
    description: cleanDescription,
    sku: product.sku,
    shipping_cost: product.shipping_cost,
    brand_id: product.brand_id,
    vendor_id: product.vendor_id,
    totalOrders: product.total_orders
  }
}

// ============================================
// STEP 4: Fetch data from a single site
// ============================================

async function fetchSingleSite(site: SiteConfig): Promise<SiteProducts> {
  try {
    console.log(`\n🔄 Fetching data from ${site.name}...`)
    console.log(`📡 API URL: ${site.apiUrl}`)
    
    const response = await fetch(site.apiUrl, {
      next: { revalidate: 3600 }
    })
    
    // Log response details
    console.log(`📊 Response Status: ${response.status} ${response.statusText}`)
    console.log(`📋 Response Headers:`)
    console.log(`   Content-Type: ${response.headers.get('content-type')}`)
    console.log(`   Content-Length: ${response.headers.get('content-length')}`)
    
    if (!response.ok) {
      console.warn(`❌ ${site.name} - HTTP error! Status: ${response.status}`)
      
      // Try to get error message from response
      const errorText = await response.text()
      console.warn(`Error response body:`, errorText.substring(0, 200))
      
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }
    
    // Use safe JSON parser
    const data: GenericApiResponse = await safeJsonParse(response)
    
    if (!data) {
      console.warn(`❌ ${site.name}: No valid data received - switching to fallback`)
      
      // IMMEDIATELY return fallback products
      const fallbackProducts = getFallbackProducts()
      console.log(`✅ ${site.name}: Loaded ${fallbackProducts.length} fallback products`)
      
      return {
        id: site.id,
        site: site.name,
        products: fallbackProducts,
        success: true,
        error: 'Using fallback data (API returned invalid response)'
      }
    }
    
    let products: Product[] = []
    
    // CASE 1: Prothomashop data format
    if (site.id === 'prothomashop' && data.success && data.result?.products) {
      console.log(`✅ ${site.name}: Detected Prothomashop format with ${data.result.products.length} products`)
      products = data.result.products.map((product: any) => 
        formatProthomashopProduct(product as ProthomashopProduct, site.imageUrl)
      )
    } 
    // CASE 2: Direct array format
    else if (Array.isArray(data)) {
      console.log(`✅ ${site.name}: Detected direct array format with ${data.length} products`)
      products = data as Product[]
    } 
    // CASE 3: Data inside 'products' property
    else if (data.products) {
      console.log(`✅ ${site.name}: Detected products property format`)
      products = data.products.map((p: any) => ({
        id: p.id.toString(),
        name: p.name || p.title || 'Unknown Product',
        price: p.sale_price || p.price,
        oldPrice: p.sale_price && p.sale_price < p.price ? p.price : undefined,
        image: p.image || p.thumbnail || '/placeholder.jpg',
        rating: {
          stars: p.rating || 0,
          count: p.reviews || 0
        }
      }))
    } 
    // CASE 4: Data inside 'result.products'
    else if (data.result?.products) {
      console.log(`✅ ${site.name}: Detected result.products format with ${data.result.products.length} products`)
      products = data.result.products.map((p: any) => ({
        id: p.id.toString(),
        name: p.name || p.title || 'Unknown Product',
        price: p.sale_price || p.price,
        oldPrice: p.sale_price && p.sale_price < p.price ? p.price : undefined,
        image: p.image || p.thumbnail || '/placeholder.jpg',
        rating: {
          stars: p.rating || 0,
          count: p.reviews || p.total_orders || 0
        }
      }))
    }
    else {
      console.warn(`⚠️ ${site.name}: Unknown data format`, Object.keys(data))
    }
    
    console.log(`📦 ${site.name}: Processed ${products.length} products`)
    
    // If no products from API, use fallback
    if (products.length === 0) {
      console.warn(`⚠️ ${site.name}: API returned 0 products - using fallback`)
      const fallbackProducts = getFallbackProducts()
      console.log(`✅ ${site.name}: Loaded ${fallbackProducts.length} fallback products`)
      
      return {
        id: site.id,
        site: site.name,
        products: fallbackProducts,
        success: true,
        error: 'Using fallback data (API returned empty products array)'
      }
    }
    
    console.log(`✅ ${site.name}: Successfully loaded ${products.length} products`)
    
    return {
      id: site.id,
      site: site.name,
      products: products,
      success: true
    }
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error(`❌ ${site.name} data fetch failed:`, errorMessage)
    console.log(`⚠️ ${site.name}: Switching to fallback products`)
    
    // Return fallback products instead of empty array
    const fallbackProducts = getFallbackProducts()
    console.log(`✅ ${site.name}: Loaded ${fallbackProducts.length} fallback products`)
    
    return {
      id: site.id,
      site: site.name,
      products: fallbackProducts,
      success: true, // Mark as success since we have fallback data
      error: `Fetch failed: ${errorMessage}`
    }
  }
}

// ============================================
// STEP 5: Fetch data from all sites
// ============================================

export async function getAllSitesProducts(): Promise<SiteProducts[]> {
  try {
    console.log('🔄 Starting data fetch from all sites...')
    console.log(`📊 Total sites configured: ${SITES.length}`)
    
    const promises = SITES.map(site => fetchSingleSite(site))
    const results = await Promise.all(promises)
    
    const successfulSites = results.filter((r: SiteProducts) => r.success).length
    const totalProducts = results.reduce((sum: number, r: SiteProducts) => sum + r.products.length, 0)
    
    // Check if we're using fallback data
    const usingFallback = results.some(r => r.error !== undefined)
    const fallbackCount = results.filter(r => r.error !== undefined).length
    
    console.log(`\n=== Data Load Summary ===`)
    console.log(`${successfulSites}/${SITES.length} sites succeeded`)
    console.log(`Total products: ${totalProducts}`)
    
    if (usingFallback) {
      console.log(`⚠️ ${fallbackCount} site(s) using fallback data`)
      results.forEach(r => {
        if (r.error) {
          console.log(`  - ${r.site}: ${r.error}`)
        }
      })
    } else {
      console.log('✅ All sites loaded successfully with real API data')
    }
    
    console.log(`=========================\n`)
    
    return results
    
  } catch (error) {
    console.error('Major error! Returning fallback products for all sites', error)
    // Return fallback products for all sites
    const fallbackProducts = getFallbackProducts()
    console.log(`✅ Emergency fallback: Loaded ${fallbackProducts.length} products`)
    
    return SITES.map(site => ({
      id: site.id,
      site: site.name,
      products: fallbackProducts,
      success: true,
      error: 'Using fallback data due to major error'
    }))
  }
}

// ============================================
// STEP 6: Get products by category
// ============================================

export async function getCategoryProducts(categoryId: number): Promise<Product[]> {
  try {
    const site = SITES.find(s => s.id === 'prothomashop')
    if (!site || !site.categoryApi) {
      console.warn('No category API found for prothomashop')
      return []
    }
    
    const url = site.categoryApi(categoryId)
    console.log('Fetching category products from:', url)
    
    const response = await fetch(url, {
      next: { revalidate: 3600 }
    })
    
    if (!response.ok) {
      console.error('Category API response not OK:', response.status)
      return []
    }
    
    // Use safe JSON parser
    const data: GenericApiResponse = await safeJsonParse(response)
    
    if (!data) {
      console.warn('Category API returned no valid data')
      return []
    }
    
    if (data.success && data.result?.products) {
      const products = data.result.products.map((product: any) => 
        formatProthomashopProduct(product as ProthomashopProduct, site.imageUrl)
      )
      
      console.log(`Category ${categoryId}: ${products.length} products loaded`)
      return products
    }
    
    console.warn('Unexpected category API response format:', data)
    return []
    
  } catch (error) {
    console.error('Error fetching category products:', error)
    return []
  }
}

// ============================================
// STEP 7: Get products from a specific site
// ============================================

export async function getSiteProducts(siteId: string): Promise<Product[]> {
  const allData = await getAllSitesProducts()
  const siteData = allData.find(site => site.id === siteId)
  return siteData?.products || []
}

// ============================================
// STEP 8: Get all products combined
// ============================================

export async function getAllProducts(): Promise<Product[]> {
  const sitesData = await getAllSitesProducts()
  return sitesData.flatMap(site => site.products)
}
