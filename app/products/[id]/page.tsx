import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Star, ShoppingCart, Heart } from 'lucide-react'
import { getAllSitesProducts } from '@/app/lib/products'

export default async function ProductPage({ params }: { params: { id: string } }) {
  // ১. সব সাইট থেকে প্রোডাক্ট ডাটা লোড করুন
  const sitesData = await getAllSitesProducts()
  const allProducts = sitesData.flatMap(site => site.products)
  
  // ২. URL-এর আইডি অনুযায়ী প্রোডাক্ট খুঁজুন
  const product = allProducts.find((p: any) => p.id === params.id)
  
  // ৩. প্রোডাক্ট না পেলে 404 পেজ দেখান
  if (!product) {
    notFound()
  }

  // ৪. প্রোডাক্ট পেলে ডিটেইল দেখান
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container-custom py-8">
        {/* ব্রেডক্রম্ব */}
        <div className="text-sm text-gray-500 mb-6">
          Home / Products / {product.name}
        </div>

        {/* প্রোডাক্ট ডিটেইল কার্ড */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ইমেজ */}
            <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* ইনফো */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              {/* রেটিং */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < Math.floor(product.rating?.stars || 0) 
                        ? 'fill-yellow-400 text-yellow-400' 
                        : 'text-gray-300'
                      }
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.rating?.count || 0} reviews)</span>
              </div>

              {/* প্রাইস */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  ৳{(product.priceCents / 100).toLocaleString()}
                </span>
              </div>

              {/* ডেসক্রিপশন */}
              <p className="text-gray-600 mb-8">
                {product.description || 'No description available'}
              </p>

              {/* অ্যাকশন বাটন */}
              <div className="flex gap-4">
                <button className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition flex items-center justify-center gap-2">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <button className="p-3 border border-gray-200 rounded-lg hover:border-primary-600 transition">
                  <Heart size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}