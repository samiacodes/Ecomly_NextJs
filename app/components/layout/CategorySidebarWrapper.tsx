'use client'

import CategorySidebar from './CategorySidebar'
import { useCategorySidebar } from '@/app/context/CategorySidebarContext'
import { useState } from 'react'

export default function CategorySidebarWrapper() {
  const { closeSidebar } = useCategorySidebar()
  const [isHovered, setIsHovered] = useState(false)
  
 return (
   <div
    onMouseEnter={() => setIsHovered(true)}
     onMouseLeave={() => setIsHovered(false)}
   >
     <CategorySidebar isOpen={isHovered} onClose={closeSidebar} />
   </div>
  )
}
