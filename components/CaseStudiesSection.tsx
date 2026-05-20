'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { caseStudies } from '@/lib/site-data'

export default function CaseStudiesSection() {
  return (
    <section id="work" className="section-padding bg-surface">
      <div className="container-narrow space-y-14">
        <SectionHeader
          label="Selected work"
          title="Mandates and outcomes"
          description="Representative engagements, anonymized where required by client confidentiality. No fabricated deal sizes or guaranteed results."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-premium flex flex-col p-8"
            >
              <span className="inline-flex w-fit rounded-full border border-brand-light/30 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-brand-muted">
                {study.category}
              </span>
              <h3 className="mt-4 font-display text-xl text-ink">{study.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                {study.summary}
              </p>
              <ul className="mt-6 list-disc space-y-2 border-t border-white/[0.06] pl-4 pt-6">
                {study.highlights.map((h) => (
                  <li key={h} className="text-xs text-ink-muted">
                    {h}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[10px] uppercase tracking-wider text-ink-faint">
                {study.status}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
