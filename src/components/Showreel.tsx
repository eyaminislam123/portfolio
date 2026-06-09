import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Play, X } from 'lucide-react'
import { showreel, clients } from '../data/extras'

export default function Showreel() {
  const ref = useRef<HTMLElement>(null)
  const [playing, setPlaying] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95])

  return (
    <section ref={ref} id="showreel" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-subtitle mb-4 block">Showreel</span>
          <h2 className="section-title">
            Watch My <span className="text-cinema-accent">Reel</span>
          </h2>
          <div className="accent-line w-32 mt-6 mx-auto" />
          <p className="text-cinema-muted mt-6 max-w-xl mx-auto">{showreel.subtitle}</p>
        </motion.div>

        <motion.div style={{ scale }} className="relative">
          <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer">
            <motion.div style={{ y }} className="absolute inset-0 scale-110">
              <img
                src={showreel.thumbnail}
                alt={showreel.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="absolute inset-0 bg-cinema-black/40 group-hover:bg-cinema-black/30 transition-colors" />

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPlaying(true)}
                className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-cinema-accent flex items-center justify-center shadow-2xl shadow-cinema-accent/30"
                data-cursor="pointer"
                aria-label="Play showreel"
              >
                <Play size={36} fill="white" className="text-white ml-1" />
                <span className="absolute inset-0 rounded-full border-2 border-cinema-accent animate-ping opacity-30" />
              </motion.button>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <h3 className="font-display text-2xl md:text-3xl tracking-wider uppercase">
                  {showreel.title}
                </h3>
                <span className="text-sm text-cinema-muted font-mono">{showreel.duration}</span>
              </div>
              <div className="hidden md:flex items-center gap-2 px-4 py-2 glass-card text-sm">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                HD 4K
              </div>
            </div>

            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cinema-accent/50 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cinema-accent/50 rounded-br-2xl" />
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-cinema-black/95 backdrop-blur-xl p-4 md:p-12"
          >
            <button
              onClick={() => setPlaying(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-cinema-accent transition-colors z-10"
              data-cursor="pointer"
              aria-label="Close video"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-6xl aspect-video rounded-2xl overflow-hidden"
            >
              <iframe
                src={`${showreel.videoUrl}?autoplay=1`}
                title={showreel.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export function ClientLogos() {
  return (
    <section className="py-16 border-y border-cinema-gray">
      <p className="text-center text-xs uppercase tracking-[0.4em] text-cinema-muted mb-8">
        Trusted by leading brands
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 px-6">
        {clients.map((client, i) => (
          <motion.span
            key={client}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="font-display text-xl md:text-2xl tracking-[0.3em] text-cinema-muted/40 hover:text-cinema-accent transition-colors"
          >
            {client}
          </motion.span>
        ))}
      </div>
    </section>
  )
}
