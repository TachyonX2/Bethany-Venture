'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { testimonials } from '@/lib/site-data'

export default function SocialProofSection() {
  return (
    <section id="testimonials" className="section-padding bg-surface">
      <div className="container-narrow space-y-14">
        <SectionHeader
          label="Client perspectives"
          title="Endorsements from verified engagements"
          description="Published with permission. We do not invent testimonials or attribute quotes to unverified counterparties."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.source}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-premium relative p-8 lg:p-10"
            >
              <span className="absolute left-8 top-6 font-display text-6xl leading-none text-brand-light/20">
                &ldquo;
              </span>
              <div className="relative space-y-4 pt-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold text-ink">{item.source}</span>
                  <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-ink-faint">
                    {item.type}
                  </span>
                </div>
                <p className="text-base leading-relaxed text-ink-muted">{item.quote}</p>
                <footer className="text-sm text-ink-faint">{item.attribution}</footer>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
