import ProductCard from '@/app/components/shared/ProductCard'
import { getAllSitesProducts } from '@/app/lib/products'
import { Product } from '@/app/types/product'
import { notFound } from 'next/navigation'

interface CategoryPageProps {
  params: Promise<{
    slug: string
  }>
}

// Map category slugs to display names and IDs
const categoryNames: Record<string, string> = {
  'books': 'Books',
  'bags': 'Bags',
  'jewelry': 'Jewelry',
  'shoes': 'Shoes',
  'beauty': 'Beauty',
  'mens-wear': "Men's Wear",
  'women-wear': "Women's Wear",
  'eyewear': 'Eyewear',
  'baby-items': 'Baby Items',
  'watches': 'Watches',
  'gadgets': 'Gadgets'
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params
  const { slug } = resolvedParams
  
  // Check if category is valid
  if (!categoryNames[slug]) {
    notFound()
  }
  
  // Get all products
  const sitesData = await getAllSitesProducts()
  const allProducts: Product[] = sitesData.flatMap(site => site.products)
  
  // Filter products by category (simple filtering for demo)
  const categoryProducts = allProducts.filter((product: Product) => 
    product.category?.toLowerCase().includes(slug.replace('-', ' ')) || 
    product.name.toLowerCase().includes(categoryNames[slug].toLowerCase())
  ).slice(0, 12)
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{categoryNames[slug]}</h1>
          <p className="text-gray-600 mt-2">{categoryProducts.length} products found</p>
        </div>
        
        {/* Product Grid */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categoryProducts.map((product: Product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
                image={product.image}
                rating={product.rating.stars}
                reviewCount={product.rating.count}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">We couldn&apos;t find any products in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}