'use client'

import { useState, useEffect } from 'react'
import CategorySidebar from '../components/layout/CategorySidebar'

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // ন্যাভবারের ইভেন্ট শোনার জন্য
  useEffect(() => {
    const handleToggleSidebar = () => {
      setIsSidebarOpen(prev => !prev)
    }

    window.addEventListener('toggleCategorySidebar', handleToggleSidebar)
    return () => window.removeEventListener('toggleCategorySidebar', handleToggleSidebar)
  }, [])

  return (
    <div className="container-custom py-8">
      <div className="flex gap-8">
        <CategorySidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}