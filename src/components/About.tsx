import type { ElementType } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Download } from 'lucide-react'
import { personalInfo, timeline, skills } from '../data/portfolio'
import {
  Clapperboard,
  Palette,
  Sparkles,
  Scissors,
  Film,
  Volume2,
} from 'lucide-react'

const iconMap: Record<string, ElementType> = {
  Clapperboard,
  Palette,
  Sparkles,
  Scissors,
  Film,
  Volume2,
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-cinema-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle mb-4 block">About Me</span>
            <h2 className="section-title mb-8">
              The Editor <span className="text-cinema-accent">Behind</span> The Lens
            </h2>
            <div className="accent-line w-32 mb-8" />

            <p className="text-cinema-light leading-relaxed mb-6 text-lg">
              {personalInfo.bio}
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-cinema-muted">
                <MapPin size={16} className="text-cinema-accent" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-cinema-muted">
                <Mail size={16} className="text-cinema-accent" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-cinema-accent transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-cinema-muted">
                <Phone size={16} className="text-cinema-accent" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border border-cinema-accent text-cinema-accent rounded-full hover:bg-cinema-accent hover:text-white transition-all"
              data-cursor="pointer"
            >
              <Download size={16} />
              <span className="text-sm uppercase tracking-wider">Download CV</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cinema-black/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-cinema-accent rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-cinema-accent/20 rounded-2xl -z-10" />
          </motion.div>
        </div>

        <div className="mt-32">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl tracking-wider uppercase mb-12 text-center"
          >
            Software <span className="text-cinema-accent">Proficiency</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => {
              const Icon = iconMap[skill.icon] || Film
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 hover-lift"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-cinema-accent/10 flex items-center justify-center">
                      <Icon size={20} className="text-cinema-accent" />
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <div className="h-1.5 bg-cinema-gray rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                      className="h-full bg-gradient-to-r from-cinema-accent to-cinema-gold rounded-full"
                    />
                  </div>
                  <span className="text-xs text-cinema-muted mt-2 block font-mono">{skill.level}%</span>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="mt-32">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl tracking-wider uppercase mb-12 text-center"
          >
            Career <span className="text-cinema-accent">Timeline</span>
          </motion.h3>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cinema-accent via-cinema-gold to-transparent md:-translate-x-px" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                  {i % 2 === 0 && (
                    <div className="glass-card p-6 inline-block text-left">
                      <span className="text-cinema-accent font-mono text-sm">{item.year}</span>
                      <h4 className="font-display text-xl tracking-wider uppercase mt-1">{item.title}</h4>
                      <p className="text-sm text-cinema-muted mt-1">{item.company}</p>
                      <p className="text-sm text-cinema-light mt-2">{item.description}</p>
                    </div>
                  )}
                </div>

                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-cinema-accent border-4 border-cinema-dark -translate-x-1/2 mt-2 z-10" />

                <div className={`flex-1 pl-16 md:pl-0 ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                  <div className="glass-card p-6 md:hidden">
                    <span className="text-cinema-accent font-mono text-sm">{item.year}</span>
                    <h4 className="font-display text-xl tracking-wider uppercase mt-1">{item.title}</h4>
                    <p className="text-sm text-cinema-muted mt-1">{item.company}</p>
                    <p className="text-sm text-cinema-light mt-2">{item.description}</p>
                  </div>
                  {i % 2 !== 0 && (
                    <div className="glass-card p-6 hidden md:inline-block text-left">
                      <span className="text-cinema-accent font-mono text-sm">{item.year}</span>
                      <h4 className="font-display text-xl tracking-wider uppercase mt-1">{item.title}</h4>
                      <p className="text-sm text-cinema-muted mt-1">{item.company}</p>
                      <p className="text-sm text-cinema-light mt-2">{item.description}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
