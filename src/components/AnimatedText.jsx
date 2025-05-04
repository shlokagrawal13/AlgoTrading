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
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      style={{ display: "flex", justifyContent:'center', flexWrap: "wrap " }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ marginRight: "0.25em", display: "inline-block" }}
          className="transform-gpu"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimatedText
