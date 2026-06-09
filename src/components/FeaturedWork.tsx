import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Play, Clock } from 'lucide-react'
import { projects } from '../data/portfolio'

export default function FeaturedWork() {
  const featured = projects.filter((p) => p.featured)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({ container: containerRef })

  return (
    <section className="py-24 bg-cinema-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle mb-4 block">Featured</span>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider uppercase">
            Top <span className="text-cinema-accent">Picks</span>
          </h2>
        </motion.div>
      </div>

      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto px-6 md:px-12 pb-8 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none' }}
      >
        {featured.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative shrink-0 w-[85vw] md:w-[600px] snap-center group"
          >
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-transparent to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 rounded-full bg-cinema-accent/90 flex items-center justify-center">
                  <Play size={20} fill="white" className="text-white ml-0.5" />
                </div>
              </div>

              <div className="absolute top-4 left-4 px-3 py-1 bg-cinema-accent/90 rounded-full text-xs uppercase tracking-wider font-mono">
                Featured
              </div>

              <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-mono text-white">
                <Clock size={12} />
                {project.duration}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs text-cinema-accent uppercase tracking-wider font-mono">
                  {project.category}
                </span>
                <h3 className="font-display text-2xl md:text-3xl tracking-wider uppercase mt-1">
                  {project.title}
                </h3>
                <p className="text-sm text-cinema-muted mt-1">{project.client}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-4">
        <div className="h-1 bg-cinema-gray rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-cinema-accent origin-left"
            style={{ scaleX: scrollXProgress }}
          />
        </div>
      </div>
    </section>
  )
}
