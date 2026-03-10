
import Footer from './components/layout/Footer/Footer'
import Navbar from './components/layout/Navbar'
import CategorySidebarWrapper from './components/layout/CategorySidebarWrapper'
import { LanguageProvider } from './context/LanguageContext'
import { CategorySidebarProvider } from '@/app/context/CategorySidebarContext'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
         <CategorySidebarProvider>
          <Navbar />
          <div className="flex">
            <CategorySidebarWrapper />
            <main className="flex-1">{children}</main>
          </div>
          <Footer />
         </CategorySidebarProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}