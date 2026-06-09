import { motion } from 'framer-motion'
import { processSteps } from '../data/portfolio'

export default function Process() {
  return (
    <section id="process" className="section-padding bg-cinema-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="section-subtitle mb-4 block">Workflow</span>
          <h2 className="section-title">
            My <span className="text-cinema-accent">Process</span>
          </h2>
          <div className="accent-line w-32 mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="font-display text-7xl text-cinema-muted/[0.08] dark:text-white/[0.03] absolute -top-4 -left-2 group-hover:text-cinema-accent/10 transition-colors">
                {step.step}
              </div>
              <div className="relative glass-card p-8 h-full hover-lift">
                <span className="font-mono text-sm text-cinema-accent tracking-wider">
                  STEP {step.step}
                </span>
                <h3 className="font-display text-2xl tracking-wider uppercase mt-2 mb-4">
                  {step.title}
                </h3>
                <p className="text-cinema-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
