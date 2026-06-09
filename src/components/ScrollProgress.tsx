import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cinema-accent via-cinema-gold to-cinema-accent origin-left z-[9990]"
      style={{ scaleX }}
    />
  )
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', toggle)
    return () => window.removeEventListener('scroll', toggle)
  }, [])

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-cinema-accent/20 backdrop-blur-sm border border-cinema-accent/30 flex items-center justify-center hover:bg-cinema-accent/40 transition-colors"
      data-cursor="pointer"
      aria-label="Scroll to top"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cinema-accent">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </motion.button>
  )
}
