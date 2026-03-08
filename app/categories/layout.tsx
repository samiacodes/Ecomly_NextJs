'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import CategorySidebar from '../components/layout/CategorySidebar'

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()

  // Close sidebar when URL changes (for mobile)
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false)
    }
  }, [pathname])

  // Custom event listener for toggle button
  useEffect(() => {
    const toggleSidebar = () => {
      console.log('🔍 Toggle event received in layout')
      setIsSidebarOpen(prev => {
        const newState = !prev
        console.log('📂 Sidebar state changed from', prev, 'to', newState)
        return newState
      })
    }

    console.log('🔍 Setting up toggle event listener')
    window.addEventListener('toggleCategorySidebar', toggleSidebar)
    
    return () => {
      console.log('🔍 Cleaning up toggle event listener')
      window.removeEventListener('toggleCategorySidebar', toggleSidebar)
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-6">
        <CategorySidebar
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  )
}