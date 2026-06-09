import { motion } from 'framer-motion'
import { Check, Zap } from 'lucide-react'
import { pricingPlans } from '../data/extras'

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-subtitle mb-4 block">Pricing</span>
          <h2 className="section-title">
            Choose Your <span className="text-cinema-accent">Package</span>
          </h2>
          <div className="accent-line w-32 mt-6 mx-auto" />
          <p className="text-cinema-muted max-w-2xl mx-auto mt-6 text-lg">
            Transparent pricing with no hidden fees. Custom quotes available for larger projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative glass-card p-8 flex flex-col ${
                plan.popular
                  ? 'border-cinema-accent/40 ring-1 ring-cinema-accent/20 scale-[1.02]'
                  : ''
              } hover-lift`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1 bg-cinema-accent rounded-full text-xs uppercase tracking-wider font-medium text-white">
                  <Zap size={12} fill="currentColor" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-2xl tracking-wider uppercase mb-2">{plan.name}</h3>
                <p className="text-sm text-cinema-muted">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="font-display text-5xl text-cinema-accent">{plan.price}</span>
                <span className="text-cinema-muted text-sm ml-2">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-cinema-light">
                    <Check size={16} className="text-cinema-accent shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-4 rounded-xl uppercase tracking-wider text-sm font-medium transition-all ${
                  plan.popular
                    ? 'bg-cinema-accent text-white hover:bg-cinema-accent/80'
                    : 'border border-cinema-gray hover:border-cinema-accent hover:text-cinema-accent'
                }`}
                data-cursor="pointer"
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
