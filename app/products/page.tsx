import { getAllSitesProducts } from "../lib/products"
import ProductGrid from "./ProductGrid"


export default async function Home() {
  const sitesData = await getAllSitesProducts()
  const allProducts = sitesData.flatMap(site => site.products)

 return (
    <main className="min-h-screen bg-gray-50">
      

      {/* প্রোডাক্ট সেকশন - শুধু প্রোডাক্ট, কোন ট্যাব নেই */}
      <section className="container-custom py-12">
        
        <ProductGrid initialProducts={allProducts} />
        
      </section>
    </main>
  )
}
