"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useMediaQuery } from "../hooks/useMediaQuery"

const ParallaxBackground = ({ 
  children, 
  bgImage, 
  overlayColor = "rgba(0, 0, 0, 0.5)",
  parallaxStrength = 0.15 // Reduced from 0.2 for smoother effect
}) => {
  const [isMounted, setIsMounted] = useState(false)
  const isReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const isMobile = useMediaQuery('(max-width: 768px)')
  
  const { scrollY } = useScroll({
    enabled: !isMobile && !isReducedMotion, // Disable parallax on mobile and when reduced motion is preferred
    layoutEffect: false
  })
  
  const y = useTransform(
    scrollY,
    [0, 1000],
    [0, 200 * (isReducedMotion ? 0 : parallaxStrength)],
    {
      clamp: false // Allow smoother interpolation
    }
  )

  const [imageLoaded, setImageLoaded] = useState(false)
  
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
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
          WebkitBackfaceVisibility: 'hidden',
          WebkitTransform: 'translateZ(0)'
        }}
      />
      
      {/* Low-quality image placeholder with blur */}
      {!imageLoaded && (
        <div
          className="absolute inset-0 w-full h-full blur-lg transform-gpu"
          style={{
            backgroundImage: `url(${bgImage}?w=20)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            willChange: 'transform'
          }}
        />
      )}

      {/* Optimized overlay with reduced opacity transitions */}
      <div
        className="absolute inset-0 w-full h-full transition-opacity duration-300"
        style={{ 
          backgroundColor: overlayColor,
          willChange: 'opacity'
        }}
      />

      {/* Content with improved stacking context */}
      <div className="relative z-10 transform-gpu">
        {children}
      </div>
    </div>
  )
}

export default ParallaxBackground
