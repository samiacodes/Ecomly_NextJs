'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useCategorySidebar } from '@/app/context/CategorySidebarContext'

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
 const { closeSidebar } = useCategorySidebar()
 const pathname = usePathname()

  // Close sidebar on mobile when URL changes
  useEffect(() => {
   if (typeof window !== 'undefined' && window.innerWidth < 1024) {
     closeSidebar()
   }
  }, [pathname, closeSidebar])

 return (
   <div className="container-custom py-8">
     <main className="min-w-0">
       {children}
     </main>
   </div>
  )
}
