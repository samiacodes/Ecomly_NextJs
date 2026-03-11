import SiteTabs from "./components/SiteTabs"
import HeroCarousel from "./components/HeroCarousel"
import { getAllSitesProducts } from "./lib/products"


export default async function Home() {
  console.log('\n [HOMEPAGE] Loading...')
  
  // Load data on server side
  const sitesData = await getAllSitesProducts()
  
  const totalProducts = sitesData.reduce((sum, site) => sum + site.products.length, 0)
  console.log(` [HOMEPAGE] Loaded ${sitesData.length} sites with ${totalProducts} total products`)
  
  // Check for failed sites
  const failedSites = sitesData.filter(site => !site.success).length
  if (failedSites > 0) {
    console.warn(' [HOMEPAGE] Some sites failed to load')
    sitesData.forEach(site => {
      if (site.error) {
        console.warn(`  - ${site.site}: ${site.error}`)
      }
    })
  } else {
    console.log(' [HOMEPAGE] All sites loaded with real API data')
  }
  
  console.log(' [HOMEPAGE] Rendering complete\n')

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Carousel Banner */}
      <HeroCarousel />

      {/* Product Tabs - Products from different sites */}
      <section className="container mx-auto px-4 py-12">
        <SiteTabs sitesData={sitesData} />
      </section>

      
    </main>
  )
}