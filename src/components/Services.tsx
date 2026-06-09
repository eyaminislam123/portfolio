import type { ElementType } from 'react'
import { motion } from 'framer-motion'
import {
  Film,
  Palette,
  Sparkles,
  Volume2,
  Clapperboard,
  MonitorPlay,
} from 'lucide-react'
import { services } from '../data/portfolio'

const iconMap: Record<string, ElementType> = {
  Film,
  Palette,
  Sparkles,
  Volume2,
  Clapperboard,
  MonitorPlay,
}

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-subtitle mb-4 block">What I Do</span>
          <h2 className="section-title">
            My <span className="text-cinema-accent">Services</span>
          </h2>
          <div className="accent-line w-32 mt-6 mx-auto" />
          <p className="text-cinema-muted max-w-2xl mx-auto mt-6 text-lg">
            From raw footage to polished masterpiece — comprehensive post-production services tailored to your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Film
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group glass-card p-8 hover-lift hover:border-cinema-accent/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-cinema-accent/10 flex items-center justify-center mb-6 group-hover:bg-cinema-accent/20 transition-colors">
                  <Icon size={28} className="text-cinema-accent" />
                </div>

                <h3 className="font-display text-2xl tracking-wider uppercase mb-3">
                  {service.title}
                </h3>
                <p className="text-cinema-muted leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-cinema-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-cinema-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
