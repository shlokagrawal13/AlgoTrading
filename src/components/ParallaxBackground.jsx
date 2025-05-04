"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useMediaQuery } from "../hooks/useMediaQuery"

const ParallaxBackground = ({ 
  children, 
  bgImage, 
  overlayColor = "rgba(0, 0, 0, 0.5)",
  parallaxStrength = 0.2 
}) => {
  const [isMounted, setIsMounted] = useState(false)
  const isReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const isMobile = useMediaQuery('(max-width: 768px)')
  
  const { scrollY } = useScroll({
    layoutEffect: false // This fixes the hydration warning
  })
  
  const y = useTransform(
    scrollY,
    [0, 1000],
    [0, 300 * (isReducedMotion ? 0 : parallaxStrength)]
  )

  // Optimize image loading
  const [imageLoaded, setImageLoaded] = useState(false)
  
  // Memoize the preload function
  const preloadImage = useCallback(() => {
    const img = new Image()
    img.src = bgImage
    img.onload = () => setImageLoaded(true)
  }, [bgImage])

  useEffect(() => {
    setIsMounted(true)
    preloadImage()
  }, [preloadImage])

  if (!isMounted) return null

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          y: isMobile ? 0 : y,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: imageLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
          willChange: 'transform',
        }}
      />
      
      {/* Low-quality image placeholder */}
      {!imageLoaded && (
        <div
          className="absolute inset-0 w-full h-full blur-lg"
          style={{
            backgroundImage: `url(${bgImage}?w=20)`, // Load tiny version first
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ backgroundColor: overlayColor }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default ParallaxBackground
