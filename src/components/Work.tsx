import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, ExternalLink, Clock } from 'lucide-react'
import { projects, type Project } from '../data/portfolio'

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]

function ProjectCard({ project, index, onSelect }: { project: Project; index: number; onSelect: (p: Project) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative cursor-pointer"
      onClick={() => onSelect(project)}
      data-cursor="pointer"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-cinema-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-cinema-accent/90 flex items-center justify-center backdrop-blur-sm">
            <Play size={24} fill="white" className="text-white ml-1" />
          </div>
        </div>

        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-mono text-white">
          <Clock size={12} />
          {project.duration}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="text-xs uppercase tracking-wider text-cinema-accent font-mono mb-2 block">
            {project.category}
          </span>
          <h3 className="font-display text-2xl md:text-3xl tracking-wider uppercase">
            {project.title}
          </h3>
          <p className="text-sm text-cinema-muted mt-1">{project.client} — {project.year}</p>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-cinema-black/90 backdrop-blur-xl" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
        className="relative w-full max-w-4xl glass-card overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-cinema-accent transition-colors text-white"
          data-cursor="pointer"
        >
          <X size={20} />
        </button>

        <div className="relative aspect-video">
          <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <div className="w-20 h-20 rounded-full bg-cinema-accent/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <Play size={32} fill="white" className="text-white ml-1" />
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="text-xs uppercase tracking-wider text-cinema-accent font-mono px-3 py-1 bg-cinema-accent/10 rounded-full">
              {project.category}
            </span>
            <span className="text-sm text-cinema-muted">{project.client} — {project.year}</span>
            <span className="text-sm text-cinema-muted flex items-center gap-1">
              <Clock size={14} /> {project.duration}
            </span>
          </div>

          <h2 className="font-display text-4xl tracking-wider uppercase mb-4">{project.title}</h2>
          <p className="text-cinema-light leading-relaxed mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 border border-cinema-gray rounded-full text-cinema-muted">
                {tag}
              </span>
            ))}
          </div>

          <button className="flex items-center gap-2 text-cinema-accent hover:opacity-80 transition-opacity" data-cursor="pointer">
            <ExternalLink size={16} />
            <span className="text-sm uppercase tracking-wider">View Full Project</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="section-subtitle mb-4 block">Portfolio</span>
          <h2 className="section-title">
            Selected <span className="text-cinema-accent">Work</span>
          </h2>
          <div className="accent-line w-32 mt-6" />
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-cinema-accent text-white'
                  : 'border border-cinema-gray text-cinema-muted hover:border-cinema-accent hover:text-cinema-accent'
              }`}
              data-cursor="pointer"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
