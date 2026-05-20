'use client'

import { motion } from 'framer-motion'
import { CALENDLY_URL, EMAIL, INTAKE_URL, PHONE } from '@/lib/site-data'

export default function ContactCTASection() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-surface-raised">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-premium mx-auto max-w-4xl p-10 text-center lg:p-14"
        >
          <p className="section-label">Get in touch</p>
          <h2 className="mt-4 heading-section">Speak with our team</h2>
          <p className="mx-auto mt-4 max-w-xl body-muted">
            Share your mandate: raise preparation, OTC coordination, exchange strategy, or
            partnership exploration. We respond to qualified inquiries within two business days.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-primary">
              Book a Strategy Call
            </a>
            <a href={INTAKE_URL} target="_blank" rel="noreferrer" className="btn-secondary">
              Discuss Your Raise
            </a>
          </div>
          <div className="divider-gradient mx-auto my-8 max-w-xs" />
          <div className="flex flex-col items-center gap-2 text-sm text-ink-muted sm:flex-row sm:justify-center sm:gap-6">
            <a href={`mailto:${EMAIL}`} className="hover:text-ink">
              {EMAIL}
            </a>
            <span className="hidden text-ink-faint sm:inline">·</span>
            <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="hover:text-ink">
              {PHONE}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
