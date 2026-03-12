'use client'

import { useState } from 'react'
import { Search, Camera } from 'lucide-react'
import { useLanguage } from '@/app/context/LanguageContext'
import ImageUploadModal from '@/app/components/search/ImageUploadModal'

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isImageSearchOpen, setIsImageSearchOpen] = useState(false)
  const { t } = useLanguage()

  const handleImageSearch = () => {
    setIsImageSearchOpen(true)
  }

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={t('search.placeholder')}
        className="w-full border-2 border-primary-200 rounded-lg py-2.5 pl-4 pr-20 focus:border-primary outline-none transition-colors"
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
        <button 
          onClick={handleImageSearch}
          className="p-1.5 hover:bg-yellow-50 rounded-lg transition"
          title={t('search.image')}
        >
          <Camera size={20} className="text-gray-700 hover:text-yellow-600 transition" />
        </button>
        <button className="p-1.5 bg-primary text-white rounded-lg hover:bg-green-600 transition">
          <Search size={20} />
        </button>
      </div>
      
      <ImageUploadModal
        isOpen={isImageSearchOpen}
        onClose={() => setIsImageSearchOpen(false)}
      />
    </div>
  )
}