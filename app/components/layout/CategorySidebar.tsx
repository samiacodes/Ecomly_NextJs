'use client'

import Link from 'next/link'
import { usePathname} from 'next/navigation'
import { useState, useEffect } from 'react'
import { 
  ShoppingBag, 
  Gem, 
  Footprints, 
  Sparkles, 
  Shirt, 
  Glasses,
  Baby,
  Watch,
  Smartphone,
  ChevronRight,
  X
} from 'lucide-react'
import { useLanguage} from '@/app/context/LanguageContext'

const categories = [
  { id: 'bags', name: 'Bags', icon: ShoppingBag, href: '/categories/bags' },
  { id: 'jewelry', name: 'Jewelry', icon: Gem, href: '/categories/jewelry' },
  { id: 'shoes', name: 'Shoes', icon: Footprints, href: '/categories/shoes' },
  { id: 'beauty', name: 'Beauty', icon: Sparkles, href: '/categories/beauty' },
  { id: 'mens-wear', name: 'Mens Wear', icon: Shirt, href: '/categories/mens-wear' },
  { id: 'women-wear', name: 'Women Wear', icon: Shirt, href: '/categories/women-wear' },
  { id: 'eyewear', name: 'Eyewear', icon: Glasses, href: '/categories/eyewear' },
  { id: 'baby-items', name: 'Baby Items', icon: Baby, href: '/categories/baby-items' },
  { id: 'watches', name: 'Watches', icon: Watch, href: '/categories/watches' },
  { id: 'gadgets', name: 'Gadgets', icon: Smartphone, href: '/categories/gadgets' },
]

interface CategorySidebarProps {
 isOpen: boolean
 onClose: () => void
}

export default function CategorySidebar({ isOpen, onClose }: CategorySidebarProps) {
  const pathname = usePathname()
  const { t } = useLanguage()
  const [isMobile, setIsMobile] = useState(false)

 useEffect(() => {
  const checkMobile = () => {
     setIsMobile(window.innerWidth < 1024)
   }
   
  checkMobile()
   window.addEventListener('resize', checkMobile)
  return () => window.removeEventListener('resize', checkMobile)
 }, [])

 // On desktop, always show; on mobile, use hover state
 const showSidebar = !isMobile || (isMobile && isOpen)

 return (
   <>
     {/* Mobile overlay */}
     {isMobile && isOpen && (
       <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
       />
     )}
     
     <aside className={`
      fixed top-full left-0 mt-2 h-auto max-h-[80vh] w-64 bg-white shadow-xl rounded-lg z-50
      lg:relative lg:top-0 lg:mt-0 lg:max-h-none lg:rounded-none lg:shadow-sm
       transition-all duration-200 ease-in-out
       ${showSidebar ? 'opacity-100 visible' : 'opacity-0 invisible lg:opacity-100 lg:visible'}
       ${isMobile ? '' : 'lg:block'}
     `}>
       <div className="p-4">
         {/* Mobile close button */}
         <div className="flex items-center justify-between mb-4 lg:hidden">
           <h2 className="font-bold text-lg text-gray-800">Categories</h2>
           <button 
            onClick={onClose}
             className="p-2 hover:bg-gray-100 rounded-lg"
           >
             <X size={20} />
           </button>
         </div>

         <nav className="space-y-1">
           {categories.map((category) => {
            const Icon = category.icon
            const isActive = pathname === category.href
             
            return (
               <Link
                 key={category.id}
                 href={category.href}
                 onClick={() => {
                   if (isMobile) onClose()
                 }}
                 className={`
                   flex items-center justify-between px-3 py-2.5 rounded-lg transition-all
                   ${isActive 
                     ? 'bg-blue-50 text-blue-600' 
                     : 'text-gray-700 hover:bg-gray-50'
                   }
                 `}
               >
                 <div className="flex items-center gap-3">
                   <Icon size={18} className={isActive ? 'text-blue-600' : 'text-gray-500'} />
                   <span className="font-medium">{category.name}</span>
                 </div>
                 <ChevronRight size={16} className={isActive ? 'text-blue-600' : 'text-gray-400'} />
               </Link>
             )
           })}
         </nav>
       </div>
     </aside>
   </>
 )
}
