"use client"

import { useState, useEffect, lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Preloader from "./components/Preloader"
import { ThemeProvider } from "./components/ThemeProvider"

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/HomePage"))
const AboutPage = lazy(() => import("./pages/AboutPage"))
const ServicesPage = lazy(() => import("./pages/ServicesPage"))
const PricingPage = lazy(() => import("./pages/PricingPage"))
const ContactPage = lazy(() => import("./pages/ContactPage"))

// Loading component for lazy-loaded routes
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
)

// AnimatePresence wrapper for page transitions
const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Preload critical resources
    const preloadResources = async () => {
      try {
        // Add a minimum delay to prevent flash of loading state
        await new Promise(resolve => setTimeout(resolve, 1000))
        setLoading(false)
      } catch (error) {
        console.error("Failed to load resources:", error)
        setLoading(false)
      }
    }

    preloadResources()
  }, [])

  return (
    <ThemeProvider defaultTheme="dark">
      <Router>
        {loading ? (
          <Preloader />
        ) : (
          <>
            <Navigation />
            <main className="min-h-screen pt-16 md:pt-20">
              <AnimatedRoutes />
            </main>
            <Footer />
          </>
        )}
      </Router>
    </ThemeProvider>
  )
}

export default App
