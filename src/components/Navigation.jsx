"use client"

import { useState, useEffect, useMemo } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ModeToggle } from "./ModeToggle"
import { useMediaQuery } from "../hooks/useMediaQuery"
import { useTheme } from "./ThemeProvider"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const location = useLocation()
  const { theme } = useTheme()

  // Memoize navLinks to prevent unnecessary re-renders
  const navLinks = useMemo(() => [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Payment", href: "/payment" },
    { name: "Contact", href: "/contact" },
  ], [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { type: "tween", duration: 0.3 },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "tween", duration: 0.3 },
    },
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-lg" 
          : theme === "light" 
            ? "bg-background/50" 
            : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">AlgoTrading</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <motion.div
              variants={navVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:flex items-center space-x-8"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link
                    to={link.href}
                    className={`text-sm font-medium transition-colors relative group ${
                      location.pathname === link.href 
                        ? "text-primary" 
                        : theme === "light" 
                          ? "text-gray-800 hover:text-primary" 
                          : "text-gray-200 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <ModeToggle />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link to="/pricing">
                  <button className="px-4 py-2 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          )}

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <ModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg md:hidden"
            >
              <div className="flex flex-col h-screen pt-20 pb-6 px-4">
                <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={link.href}
                        className={`text-2xl font-medium ${
                          location.pathname === link.href 
                            ? "text-primary" 
                            : "text-foreground hover:text-primary"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/pricing"
                      onClick={() => setIsMenuOpen(false)}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </div>
                {/* Close button for mobile menu */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navigation
