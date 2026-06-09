import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  Play,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Youtube,
  Instagram,
  Linkedin,
  Send,
  ExternalLink,
  Video
} from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const navLinks = [
  { label: 'Showreel', href: '#showreel' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'youtube': return <Youtube size={16} />
      case 'instagram': return <Instagram size={16} />
      case 'linkedin': return <Linkedin size={16} />
      case 'vimeo': return <Video size={16} />
      default: return <ExternalLink size={16} />
    }
  }

  return (
    <footer className="border-t border-cinema-gray bg-gradient-to-t from-cinema-dark to-cinema-black/40 relative">
      {/* Subtle Glow Overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-cinema-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-padding pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            
            {/* Column 1: Brand & Statement */}
            <div className="lg:col-span-4 flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cinema-accent/20 flex items-center justify-center">
                  <Play size={16} className="text-cinema-accent ml-0.5" fill="currentColor" />
                </div>
                <div>
                  <div className="font-display text-2xl tracking-wider text-primary">
                    {personalInfo.name.toUpperCase()}
                  </div>
                  <div className="text-xs text-cinema-accent tracking-widest uppercase font-mono">
                    {personalInfo.title}
                  </div>
                </div>
              </div>
              <p className="text-cinema-muted text-sm leading-relaxed mt-2 max-w-sm">
                Creating high-end cinematic visuals, color grading, and visual storytelling that resonates with audiences worldwide.
              </p>
              
              {/* Social Icons Badge Row */}
              <div className="flex gap-3 mt-4">
                {Object.entries(personalInfo.socials).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-cinema-gray bg-cinema-dark/50 flex items-center justify-center text-cinema-muted hover:text-cinema-accent hover:border-cinema-accent transition-all duration-300 hover:scale-110 shadow-sm"
                    title={platform}
                    data-cursor="pointer"
                  >
                    {getSocialIcon(platform)}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="lg:col-span-2 lg:pl-6 flex flex-col items-start gap-4">
              <h4 className="font-display text-lg tracking-wider text-primary uppercase">Navigation</h4>
              <div className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-cinema-muted hover:text-cinema-accent transition-colors relative group w-fit"
                    data-cursor="pointer"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-cinema-accent group-hover:w-full transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: Contact Information */}
            <div className="lg:col-span-3 flex flex-col items-start gap-4">
              <h4 className="font-display text-lg tracking-wider text-primary uppercase">Contact</h4>
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center gap-3 text-sm text-cinema-muted">
                  <MapPin size={16} className="text-cinema-accent shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-sm text-cinema-muted hover:text-cinema-accent transition-colors"
                  data-cursor="pointer"
                >
                  <Mail size={16} className="text-cinema-accent shrink-0" />
                  <span className="break-all">{personalInfo.email}</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-cinema-muted">
                  <Phone size={16} className="text-cinema-accent shrink-0" />
                  <span>{personalInfo.phone}</span>
                </div>
              </div>
            </div>

            {/* Column 4: Newsletter Subscription */}
            <div className="lg:col-span-3 flex flex-col items-start gap-4">
              <h4 className="font-display text-lg tracking-wider text-primary uppercase">Newsletter</h4>
              <p className="text-cinema-muted text-xs leading-relaxed mb-1">
                Subscribe to get the latest editing tips, case studies, and cinematic insights.
              </p>
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-xs text-cinema-accent bg-cinema-accent/10 border border-cinema-accent/30 rounded-xl p-3 w-full text-center font-medium"
                >
                  Thank you for subscribing!
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 w-full">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2.5 text-xs rounded-xl bg-cinema-dark/85 border border-cinema-gray text-primary focus:outline-none focus:border-cinema-accent transition-colors w-full"
                  />
                  <button
                    type="submit"
                    className="p-2.5 rounded-xl bg-cinema-accent text-white hover:opacity-90 transition-all flex items-center justify-center shrink-0 hover:scale-105 active:scale-95"
                    data-cursor="pointer"
                    aria-label="Subscribe"
                  >
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>

          </div>

          <div className="accent-line w-full mb-8" />

          {/* Bottom Copyright & Back to Top */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-cinema-muted">
            <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
            
            <div className="flex items-center gap-6">
              <p className="font-mono text-xs tracking-wider hidden md:block">
                CRAFTED WITH REACT + FRAMER MOTION
              </p>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full border border-cinema-gray bg-cinema-dark flex items-center justify-center text-cinema-muted hover:text-white hover:bg-cinema-accent hover:border-cinema-accent transition-all duration-300 shadow-md hover:scale-110 active:scale-90"
                title="Back to Top"
                data-cursor="pointer"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
