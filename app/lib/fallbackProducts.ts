// lib/fallbackProducts.ts
// Fallback product data - used when real API fails

import { Product } from '@/app/types/product'

export const FALLBACK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "হাদিস বিষয়ক আলোচনা",
    price: 215,
    oldPrice: 300,
    image: "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/book1.jpg",
    rating: {
      stars: 4.5,
      count: 98
    },
    category: "Book",
    description: "একটি চমৎকার বই",
    totalOrders: 98
  },
  {
    id: "2",
    name: "ছোটদের পুরাণের গল্প",
    price: 455,
    oldPrice: 885,
    image: "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/book2.jpg",
    rating: {
      stars: 4.3,
      count: 74
    },
    category: "Book",
    description: "পুরাণের অসাধারণ সব গল্প",
    totalOrders: 74
  },
  {
    id: "3",
    name: "গ্রিক পুরাণের গল্প",
    price: 248,
    oldPrice: 938,
    image: "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/book3.jpg",
    rating: {
      stars: 4.7,
      count: 65
    },
    category: "Book",
    description: "গ্রিক পুরাণের ক্লাসিক গল্প",
    totalOrders: 65
  },
  {
    id: "4",
    name: "ইমসেফ",
    price: 237,
    oldPrice: 876,
    image: "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/book4.jpg",
    rating: {
      stars: 4.2,
      count: 62
    },
    category: "Book",
    description: "রহস্যময় একটি উপন্যাস",
    totalOrders: 62
  },
  {
    id: "5",
    name: "প্রাচীন সভ্যতা সিরিজ: মিসর",
    price: 75,
    oldPrice: 443,
    image: "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/book5.jpg",
    rating: {
      stars: 4.8,
      count: 24
    },
    category: "Book",
    description: "মিসরের প্রাচীন সভ্যতার ইতিহাস",
    totalOrders: 24
  },
  {
    id: "6",
    name: "ছোটদের রাজনীতি ছোটদের অর্থনীতি",
    price: 456,
    oldPrice: 286,
    image: "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/book6.jpg",
    rating: {
      stars: 4.1,
      count: 22
    },
    category: "Book",
    description: "শিশুদের জন্য রাজনীতি ও অর্থনীতি",
    totalOrders: 22
  },
  {
    id: "7",
    name: "স্মার্টফোন - 128GB",
    price: 45000,
    oldPrice: 50000,
    image: "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/smartphone.jpg",
    rating: {
      stars: 4.6,
      count: 320
    },
    category: "Electronics",
    description: "অত্যাধুনিক ফিচার সমৃদ্ধ স্মার্টফোন",
    totalOrders: 320
  },
  {
    id: "8",
    name: "ওয়্যারলেস হেডফোন",
    price: 7999,
    oldPrice: 9999,
    image: "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/wireless-headphones.jpg",
    rating: {
      stars: 4.7,
      count: 230
    },
    category: "Electronics",
    description: "উন্নত মানের সাউন্ড কোয়ালিটি",
    totalOrders: 230
  }
]

/**
 * Get fallback products when API fails
 */
export function getFallbackProducts(): Product[] {
  console.log('⚠️ Using fallback products - API unavailable')
  return FALLBACK_PRODUCTS
}

/**
 * Check if we should use fallback data
 */
export function shouldUseFallback(siteProducts: Product[]): boolean {
  return siteProducts.length === 0
}
