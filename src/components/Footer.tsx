import { Play, ArrowUpRight } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-cinema-gray">
      <div className="section-padding pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cinema-accent/20 flex items-center justify-center">
                <Play size={16} className="text-cinema-accent ml-0.5" fill="currentColor" />
              </div>
              <div>
                <div className="font-display text-2xl tracking-wider">{personalInfo.name.toUpperCase()}</div>
                <div className="text-sm text-cinema-muted">{personalInfo.title}</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {Object.entries(personalInfo.socials).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm uppercase tracking-wider text-cinema-muted hover:text-cinema-accent transition-colors"
                  data-cursor="pointer"
                >
                  {platform}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="accent-line w-full mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cinema-muted">
            <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
            <p className="font-mono text-xs tracking-wider">
              CRAFTED WITH REACT + FRAMER MOTION
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
