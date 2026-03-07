import { 
  Gem, 
  Footprints, 
  Sparkles, 
  Shirt, 
  Glasses,
  Baby,
  Watch,
  Smartphone,
  Laptop,
  Sofa,
  Car,
  Book,
  Gamepad2,
  Camera
} from 'lucide-react'

const iconMap: Record<string, any> = {
  Gem,
  Footprints,
  Sparkles,
  Shirt,
  Glasses,
  Baby,
  Watch,
  Smartphone,
  Laptop,
  Sofa,
  Car,
  Book,
  Gamepad2,
  Camera
}

interface CategoryIconProps {
  name: string
  className?: string
  size?: number
}

export default function CategoryIcon({ name, className = '', size = 24 }: CategoryIconProps) {
  const Icon = iconMap[name] || Smartphone
  return <Icon className={className} size={size} />
}