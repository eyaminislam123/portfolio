import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
}

interface RevealProps {
  children: ReactNode
  className?: string
}

export function Reveal({ children, className = '' }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className = '' }: RevealProps) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}

export function AnimatedCounter({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="text-center"
    >
      <div className="font-display text-4xl md:text-5xl text-cinema-accent">{value}</div>
      <div className="text-xs text-cinema-muted uppercase tracking-wider mt-1">{label}</div>
    </motion.div>
  )
}
