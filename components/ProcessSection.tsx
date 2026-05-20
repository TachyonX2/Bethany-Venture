'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'

const steps = [
  {
    number: '01',
    title: 'Mandate assessment',
    description:
      'We review token structure, treasury, cap table, and market position to understand constraints, timelines, and readiness.',
  },
  {
    number: '02',
    title: 'Strategy & structure',
    description:
      'Capital and liquidity plan across OTC, private rounds, market makers, and exchange pathways, aligned to your objectives.',
  },
  {
    number: '03',
    title: 'Coordination',
    description:
      'Introductions and execution support with investors, OTC counterparties, and market infrastructure where relationships exist.',
  },
  {
    number: '04',
    title: 'Execution and follow through',
    description:
      'Ongoing support through close, listing windows, and after the raise: liquidity stability, announcements, and relationship management.',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-surface">
      <div className="container-narrow space-y-14">
        <SectionHeader
          label="How we work"
          title="A repeatable process for institutional execution"
          description="Structured from first conversation through post mandate support, designed for teams that treat capital formation as core infrastructure."
          align="center"
        />

        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand-light/30 to-transparent lg:block" />
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-brand-light/40 bg-surface-raised font-mono text-xs tracking-widest text-brand-muted">
                {step.number}
              </div>
              <h3 className="font-display text-lg text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
