import { notFound } from 'next/navigation'
import { categories } from '@/app/data/categories'
import { getAllSitesProducts } from '@/app/lib/products'
import ProductCard from '@/app/components/shared/ProductCard'

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find(c => c.slug === params.slug)
  
  if (!category) {
    notFound()
  }

  const sitesData = await getAllSitesProducts()
  const allProducts = sitesData.flatMap(site => site.products)
  const categoryProducts = allProducts.slice(0, 12)

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h1>
      <p className="text-gray-600 mb-6">{category.count} products available</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryProducts.map((product: any) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.priceCents / 100}
            oldPrice={product.priceCents / 100 * 1.2}
            image={product.image}
            rating={product.rating.stars}
            reviewCount={product.rating.count}
          />
        ))}
      </div>
    </div>
  )
}