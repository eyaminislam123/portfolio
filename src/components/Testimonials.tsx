import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'
import { Quote } from 'lucide-react'
import { testimonials } from '../data/portfolio'
import { useTheme } from './ThemeContext'

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="glass-card p-8 mx-4 w-[400px] shrink-0">
      <Quote size={24} className="text-cinema-accent mb-4" />
      <p className="text-cinema-light leading-relaxed mb-6 italic">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center gap-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="font-medium">{testimonial.name}</div>
          <div className="text-sm text-cinema-muted">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { theme } = useTheme()
  const gradientColor = theme === 'dark' ? '#0c0c0f' : '#ffffff'

  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="section-subtitle mb-4 block">Testimonials</span>
          <h2 className="section-title">
            Client <span className="text-cinema-accent">Reviews</span>
          </h2>
          <div className="accent-line w-32 mt-6 mx-auto" />
        </motion.div>
      </div>

      <Marquee speed={30} gradient gradientColor={gradientColor} pauseOnHover>
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </Marquee>

      <div className="mt-4">
        <Marquee speed={25} direction="right" gradient gradientColor={gradientColor} pauseOnHover>
          {[...testimonials].reverse().map((t) => (
            <TestimonialCard key={`rev-${t.id}`} testimonial={t} />
          ))}
        </Marquee>
      </div>
    </section>
  )
}
