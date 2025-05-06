"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const AnimatedCard = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px" // Adjusted for earlier triggering
  })

  const variants = {
    hidden: { 
      opacity: 0,
      y: 15, // Reduced from 20 for subtler animation
      scale: 0.98 // Reduced from 0.95 for subtler scale effect
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150, // Increased for snappier response
        damping: 20, // Increased for smoother motion
        duration: 0.4, // Added duration constraint
        delay: delay * 0.1 // Reduced delay multiplier for faster sequence
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={`
        rounded-xl bg-card p-6 border border-border/50
        hover:border-primary/50 transition-colors duration-300
        transform-gpu will-change-transform
        ${className}
      `}
      style={{
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden'
      }}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Optimized gradient effect */}
      <div 
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        style={{ willChange: 'opacity' }}
      />
      
      {/* Optimized glass effect */}
      <div 
        className="absolute inset-0 rounded-xl backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ willChange: 'opacity' }}
      />
    </motion.div>
  )
}

export default AnimatedCard
