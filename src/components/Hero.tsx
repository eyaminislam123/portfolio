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

      <motion.div style={{ opacity }} className="relative z-10 section-padding max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex items-center gap-3 mb-6"
            >
              <Film size={16} className="text-cinema-accent" />
              <span className="section-subtitle">{personalInfo.title}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6, ease: [0.76, 0, 0.24, 1] }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider leading-[0.95] mb-6 text-primary text-center lg:text-left"
            >
              <span className="block">{personalInfo.name.split(' ')[0].toUpperCase()}</span>
              <span className="block gradient-text">{personalInfo.name.split(' ')[1]?.toUpperCase()}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="text-lg text-cinema-light max-w-2xl lg:max-w-none mb-10 font-light text-center lg:text-left"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#work"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-cinema-accent text-white rounded-full hover:opacity-90 transition-all hover:scale-105 w-full sm:w-auto"
                data-cursor="pointer"
              >
                <Play size={18} fill="currentColor" />
                <span className="uppercase tracking-wider text-sm font-medium">View Showreel</span>
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-3 px-8 py-4 border border-cinema-gray rounded-full hover:border-cinema-accent hover:text-cinema-accent transition-all text-primary w-full sm:w-auto"
                data-cursor="pointer"
              >
                <span className="uppercase tracking-wider text-sm font-medium">Get In Touch</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 w-full"
            >
              {personalInfo.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5 + i * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="font-display text-3xl text-cinema-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-cinema-muted uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center relative mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="relative w-full max-w-[380px] aspect-[4/5]"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-cinema-accent/30 to-cinema-gold/10 rounded-2xl blur-2xl opacity-50 -z-10 animate-pulse" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-cinema-gray bg-cinema-dark p-3">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cinema-dark/85 via-cinema-dark/20 to-transparent" />
                </div>
                
                <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-cinema-accent/65 rounded-tl-sm pointer-events-none" />
                <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-cinema-accent/65 rounded-tr-sm pointer-events-none" />
                <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-cinema-accent/65 rounded-bl-sm pointer-events-none" />
                <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-cinema-accent/65 rounded-br-sm pointer-events-none" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-20 h-20 border border-cinema-accent/20 rounded-2xl -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-tr from-cinema-accent/10 to-cinema-gold/10 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
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
