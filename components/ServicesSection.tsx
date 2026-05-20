'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import { services } from '@/lib/site-data'

export default function ServicesSection() {
  const [active, setActive] = useState(services[0].id)
  const current = services.find((s) => s.id === active) ?? services[0]

  return (
    <section id="services" className="section-padding bg-surface-raised">
      <div className="container-narrow space-y-14">
        <SectionHeader
          label="Services"
          title="Structured advisory across the capital stack"
          description="Six clear mandates. Each defines who it serves, what outcomes to expect, and how engagement typically works."
        />

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setActive(service.id)}
                className={`shrink-0 rounded-xl border px-4 py-3 text-left text-sm transition duration-200 lg:w-full ${
                  active === service.id
                    ? 'border-brand-light/50 bg-brand/20 text-ink'
                    : 'border-white/[0.08] bg-surface/50 text-ink-muted hover:border-white/15 hover:text-ink'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="card-premium p-8 lg:p-10"
          >
            <h3 className="font-display text-2xl text-ink sm:text-3xl">{current.title}</h3>

            <div className="mt-8 space-y-8">
              <div>
                <p className="section-label mb-2">Who it&apos;s for</p>
                <p className="body-muted">{current.forWhom}</p>
              </div>
              <div>
                <p className="section-label mb-3">Outcomes</p>
                <ul className="space-y-2">
                  {current.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2 text-sm text-ink-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-glow" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="section-label mb-2">How engagement works</p>
                <p className="body-muted">{current.engagement}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
