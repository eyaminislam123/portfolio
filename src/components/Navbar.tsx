import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Play, Sun, Moon } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import { useTheme } from './ThemeContext'

const navLinks = [
  { label: 'Showreel', href: '#showreel' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? 'bg-cinema-black/80 backdrop-blur-xl border-b border-cinema-gray py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group" data-cursor="pointer">
            <div className="w-10 h-10 rounded-full bg-cinema-accent/20 flex items-center justify-center group-hover:bg-cinema-accent/40 transition-colors">
              <Play size={16} className="text-cinema-accent ml-0.5" fill="currentColor" />
            </div>
            <span className="font-display text-2xl tracking-wider hidden sm:block text-primary">
              {personalInfo.name.split(' ')[0].toUpperCase()}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-[0.2em] text-cinema-muted hover:text-cinema-accent transition-colors relative group"
                data-cursor="pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cinema-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
              data-cursor="pointer"
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'light' ? (
                  <Moon size={16} className="text-cinema-muted" />
                ) : (
                  <Sun size={16} className="text-cinema-gold" />
                )}
              </motion.div>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-cinema-accent text-white text-sm uppercase tracking-wider rounded-full hover:opacity-90 transition-all hover:scale-105"
              data-cursor="pointer"
            >
              Hire Me
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon size={16} className="text-cinema-muted" />
              ) : (
                <Sun size={16} className="text-cinema-gold" />
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 flex items-center justify-center text-primary"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99] bg-cinema-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMobileOpen(false)}
                className="font-display text-4xl tracking-wider uppercase text-primary hover:text-cinema-accent transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-8 py-3 bg-cinema-accent text-white uppercase tracking-wider rounded-full"
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
