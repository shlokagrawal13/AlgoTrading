"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"

const AnimatedText = ({ text, className = "" }) => {
  // Memoize the split text to prevent unnecessary recalculations
  const words = useMemo(() => text.split(" "), [text])

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.08, // Reduced from 0.12
        delayChildren: 0.02 * i // Reduced from 0.04
      },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15, // Increased from 12 for smoother motion
        stiffness: 150, // Increased from 100 for more responsiveness
        duration: 0.3 // Added duration constraint
      },
    },
    hidden: {
      opacity: 0,
      y: 15, // Reduced from 20 for subtler animation
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150,
      },
    },
  }

  return (
    <motion.div
      style={{ 
        display: "flex", 
        flexWrap: "wrap",
        justifyContent: 'center',
        alignItems: 'center',
        willChange: 'transform', // Optimize for animations
      }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`${className} transform-gpu`} // Added transform-gpu for hardware acceleration
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ 
            marginRight: "0.25em", 
            display: "inline-block",
            willChange: 'transform',
            backfaceVisibility: 'hidden' // Prevent flickering
          }}
          className="transform-gpu"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimatedText
