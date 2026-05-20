'use client'

import { motion } from 'framer-motion'
import { CALENDLY_URL, INTAKE_URL } from '@/lib/site-data'

const focusAreas = [
  'Capital advisory & raise preparation',
  'OTC & private allocation coordination',
  'Exchange strategy & market access',
  'Growth, partnerships & GTM',
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand/20 via-transparent to-surface" />

      <div className="container-narrow relative flex min-h-[88vh] flex-col justify-center px-4 py-28 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.35fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-glow opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-glow" />
              </span>
              <span className="text-[11px] font-medium tracking-wide text-ink-muted">
                Boutique Web3 capital & liquidity advisory
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="heading-display max-w-4xl">
                Strategic advisory for founders building{' '}
                <span className="gradient-text">credible markets</span>
              </h1>
              <p className="max-w-xl body-muted text-base sm:text-lg">
                Bethany Ventures helps Web3 teams structure raises, coordinate OTC and
                liquidity, navigate exchange pathways, and activate partnerships, with the
                discipline of a boutique advisory firm, not a hype agency.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Book a Strategy Call
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={INTAKE_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Discuss Your Raise
              </motion.a>
            </div>

            <p className="text-xs text-ink-faint max-w-lg">
              Advisory services only. Bethany Ventures is not a venture fund, broker dealer,
              or exchange. No offer of securities on this site.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="card-premium bg-card-glow p-6 shadow-glow">
              <div className="mb-5 flex items-center justify-between">
                <span className="section-label">Advisory mandate</span>
                <span className="text-[10px] text-ink-faint">Founders · Investors · Ecosystems</span>
              </div>

              <ul className="space-y-4">
                {focusAreas.map((area, i) => (
                  <li
                    key={area}
                    className="flex items-start gap-3 border-b border-white/[0.06] pb-4 last:border-0 last:pb-0"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-light/40 text-[10px] font-semibold text-brand-muted">
                      {i + 1}
                    </span>
                    <span className="text-sm text-ink">{area}</span>
                  </li>
                ))}
              </ul>

              <div className="divider-gradient my-5" />

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/[0.06] bg-surface/60 p-3">
                  <p className="text-[10px] uppercase tracking-wider text-ink-faint">For founders</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                    Raise prep, OTC, exchange strategy, and GTM coordination.
                  </p>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-surface/60 p-3">
                  <p className="text-[10px] uppercase tracking-wider text-ink-faint">For investors</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                    Curated introductions and structured allocation access.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="divider-gradient" />
    </section>
  )
}
