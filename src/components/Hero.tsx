import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Play, ArrowDown, Film } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1574267432644-f6102b50d0ea?w=1920&q=80')`,
            y: bgY,
          }}
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, var(--overlay-from), var(--overlay-via), var(--overlay-to))` }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to right, var(--overlay-from), transparent, var(--overlay-from))` }} />
      </div>

      <div className="absolute inset-0 opacity-[0.03]">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-full bg-cinema-muted"
            style={{ left: `${(i + 1) * 5}%` }}
          />
        ))}
      </div>

      <motion.div style={{ opacity }} className="relative z-10 section-padding text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <Film size={16} className="text-cinema-accent" />
          <span className="section-subtitle">{personalInfo.title}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6, ease: [0.76, 0, 0.24, 1] }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider leading-[0.9] mb-6 text-primary"
        >
          <span className="block">{personalInfo.name.split(' ')[0].toUpperCase()}</span>
          <span className="block gradient-text">{personalInfo.name.split(' ')[1]?.toUpperCase()}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-lg md:text-xl text-cinema-light max-w-2xl mx-auto mb-10 font-light"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="group flex items-center gap-3 px-8 py-4 bg-cinema-accent text-white rounded-full hover:opacity-90 transition-all hover:scale-105"
            data-cursor="pointer"
          >
            <Play size={18} fill="currentColor" />
            <span className="uppercase tracking-wider text-sm font-medium">View Showreel</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-3 px-8 py-4 border border-cinema-gray rounded-full hover:border-cinema-accent hover:text-cinema-accent transition-all text-primary"
            data-cursor="pointer"
          >
            <span className="uppercase tracking-wider text-sm font-medium">Get In Touch</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {personalInfo.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 + i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-3xl md:text-4xl text-cinema-accent mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-cinema-muted uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-cinema-muted"
        >
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      <div className="absolute top-1/2 left-8 -translate-y-1/2 hidden xl:block">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.5 }}
          className="flex flex-col gap-4"
        >
          {Object.entries(personalInfo.socials).slice(0, 4).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.2em] text-cinema-muted hover:text-cinema-accent transition-colors [writing-mode:vertical-lr]"
              data-cursor="pointer"
            >
              {platform}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
