"use client"

import { motion } from "framer-motion"

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          <div className="text-4xl font-bold gradient-text animate-gpu">
          FixonWealth
          </div>
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              delay: 0.2
            }}
            className="h-1 bg-gradient-to-r from-primary to-purple-600 mt-4 rounded-full"
          />
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-8 bg-primary/20 rounded-full blur-xl animate-pulse-ring"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-center text-muted-foreground"
        >
          Loading amazing things...
        </motion.p>
      </div>
    </div>
  )
}

export default Preloader
