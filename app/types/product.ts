// types/product.ts

/**
 * Main Product interface used throughout the application
 */
export interface Product {
  id: string
  name: string
  price: number
  oldPrice?: number
  image: string
  rating: {
    stars: number
    count: number
  }
  category?: string
  description?: string
  sku?: string
  shipping_cost?: number
  brand_id?: number
  vendor_id?: string
  totalOrders?: number
}

/**
 * Products from a single site/source
 */
export interface SiteProducts {
  id: string
  site: string
  products: Product[]
  success: boolean
  error?: string
}

/**
 * Prothomashop API response format
 */
export interface ProthomashopApiResponse {
  success: boolean
  message?: string
  code?: number
  result?: {
    category?: string
    products: ProthomashopProduct[]
  }
}

/**
 * Raw Prothomashop product data from API
 */
export interface ProthomashopProduct {
  id: number
  title: string
  price: number
  sale_price: number
  image: string
  total_orders: number
  short_description?: string
  sku?: string
  shipping_cost?: number
  brand_id?: number
  vendor_id?: string
  category?: string
}

/**
 * Generic API response for any e-commerce platform
 */
export interface GenericApiResponse {
  success?: boolean
  data?: {
    products?: Array<{
      id: string | number
      name?: string
      title?: string
      price: number
      sale_price?: number
      image?: string
      thumbnail?: string
      rating?: number
      reviews?: number
    }>
  }
  products?: Array<{
    id: string | number
    name?: string
    title?: string
    price: number
    sale_price?: number
    image?: string
    thumbnail?: string
    rating?: number
    reviews?: number
  }>
  result?: {
    products?: Array<{
      id: string | number
      name?: string
      title?: string
      price: number
      sale_price?: number
      image?: string
      thumbnail?: string
      rating?: number
      reviews?: number
      total_orders?: number
    }>
  }
}