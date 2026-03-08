import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  showText?: boolean
  className?: string
  imageClassName?: string
  textClassName?: string
}

export default function Logo({ 
  showText = false, // Changed default to false - only show image
  className = '',
  imageClassName = '',
  textClassName = ''
}: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className={`relative h-[50px] w-[180px] overflow-hidden ${imageClassName}`}>
        <Image
          src="/logo.png"
          alt="Ecomly"
          fill
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <span className={`text-xl font-bold text-primary-600 ${textClassName}`}>
          Ecomly
        </span>
      )}
    </Link>
  )
}