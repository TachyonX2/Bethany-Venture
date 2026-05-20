'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'

export default function PositioningSection() {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-narrow space-y-16">
        <SectionHeader
          label="Who we are"
          title="A boutique advisory firm for Web3 capital formation"
          description="We sit between founders, investors, and market infrastructure, coordinating execution without pretending to be a fund or an exchange."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              title: 'What we are',
              body: 'Strategic advisors and coordinators for fundraising, OTC, liquidity planning, exchange pathways, and ecosystem partnerships.',
            },
            {
              title: 'What we are not',
              body: 'Not a VC fund, not a broker dealer, not an exchange, and not a placement agent. We do not manage external capital or guarantee listings.',
            },
            {
              title: 'Who we serve',
              body: 'Serious founders, ecosystems, and investors who value counterparty quality, disclosure discipline, and long horizon market formation.',
            },
          ].map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-premium p-8"
            >
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-4 body-muted">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
