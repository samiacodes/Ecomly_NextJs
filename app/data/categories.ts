export interface SubCategory {
  id: string
  name: string
  slug: string
  icon?: string
  count?: number
}

export interface Category {
  id: string
  name: string
  slug: string
  icon: string
  count?: number
  subCategories: SubCategory[]
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Bags',
    slug: 'bags',
    icon: 'Bag',
    count: 245,
    subCategories: [
      { id: '1-1', name: 'Backpacks', slug: 'backpacks', count: 45 },
      { id: '1-2', name: 'Handbags', slug: 'handbags', count: 78 },
      { id: '1-3', name: 'Laptop Bags', slug: 'laptop-bags', count: 34 },
      { id: '1-4', name: 'Travel Bags', slug: 'travel-bags', count: 56 },
      { id: '1-5', name: 'Wallet', slug: 'wallet', count: 32 },
    ]
  },
  {
    id: '2',
    name: 'Jewelry',
    slug: 'jewelry',
    icon: 'Gem',
    count: 189,
    subCategories: [
      { id: '2-1', name: 'Necklaces', slug: 'necklaces', count: 45 },
      { id: '2-2', name: 'Earrings', slug: 'earrings', count: 67 },
      { id: '2-3', name: 'Rings', slug: 'rings', count: 34 },
      { id: '2-4', name: 'Bracelets', slug: 'bracelets', count: 23 },
      { id: '2-5', name: 'Brooches', slug: 'brooches', count: 20 },
    ]
  },
  {
    id: '3',
    name: 'Shoes',
    slug: 'shoes',
    icon: 'Footprints',
    count: 312,
    subCategories: [
      { id: '3-1', name: 'Sneakers', slug: 'sneakers', count: 89 },
      { id: '3-2', name: 'Boots', slug: 'boots', count: 56 },
      { id: '3-3', name: 'Sandals', slug: 'sandals', count: 45 },
      { id: '3-4', name: 'Formal Shoes', slug: 'formal-shoes', count: 67 },
      { id: '3-5', name: 'Sports Shoes', slug: 'sports-shoes', count: 55 },
    ]
  },
  {
    id: '4',
    name: 'Beauty',
    slug: 'beauty',
    icon: 'Sparkles',
    count: 278,
    subCategories: [
      { id: '4-1', name: 'Makeup', slug: 'makeup', count: 89 },
      { id: '4-2', name: 'Skincare', slug: 'skincare', count: 67 },
      { id: '4-3', name: 'Hair Care', slug: 'hair-care', count: 45 },
      { id: '4-4', name: 'Perfumes', slug: 'perfumes', count: 34 },
      { id: '4-5', name: 'Nail Art', slug: 'nail-art', count: 43 },
    ]
  },
  {
    id: '5',
    name: 'Mens Wear',
    slug: 'mens-wear',
    icon: 'Shirt',
    count: 234,
    subCategories: [
      { id: '5-1', name: 'T-Shirts', slug: 'tshirts', count: 67 },
      { id: '5-2', name: 'Shirts', slug: 'shirts', count: 45 },
      { id: '5-3', name: 'Jeans', slug: 'jeans', count: 34 },
      { id: '5-4', name: 'Suits', slug: 'suits', count: 23 },
      { id: '5-5', name: 'Jackets', slug: 'jackets', count: 65 },
    ]
  },
  {
    id: '6',
    name: 'Women Wear',
    slug: 'women-wear',
    icon: 'Dress',
    count: 345,
    subCategories: [
      { id: '6-1', name: 'Dresses', slug: 'dresses', count: 89 },
      { id: '6-2', name: 'Tops', slug: 'tops', count: 56 },
      { id: '6-3', name: 'Jeans', slug: 'jeans', count: 45 },
      { id: '6-4', name: 'Skirts', slug: 'skirts', count: 34 },
      { id: '6-5', name: 'Kurtis', slug: 'kurtis', count: 121 },
    ]
  },
  {
    id: '7',
    name: 'Eyewear',
    slug: 'eyewear',
    icon: 'Glasses',
    count: 98,
    subCategories: [
      { id: '7-1', name: 'Sunglasses', slug: 'sunglasses', count: 45 },
      { id: '7-2', name: 'Spectacles', slug: 'spectacles', count: 34 },
      { id: '7-3', name: 'Contact Lenses', slug: 'contact-lenses', count: 19 },
    ]
  },
  {
    id: '8',
    name: 'Baby Items',
    slug: 'baby-items',
    icon: 'Baby',
    count: 156,
    subCategories: [
      { id: '8-1', name: 'Diapers', slug: 'diapers', count: 34 },
      { id: '8-2', name: 'Toys', slug: 'toys', count: 56 },
      { id: '8-3', name: 'Clothing', slug: 'baby-clothing', count: 45 },
      { id: '8-4', name: 'Feeding', slug: 'feeding', count: 21 },
    ]
  },
  {
    id: '9',
    name: 'Watches',
    slug: 'watches',
    icon: 'Watch',
    count: 167,
    subCategories: [
      { id: '9-1', name: 'Analog', slug: 'analog', count: 56 },
      { id: '9-2', name: 'Digital', slug: 'digital', count: 34 },
      { id: '9-3', name: 'Smart Watches', slug: 'smart-watches', count: 45 },
      { id: '9-4', name: 'Luxury', slug: 'luxury', count: 32 },
    ]
  },
  {
    id: '10',
    name: 'Gadgets',
    slug: 'gadgets',
    icon: 'Smartphone',
    count: 203,
    subCategories: [
      { id: '10-1', name: 'Mobile Phones', slug: 'mobile-phones', count: 67 },
      { id: '10-2', name: 'Tablets', slug: 'tablets', count: 34 },
      { id: '10-3', name: 'Headphones', slug: 'headphones', count: 45 },
      { id: '10-4', name: 'Speakers', slug: 'speakers', count: 32 },
      { id: '10-5', name: 'Accessories', slug: 'accessories', count: 25 },
    ]
  }
]