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
              <span className="text-2xl font-bold gradient-text">FixonWealth</span>
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

          {/* Mobile Menu Button - Updated design */}
          <div className="flex md:hidden items-center gap-4">
            <ModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center group"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col items-center justify-center w-6 h-6">
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block h-0.5 w-6 bg-current my-1 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
              <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Mobile Menu - Updated design */}
        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50"
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Menu Content */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="absolute right-0 top-0 h-full w-full max-w-sm bg-background shadow-xl"
              >
                <div className="relative h-full p-6 flex flex-col">
                  {/* Close button */}
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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

                  {/* Logo */}
                  <div className="mt-8 mb-8">
                    <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                      <span className="text-2xl font-bold gradient-text">AlgoTrading</span>
                    </Link>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex-1">
                    <motion.ul
                      className="space-y-4"
                      initial="closed"
                      animate="open"
                      variants={{
                        open: {
                          transition: { staggerChildren: 0.05, delayChildren: 0.2 }
                        },
                        closed: {
                          transition: { staggerChildren: 0.05, staggerDirection: -1 }
                        }
                      }}
                    >
                      {navLinks.map((link) => (
                        <motion.li
                          key={link.name}
                          variants={{
                            open: {
                              y: 0,
                              opacity: 1,
                              transition: {
                                y: { stiffness: 1000, velocity: -100 }
                              }
                            },
                            closed: {
                              y: 20,
                              opacity: 0,
                              transition: {
                                y: { stiffness: 1000 }
                              }
                            }
                          }}
                          className="border-b border-border/10 last:border-none"
                        >
                          <Link
                            to={link.href}
                            className={`flex items-center py-4 px-2 text-lg font-medium transition-colors relative group ${
                              location.pathname === link.href
                                ? "text-primary"
                                : "text-foreground hover:text-primary"
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {link.name}
                            <motion.span
                              className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                              initial={false}
                              animate={{ x: location.pathname === link.href ? 0 : 10 }}
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </motion.span>
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </nav>

                  {/* Action Button */}
                  <div className="mt-8 pt-8 border-t border-border/10">
                    <Link
                      to="/pricing"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center w-full px-6 py-3 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                    >
                      Get Started
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navigation
