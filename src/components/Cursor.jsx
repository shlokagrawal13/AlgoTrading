"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useSpring } from "framer-motion"
import { useMediaQuery } from "../hooks/useMediaQuery"

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Use spring animation for smooth cursor movement
  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(mousePosition.x, springConfig)
  const y = useSpring(mousePosition.y, springConfig)

  // Optimize mousemove handler with useCallback
  const handleMouseMove = useCallback((event) => {
    const { clientX, clientY } = event
    setMousePosition({ x: clientX, y: clientY })
    if (!isVisible) setIsVisible(true)
  }, [isVisible])

  // Optimize pointer detection with useCallback
  const handleElementCheck = useCallback((event) => {
    const target = event.target
    const isClickable =
      target.matches("button") ||
      target.matches("a") ||
      target.matches("input") ||
      target.matches("textarea") ||
      target.closest("button") ||
      target.closest("a") ||
      target.closest("input") ||
      target.closest("textarea")

    setIsPointer(isClickable)
  }, [])

  useEffect(() => {
    if (isMobile) return

    // Add passive event listeners for better performance
    document.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.addEventListener("mouseover", handleElementCheck, { passive: true })
    
    // Handle cursor visibility
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)
    
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    document.documentElement.classList.add("cursor-none")

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleElementCheck)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.documentElement.classList.remove("cursor-none")
    }
  }, [handleMouseMove, handleElementCheck, isMobile])

  if (isMobile || !isVisible) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-[999] transform-gpu"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale: isPointer ? 1.5 : 1,
            opacity: isPointer ? 0.5 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute w-2 h-2 bg-primary rounded-full animate-pulse-ring" />
          <div className="w-4 h-4 border-2 border-primary rounded-full" />
        </motion.div>
      </motion.div>

      {/* Trailer effect */}
      <motion.div
        className="fixed pointer-events-none z-[998] w-8 h-8 rounded-full bg-primary/10 transform-gpu"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 150,
          restDelta: 0.001
        }}
      />
    </>
  )
}

export default Cursor
