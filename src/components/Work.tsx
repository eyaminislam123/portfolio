import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, ExternalLink, Clock } from 'lucide-react'
import { projects, type Project } from '../data/portfolio'

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]

function ProjectCard({ project, index, onSelect }: { project: Project; index: number; onSelect: (p: Project) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
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
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-cinema-black/95 backdrop-blur-xl" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="relative w-full max-w-4xl glass-card overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Section */}
        <div className="p-6 md:p-8 pb-5 flex items-start justify-between gap-6 border-b border-cinema-gray bg-cinema-dark/20">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="text-xs uppercase tracking-wider text-cinema-accent font-mono px-2.5 py-0.5 bg-cinema-accent/10 rounded-full">
                {project.category}
              </span>
              <span className="text-sm text-cinema-muted font-medium">{project.client} — {project.year}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl tracking-wider uppercase text-primary leading-tight">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-cinema-dark border border-cinema-gray flex items-center justify-center hover:bg-cinema-accent hover:text-white hover:border-cinema-accent transition-all duration-300 shrink-0"
            data-cursor="pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Player Section - Moved below header */}
        <div className="p-6 md:p-8 pb-4">
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden border border-cinema-gray shadow-inner">
            {isPlaying ? (
              <iframe
                src={`${project.videoUrl || 'https://www.youtube.com/embed/LXb3EKWsInQ'}?autoplay=1&rel=0`}
                title={project.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 transition-colors duration-300 hover:bg-black/65">
                  {/* Glowing Play Button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="group relative w-20 h-20 rounded-full bg-cinema-accent flex items-center justify-center cursor-pointer shadow-lg shadow-cinema-accent/30 hover:scale-110 active:scale-95 transition-all duration-300"
                    data-cursor="pointer"
                  >
                    <div className="absolute -inset-3 bg-cinema-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                    <Play size={28} fill="white" className="text-white ml-1.5 transition-transform duration-300 group-hover:scale-110" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content Section - Grid Layout */}
        <div className="p-6 md:p-8 pt-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Left: Main details */}
            <div className="md:col-span-2 space-y-6">
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-widest text-cinema-accent font-semibold font-mono">Project Overview</h4>
                <p className="text-cinema-light leading-relaxed text-base">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-widest text-cinema-muted font-semibold font-mono">Skills & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 border border-cinema-gray bg-cinema-dark/25 rounded-full text-cinema-muted font-medium hover:border-cinema-accent/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Meta specifications column */}
            <div className="md:col-span-1">
              <div className="bg-cinema-dark/60 border border-cinema-gray rounded-2xl p-5 space-y-4 shadow-sm backdrop-blur-sm">
                <div>
                  <span className="text-[10px] text-cinema-muted uppercase tracking-widest block mb-1 font-mono font-bold">Client</span>
                  <span className="text-sm font-semibold text-primary">{project.client}</span>
                </div>
                <div className="h-px bg-cinema-gray" />
                <div>
                  <span className="text-[10px] text-cinema-muted uppercase tracking-widest block mb-1 font-mono font-bold">Release Year</span>
                  <span className="text-sm font-semibold text-primary">{project.year}</span>
                </div>
                <div className="h-px bg-cinema-gray" />
                <div>
                  <span className="text-[10px] text-cinema-muted uppercase tracking-widest block mb-1 font-mono font-bold">Duration</span>
                  <span className="text-sm font-semibold text-primary flex items-center gap-1.5">
                    <Clock size={14} className="text-cinema-accent" />
                    {project.duration}
                  </span>
                </div>
                <div className="h-px bg-cinema-gray" />
                <div>
                  <span className="text-[10px] text-cinema-muted uppercase tracking-widest block mb-1 font-mono font-bold">Role</span>
                  <span className="text-xs uppercase tracking-wider text-cinema-accent font-semibold font-mono inline-block px-2.5 py-0.5 bg-cinema-accent/10 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* View Full Project Link */}
              <div className="mt-5">
                <a
                  href={project.videoUrl || "https://youtube.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-cinema-accent hover:opacity-95 text-white text-xs uppercase tracking-wider font-semibold rounded-xl transition-all shadow-md shadow-cinema-accent/20 hover:scale-[1.02] active:scale-[0.98]"
                  data-cursor="pointer"
                >
                  <ExternalLink size={14} />
                  <span>View Full Project</span>
                </a>
              </div>
            </div>

          </div>
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
              className={`px-5 py-2 rounded-full text-sm uppercase tracking-wider transition-all ${activeCategory === cat
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
