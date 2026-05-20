'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import {
  ecosystemVerticals,
  investorNetwork,
  marketAccessCategories,
} from '@/lib/site-data'

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="section-padding bg-surface-raised">
      <div className="container-narrow space-y-16">
        <SectionHeader
          label="Networks & ecosystems"
          title="Market access experience and relationship depth"
          description="Logos and names below reflect firms and categories Bethany Ventures has worked across or maintains relationships with, not formal partnership endorsements unless separately agreed in writing."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-display text-xl text-ink">Worked across</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {ecosystemVerticals.map((vertical) => (
                <li
                  key={vertical}
                  className="rounded-xl border border-white/[0.06] bg-surface/60 px-4 py-3 text-sm text-ink-muted"
                >
                  {vertical}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="font-display text-xl text-ink">Market access experience</h3>
            <ul className="space-y-3">
              {marketAccessCategories.map((category) => (
                <li
                  key={category}
                  className="flex items-center gap-3 text-sm text-ink-muted"
                >
                  <span className="h-px w-6 bg-brand-light/60" />
                  {category}
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed text-ink-faint">
              Exchange and OTC names are referenced for experience context only. Bethany
              Ventures is not affiliated with, endorsed by, or acting on behalf of any
              centralized exchange unless explicitly stated in a separate agreement.
            </p>
          </motion.div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="font-display text-xl text-ink">Investor & advisor network</h3>
            <p className="max-w-md text-xs text-ink-faint">
              Representative firms in our network. Display does not constitute a partnership,
              investment, or endorsement by the firms shown.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {investorNetwork.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.03 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center rounded-xl border border-white/[0.06] bg-surface/40 px-3 py-5 grayscale transition hover:grayscale-0"
              >
                <div className="relative mb-2 h-10 w-20">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain opacity-70"
                    sizes="80px"
                  />
                </div>
                <p className="text-center text-[10px] text-ink-faint">{partner.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
