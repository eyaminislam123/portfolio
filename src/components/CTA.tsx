import { motion } from 'framer-motion'
import { MessageCircle, Mail, Calendar } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const channels = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: personalInfo.phone,
    href: `https://wa.me/${personalInfo.phone.replace(/[\s+-]/g, '')}`,
    color: 'hover:border-green-500 hover:text-green-500',
  },
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: 'hover:border-cinema-accent hover:text-cinema-accent',
  },
  {
    icon: Calendar,
    label: 'Book a Call',
    value: '30 min free consultation',
    href: '#contact',
    color: 'hover:border-cinema-gold hover:text-cinema-gold',
  },
]

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cinema-black via-cinema-black/90 to-cinema-black" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider uppercase leading-[0.9] mb-6">
            Ready to Bring Your
            <span className="block text-cinema-accent">Vision to Life?</span>
          </h2>
          <p className="text-cinema-light text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Let's collaborate on your next project. Whether it's a brand film, music video, or documentary — I'm here to make it cinematic.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {channels.map((ch, i) => (
              <motion.a
                key={ch.label}
                href={ch.href}
                target={ch.href.startsWith('http') ? '_blank' : undefined}
                rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card p-6 border border-cinema-gray transition-all ${ch.color}`}
                data-cursor="pointer"
              >
                <ch.icon size={24} className="mx-auto mb-3" />
                <div className="text-sm uppercase tracking-wider font-medium mb-1">{ch.label}</div>
                <div className="text-xs text-cinema-muted">{ch.value}</div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
