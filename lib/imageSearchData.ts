// Fake data for image search functionality
// This simulates backend responses until the actual API is ready

export interface FakeProduct {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  tags: string[];
  colors: string[];
  matchScore: number;
}

export const fakeProducts: FakeProduct[] = [
  // Wallets & Bags
  {
    id: '1',
    name: 'Black Leather Wallet',
    price: 1040,
    oldPrice: 1500,
    image: '/images/wallet.jpg',
    rating: 4.5,
    reviewCount: 128,
    category: 'Bags',
    tags: ['leather', 'wallet', 'black', 'men'],
    colors: ['black', 'brown'],
    matchScore: 95
  },
  {
    id: '2',
    name: 'Brown Leather Wallet',
    price: 980,
    oldPrice: 1400,
    image: '/images/wallet-brown.jpg',
    rating: 4.3,
    reviewCount: 95,
    category: 'Bags',
    tags: ['leather', 'wallet', 'brown', 'men'],
    colors: ['brown', 'tan'],
    matchScore: 92
  },
  {
    id: '3',
    name: 'Women\'s Clutch Bag',
    price: 1850,
    oldPrice: 2500,
    image: '/images/clutch.jpg',
    rating: 4.7,
    reviewCount: 210,
    category: 'Bags',
    tags: ['clutch', 'bag', 'women', 'evening'],
    colors: ['black', 'gold', 'silver'],
    matchScore: 88
  },

  // Shoes
  {
    id: '4',
    name: 'White Sneakers',
    price: 2200,
    oldPrice: 3000,
    image: '/images/white-sneakers.jpg',
    rating: 4.6,
    reviewCount: 342,
    category: 'Shoes',
    tags: ['sneakers', 'white', 'casual', 'sports'],
    colors: ['white', 'gray'],
    matchScore: 96
  },
  {
    id: '5',
    name: 'Running Shoes Pro',
    price: 3500,
    oldPrice: 4500,
    image: '/images/running-shoes.jpg',
    rating: 4.8,
    reviewCount: 456,
    category: 'Shoes',
    tags: ['running', 'shoes', 'sports', 'athletic'],
    colors: ['blue', 'black', 'red'],
    matchScore: 94
  },
  {
    id: '6',
    name: 'Casual Loafers',
    price: 1680,
    oldPrice: 2200,
    image: '/images/loafers.jpg',
    rating: 4.4,
    reviewCount: 178,
    category: 'Shoes',
    tags: ['loafers', 'casual', 'formal', 'men'],
    colors: ['brown', 'black'],
    matchScore: 89
  },

  // Watches
  {
    id: '7',
    name: 'Classic Silver Watch',
    price: 4500,
    oldPrice: 6000,
    image: '/images/silver-watch.jpg',
    rating: 4.7,
    reviewCount: 289,
    category: 'Watches',
    tags: ['watch', 'silver', 'classic', 'formal'],
    colors: ['silver', 'gray'],
    matchScore: 97
  },
  {
    id: '8',
    name: 'Luxury Gold Watch',
    price: 8900,
    oldPrice: 12000,
    image: '/images/gold-watch.jpg',
    rating: 4.9,
    reviewCount: 412,
    category: 'Watches',
    tags: ['watch', 'gold', 'luxury', 'premium'],
    colors: ['gold', 'yellow'],
    matchScore: 95
  },
  {
    id: '9',
    name: 'Sports Digital Watch',
    price: 2800,
    oldPrice: 3500,
    image: '/images/digital-watch.jpg',
    rating: 4.5,
    reviewCount: 234,
    category: 'Watches',
    tags: ['watch', 'digital', 'sports', 'casual'],
    colors: ['black', 'red', 'blue'],
    matchScore: 91
  },

  // Clothing
  {
    id: '10',
    name: 'Cotton T-Shirt Black',
    price: 650,
    oldPrice: 900,
    image: '/images/black-tshirt.jpg',
    rating: 4.3,
    reviewCount: 567,
    category: 'Clothing',
    tags: ['t-shirt', 'cotton', 'black', 'casual'],
    colors: ['black', 'gray', 'navy'],
    matchScore: 93
  },
  {
    id: '11',
    name: 'Formal Shirt White',
    price: 1200,
    oldPrice: 1600,
    image: '/images/white-shirt.jpg',
    rating: 4.6,
    reviewCount: 389,
    category: 'Clothing',
    tags: ['shirt', 'formal', 'white', 'office'],
    colors: ['white', 'blue', 'pink'],
    matchScore: 90
  },
  {
    id: '12',
    name: 'Denim Jeans Blue',
    price: 1850,
    oldPrice: 2400,
    image: '/images/blue-jeans.jpg',
    rating: 4.5,
    reviewCount: 445,
    category: 'Clothing',
    tags: ['jeans', 'denim', 'blue', 'casual'],
    colors: ['blue', 'black', 'gray'],
    matchScore: 92
  },

  // Electronics
  {
    id: '13',
    name: 'Wireless Headphones',
    price: 3200,
    oldPrice: 4000,
    image: '/images/headphones.jpg',
    rating: 4.7,
    reviewCount: 678,
    category: 'Electronics',
    tags: ['headphones', 'wireless', 'bluetooth', 'audio'],
    colors: ['black', 'white', 'blue'],
    matchScore: 94
  },
  {
    id: '14',
    name: 'Smartphone Stand',
    price: 450,
    oldPrice: 700,
    image: '/images/phone-stand.jpg',
    rating: 4.2,
    reviewCount: 234,
    category: 'Electronics',
    tags: ['phone', 'stand', 'accessory', 'desk'],
    colors: ['black', 'silver', 'white'],
    matchScore: 85
  },
  {
    id: '15',
    name: 'Power Bank 10000mAh',
    price: 1800,
    oldPrice: 2500,
    image: '/images/powerbank.jpg',
    rating: 4.6,
    reviewCount: 512,
    category: 'Electronics',
    tags: ['powerbank', 'charger', 'portable', 'battery'],
    colors: ['black', 'white'],
    matchScore: 87
  },

  // Home & Living
  {
    id: '16',
    name: 'Decorative Lamp',
    price: 1450,
    oldPrice: 2000,
    image: '/images/lamp.jpg',
    rating: 4.4,
    reviewCount: 156,
    category: 'Home',
    tags: ['lamp', 'light', 'decor', 'home'],
    colors: ['white', 'gold', 'black'],
    matchScore: 86
  },
  {
    id: '17',
    name: 'Wall Clock Modern',
    price: 980,
    oldPrice: 1300,
    image: '/images/wall-clock.jpg',
    rating: 4.3,
    reviewCount: 198,
    category: 'Home',
    tags: ['clock', 'wall', 'modern', 'decor'],
    colors: ['black', 'white', 'silver'],
    matchScore: 84
  },
  {
    id: '18',
    name: 'Plant Pot Ceramic',
    price: 650,
    oldPrice: 900,
    image: '/images/plant-pot.jpg',
    rating: 4.5,
    reviewCount: 267,
    category: 'Home',
    tags: ['pot', 'plant', 'ceramic', 'garden'],
    colors: ['white', 'terracotta', 'blue'],
    matchScore: 82
  },

  // Accessories
  {
    id: '19',
    name: 'Sunglasses Aviator',
    price: 1250,
    oldPrice: 1800,
    image: '/images/sunglasses.jpg',
    rating: 4.6,
    reviewCount: 345,
    category: 'Accessories',
    tags: ['sunglasses', 'aviator', 'fashion', 'summer'],
    colors: ['black', 'gold', 'silver'],
    matchScore: 91
  },
  {
    id: '20',
    name: 'Leather Belt Brown',
    price: 780,
    oldPrice: 1100,
    image: '/images/belt.jpg',
    rating: 4.4,
    reviewCount: 289,
    category: 'Accessories',
    tags: ['belt', 'leather', 'brown', 'men'],
    colors: ['brown', 'black'],
    matchScore: 88
  },
  {
    id: '21',
    name: 'Baseball Cap',
    price: 550,
    oldPrice: 800,
    image: '/images/cap.jpg',
    rating: 4.2,
    reviewCount: 412,
    category: 'Accessories',
    tags: ['cap', 'hat', 'casual', 'sports'],
    colors: ['black', 'blue', 'red', 'gray'],
    matchScore: 85
  },

  // Beauty
  {
    id: '22',
    name: 'Perfume Eau de Parfum',
    price: 2800,
    oldPrice: 3500,
    image: '/images/perfume.jpg',
    rating: 4.7,
    reviewCount: 523,
    category: 'Beauty',
    tags: ['perfume', 'fragrance', 'luxury', 'unisex'],
    colors: ['clear', 'gold'],
    matchScore: 89
  },
  {
    id: '23',
    name: 'Skincare Set',
    price: 3200,
    oldPrice: 4200,
    image: '/images/skincare.jpg',
    rating: 4.8,
    reviewCount: 612,
    category: 'Beauty',
    tags: ['skincare', 'beauty', 'set', 'gift'],
    colors: ['white', 'pink'],
    matchScore: 87
  }
];

// Simulated search results based on image analysis
export const fakeSearchResults: Record<string, string[]> = {
  'wallet': ['1', '2', '3', '20'],
  'shoe': ['4', '5', '6'],
  'watch': ['7', '8', '9'],
  'clothing': ['10', '11', '12'],
  'electronics': ['13', '14', '15'],
  'home': ['16', '17', '18'],
  'accessories': ['19', '20', '21'],
  'beauty': ['22', '23'],
  'default': ['1', '4', '7', '10', '13', '16', '19']
};

// Simulate image analysis and return matching products
export function simulateImageSearch(imageData: string | null): Promise<{
  detectedTags: string[];
  detectedCategory: string;
  detectedColors: string[];
  products: FakeProduct[];
}> {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      // Randomly select a category for demo purposes
      const categories = Object.keys(fakeSearchResults);
      const randomCategory = categories[Math.floor(Math.random() * (categories.length - 1))];
      
      const productIds = fakeSearchResults[randomCategory] || fakeSearchResults['default'];
      const products = productIds
        .map(id => fakeProducts.find(p => p.id === id))
        .filter((p): p is FakeProduct => p !== undefined)
        .sort((a, b) => b.matchScore - a.matchScore);

      resolve({
        detectedTags: products[0]?.tags || ['generic'],
        detectedCategory: products[0]?.category || 'General',
        detectedColors: products[0]?.colors || [],
        products: products
      });
    }, 1500); // 1.5 second delay to simulate processing
  });
}
