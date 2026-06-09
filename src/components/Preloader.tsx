import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-cinema-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="font-display text-6xl md:text-8xl tracking-wider text-primary mb-8">
              ARIF
            </div>
            <div className="w-64 md:w-80 h-[2px] bg-cinema-gray rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cinema-accent to-cinema-gold"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <motion.p
              className="mt-4 font-mono text-sm text-cinema-muted tracking-widest"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              LOADING REEL {Math.min(Math.round(progress), 100)}%
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
