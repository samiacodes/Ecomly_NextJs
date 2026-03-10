'use client'

import { useState } from 'react'
import ProductCard from './shared/ProductCard'
import { SiteProducts, Product } from '@/app/types/product'

interface SiteTabProps {
  sitesData: SiteProducts[]
}

export default function SiteTabs({ sitesData }: SiteTabProps) {
  const [activeSite, setActiveSite] = useState(sitesData[0]?.site || '')

  const activeProducts = sitesData.find(s => s.site === activeSite)?.products || []
  
  // Debug logging
  console.log('SiteTabs received sitesData:', sitesData);
  console.log('Active site:', activeSite);
  console.log('Active products count:', activeProducts.length);
  if (activeProducts.length > 0) {
   console.log('First product image:', activeProducts[0].image);
  }

 return (
    <div>
      {/* Product grid - without tabs, just products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {activeProducts.slice(0, 8).map((product: Product) => (
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

      {/* View more button */}
      <div className="text-center mt-8">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
          View More Products
        </button>
      </div>
    </div>
  )
}
