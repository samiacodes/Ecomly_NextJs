'use client'

import { useLanguage } from "@/app/context/LanguageContext"

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  const handleChangeLanguage = (lang: 'en' | 'bn') => {
    setLanguage(lang)
  }

  return (
    <div className="border border-gray-200 rounded-sm p-0.5 flex w-24 relative">
      {/* Vertical Divider */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-4 bg-gray-200"></div>
      
      <button 
        onClick={() => handleChangeLanguage('en')} 
        className={`flex-1 py-1 text-xs font-bold transition-all ${
          language === 'en' 
            ? 'text-green-600' 
            : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        EN
      </button>
      <button 
        onClick={() => handleChangeLanguage('bn')} 
        className={`flex-1 py-1 text-xs font-bold transition-all ${
          language === 'bn' 
            ? 'text-green-600' 
            : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        BN
      </button>
    </div>
  )
}