'use client'

import * as React from 'react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

// Banner images - You can change these URLs to your own images
const bannerImages = [
  {
    id: 1,
    url: '/images/banner1.jpg',
    alt: 'Banner 1',
    title: 'Welcome to Ecomly',
    subtitle: 'Your one-stop shop for everything',
  },
  {
    id: 2,
    url: '/images/banner2.jpg',
    alt: 'Banner 2',
    title: 'Best Quality Products',
    subtitle: 'Shop from trusted brands',
  },
  {
    id: 3,
    url: '/images/banner3.jpg',
    alt: 'Banner 3',
    title: 'Free Shipping',
    subtitle: 'On orders over ৳5000',
  },
]

export default function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  const handleMouseEnter = () => {
    if (plugin.current) {
      plugin.current.stop()
    }
  }

  const handleMouseLeave = () => {
    if (plugin.current) {
      plugin.current.play()
    }
  }

  return (
    <section className="w-full py-8 bg-gray-50">
      <div className="container-custom">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <CarouselContent>
            {bannerImages.map((banner) => (
              <CarouselItem key={banner.id}>
                <Card className="overflow-hidden rounded-2xl border-0 shadow-lg">
                  <CardContent className="relative aspect-[21/9] p-0">
                    {/* Banner Image */}
                    <Image
                      src={banner.url}
                      alt={banner.alt}
                      fill
                      className="object-cover"
                      priority
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = '/unnamed.jpg' // Fallback image
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                    
                    {/* Banner Text */}
                    <div className="absolute inset-0 flex items-center">
                      <div className="px-8 md:px-16 max-w-2xl">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                          {banner.title}
                        </h2>
                        <p className="text-lg md:text-xl lg:text-2xl text-white/90 drop-shadow-md">
                          {banner.subtitle}
                        </p>
                        <button className="mt-6 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Arrows */}
          <CarouselPrevious className="left-4 md:left-8 bg-white/80 hover:bg-white border-0 shadow-lg" />
          <CarouselNext className="right-4 md:right-8 bg-white/80 hover:bg-white border-0 shadow-lg" />
        </Carousel>
      </div>
    </section>
  )
}
