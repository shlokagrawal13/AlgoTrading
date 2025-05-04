"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const AnimatedCard = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-10% 0px"
  })

  const variants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: delay,
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
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Gradient highlight effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glass effect */}
      <div className="absolute inset-0 rounded-xl backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  )
}

export default AnimatedCard
