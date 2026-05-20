'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { CALENDLY_URL, INTAKE_URL } from '@/lib/site-data'

const pathways = [
  {
    audience: 'For Founders',
    description:
      'Structure your raise, coordinate OTC and liquidity, and navigate exchange and GTM milestones with an aligned advisory partner.',
    items: [
      'Capital stack and allocation planning',
      'OTC counterparty coordination',
      'Exchange pathway advisory',
      'Partnership and launch sequencing',
    ],
    primary: { label: 'Discuss Your Raise', href: INTAKE_URL },
    secondary: { label: 'Book a Strategy Call', href: CALENDLY_URL },
  },
  {
    audience: 'For Investors & Ecosystems',
    description:
      'Access curated deal flow, structured allocations, and coordination with teams that treat disclosure and liquidity seriously.',
    items: [
      'Thesis aligned founder introductions',
      'Structured OTC opportunities',
      'Ecosystem and partnership mandates',
      'Ongoing relationship coordination',
    ],
    primary: { label: 'Explore Partnership', href: INTAKE_URL },
    secondary: { label: 'Speak With Our Team', href: CALENDLY_URL },
  },
]

export default function PathwaysSection() {
  return (
    <section id="pathways" className="section-padding bg-surface-raised">
      <div className="container-narrow space-y-14">
        <SectionHeader
          label="Engage with us"
          title="Two paths. One execution standard."
          align="center"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {pathways.map((path, index) => (
            <motion.div
              key={path.audience}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-premium flex flex-col p-8 lg:p-10"
            >
              <h3 className="font-display text-2xl text-ink">{path.audience}</h3>
              <p className="mt-3 body-muted">{path.description}</p>
              <ul className="mt-6 flex-1 space-y-2">
                {path.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-glow" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={path.primary.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-center"
                >
                  {path.primary.label}
                </a>
                <a
                  href={path.secondary.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary text-center"
                >
                  {path.secondary.label}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
