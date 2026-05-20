'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { credibilityPillars } from '@/lib/site-data'

export default function CredibilitySection() {
  return (
    <section id="credibility" className="section-padding relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-hero-glow opacity-50" />
      <div className="container-narrow relative space-y-14">
        <SectionHeader
          label="Why founders work with us"
          title="Credibility through clarity, not vanity metrics"
          description="We do not publish unverified AUM, token volume, or success rate statistics. Our positioning is qualitative and mandate driven."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {credibilityPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="card-premium p-8"
            >
              <p className="section-label">{pillar.label}</p>
              <h3 className="mt-3 font-display text-xl text-ink">{pillar.title}</h3>
              <p className="mt-3 body-muted">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
