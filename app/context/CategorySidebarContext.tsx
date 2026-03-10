'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface CategorySidebarContextType {
  isOpen: boolean
  toggleSidebar: () => void
  closeSidebar: () => void
  openSidebar: () => void
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CategorySidebarContext = createContext<CategorySidebarContextType | undefined>(undefined)

export function CategorySidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
  console.log('🔄 [CategorySidebarContext] Toggling sidebar via context')
    setIsOpen(prev => !prev)
  }

  const closeSidebar = () => {
   console.log('❌ Closing sidebar via context')
    setIsOpen(false)
  }

  const openSidebar = () => {
   console.log('✅ Opening sidebar via context')
    setIsOpen(true)
  }

 return (
    <CategorySidebarContext.Provider value={{ isOpen, toggleSidebar, closeSidebar, openSidebar, setIsOpen }}>
      {children}
    </CategorySidebarContext.Provider>
  )
}

export function useCategorySidebar() {
  const context = useContext(CategorySidebarContext)
  if (context === undefined) {
    throw new Error('useCategorySidebar must be used within a CategorySidebarProvider')
  }
 return context
}
