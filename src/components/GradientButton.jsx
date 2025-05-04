"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const GradientButton = ({
  children,
  className = "",
  to,
  onClick,
  primary = false,
  disabled = false,
  type = "button",
}) => {
  const baseStyles = `
    relative inline-flex items-center justify-center
    px-6 py-3 text-sm font-medium
    rounded-full transition-all duration-300
    transform-gpu hover:scale-105
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${className}
  `

  const primaryStyles = `
    bg-gradient-to-r from-primary to-purple-600
    text-white
    hover:shadow-lg hover:shadow-primary/20
  `

  const secondaryStyles = `
    bg-secondary
    text-secondary-foreground
    hover:bg-secondary/90
    border border-border/50
  `

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </>
  )

  const buttonProps = {
    className: `group ${baseStyles} ${primary ? primaryStyles : secondaryStyles}`,
    disabled,
    type,
    onClick,
  }

  if (to) {
    return (
      <Link to={to}>
        <motion.button
          {...buttonProps}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonContent}
        </motion.button>
      </Link>
    )
  }

  return (
    <motion.button
      {...buttonProps}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {buttonContent}
    </motion.button>
  )
}

export default GradientButton
