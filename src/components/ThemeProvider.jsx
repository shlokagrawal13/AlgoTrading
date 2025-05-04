"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeProviderContext = createContext({})

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
}) {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem(storageKey) || defaultTheme
    } catch {
      return defaultTheme
    }
  })

  useEffect(() => {
    const root = window.document.documentElement
    
    // Remove both classes first
    root.classList.remove("light", "dark")

    // Determine system preference
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"

    // Apply the appropriate theme
    if (theme === "system") {
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }

    // Store the theme preference
    try {
      localStorage.setItem(storageKey, theme)
    } catch (e) {
      console.error("Failed to save theme preference:", e)
    }
  }, [theme, storageKey])

  // Watch for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    
    const handleChange = () => {
      if (theme === "system") {
        const root = window.document.documentElement
        root.classList.remove("light", "dark")
        root.classList.add(mediaQuery.matches ? "dark" : "light")
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])

  // Add script to prevent FOUC (Flash of Unstyled Content)
  useEffect(() => {
    const script = document.createElement("script")
    script.innerHTML = `
      (function() {
        try {
          const theme = localStorage.getItem("${storageKey}") || "${defaultTheme}"
          const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
          document.documentElement.classList.add(theme === "system" ? systemTheme : theme)
        } catch (e) {}
      })()
    `
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const value = {
    theme,
    setTheme: (newTheme) => {
      setTheme(newTheme)
    },
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
