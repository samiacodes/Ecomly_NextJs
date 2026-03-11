'use client'

import { Menu } from 'lucide-react'
import { useLanguage } from '@/app/context/LanguageContext'
import { useCategorySidebar } from '@/app/context/CategorySidebarContext'

export default function CategoryToggleButton() {
  const { t } = useLanguage()
  const { toggleSidebar } = useCategorySidebar()

  const handleToggleClick = () => {
    console.log('Category toggle button clicked - toggling sidebar')
    toggleSidebar()
  }

  return (
    <button
      onClick={handleToggleClick}
      className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
      aria-label="Toggle categories sidebar"
    >
      <Menu size={18} />
      <span>{t('nav.categories')}</span>
    </button>
  )
}