import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', project: '', budget: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding bg-cinema-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle mb-4 block">Contact</span>
            <h2 className="section-title mb-8">
              Let's Create <span className="text-cinema-accent">Together</span>
            </h2>
            <div className="accent-line w-32 mb-8" />

            <p className="text-cinema-light text-lg leading-relaxed mb-10">
              Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your vision to life.
            </p>

            <div className="space-y-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 group"
                data-cursor="pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-cinema-accent/10 flex items-center justify-center group-hover:bg-cinema-accent/20 transition-colors">
                  <Mail size={20} className="text-cinema-accent" />
                </div>
                <div>
                  <div className="text-sm text-cinema-muted">Email</div>
                  <div className="group-hover:text-cinema-accent transition-colors">{personalInfo.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cinema-accent/10 flex items-center justify-center">
                  <Phone size={20} className="text-cinema-accent" />
                </div>
                <div>
                  <div className="text-sm text-cinema-muted">Phone</div>
                  <div>{personalInfo.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cinema-accent/10 flex items-center justify-center">
                  <MapPin size={20} className="text-cinema-accent" />
                </div>
                <div>
                  <div className="text-sm text-cinema-muted">Location</div>
                  <div>{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-cinema-muted uppercase tracking-wider mb-2 block">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/[0.03] dark:bg-white/5 border border-cinema-gray rounded-xl px-4 py-3 text-primary placeholder-cinema-muted focus:outline-none focus:border-cinema-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-cinema-muted uppercase tracking-wider mb-2 block">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/[0.03] dark:bg-white/5 border border-cinema-gray rounded-xl px-4 py-3 text-primary placeholder-cinema-muted focus:outline-none focus:border-cinema-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-cinema-muted uppercase tracking-wider mb-2 block">Project Type</label>
                <select
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full bg-black/[0.03] dark:bg-white/5 border border-cinema-gray rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-cinema-accent transition-colors appearance-none"
                >
                  <option value="" className="bg-cinema-dark text-primary">Select type</option>
                  <option value="commercial" className="bg-cinema-dark text-primary">Commercial</option>
                  <option value="music-video" className="bg-cinema-dark text-primary">Music Video</option>
                  <option value="documentary" className="bg-cinema-dark text-primary">Documentary</option>
                  <option value="corporate" className="bg-cinema-dark text-primary">Corporate</option>
                  <option value="wedding" className="bg-cinema-dark text-primary">Wedding</option>
                  <option value="youtube" className="bg-cinema-dark text-primary">YouTube / Social</option>
                  <option value="other" className="bg-cinema-dark text-primary">Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-cinema-muted uppercase tracking-wider mb-2 block">Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-black/[0.03] dark:bg-white/5 border border-cinema-gray rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-cinema-accent transition-colors appearance-none"
                >
                  <option value="" className="bg-cinema-dark text-primary">Select budget</option>
                  <option value="500-1000" className="bg-cinema-dark text-primary">$500 - $1,000</option>
                  <option value="1000-3000" className="bg-cinema-dark text-primary">$1,000 - $3,000</option>
                  <option value="3000-5000" className="bg-cinema-dark text-primary">$3,000 - $5,000</option>
                  <option value="5000+" className="bg-cinema-dark text-primary">$5,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm text-cinema-muted uppercase tracking-wider mb-2 block">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-black/[0.03] dark:bg-white/5 border border-cinema-gray rounded-xl px-4 py-3 text-primary placeholder-cinema-muted focus:outline-none focus:border-cinema-accent transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-cinema-accent text-white rounded-xl hover:bg-cinema-accent/80 transition-all hover:scale-[1.02] disabled:opacity-70"
              data-cursor="pointer"
            >
              {submitted ? (
                <>
                  <CheckCircle size={18} />
                  <span className="uppercase tracking-wider text-sm font-medium">Message Sent!</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span className="uppercase tracking-wider text-sm font-medium">Send Message</span>
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
