'use client'

import { motion } from 'framer-motion'

const metrics = [
  { label: 'OTC flow coordinated', value: '500+ SOL' },
  { label: 'Focus', value: 'Web3 & Emerging Tech' },
  { label: 'Mandate', value: 'Strategic capital & liquidity' },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary-dark-green">
      <div className="absolute inset-0 gradient-bg opacity-90" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* Left: narrative + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-white/20 bg-primary-dark-green/40 px-4 py-1 text-[11px] font-medium text-accent-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
              Liquidity, capital, and exchange access for institutional-grade Web3 teams.
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-accent-white sm:text-5xl lg:text-[2.9rem] font-heading leading-tight">
                Elite Venture Agency for{' '}
                <span className="text-gradient">Web3 &amp; Emerging Tech</span>
              </h1>
              <p className="max-w-2xl text-sm text-gray-100/95 sm:text-base">
                Helping high-potential Web3 and emerging tech projects secure strategic capital,
                structure liquidity, and access top-tier exchanges through expert advisory and
                matchmaking.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://calendly.com/hello-bethanyventures/30min"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-background-light-gray px-6 py-3 text-sm font-semibold text-primary-dark-green shadow-sm transition hover:bg-accent-white"
              >
                Schedule a Call
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://tally.so/r/b57eDg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-accent-white/50 bg-transparent px-6 py-3 text-sm font-medium text-accent-white transition hover:bg-accent-white hover:text-primary-dark-green"
              >
                Apply for Funding
              </motion.a>
            </div>
          </motion.div>

          {/* Right: structured hero panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="hidden rounded-2xl border border-accent-white/10 bg-primary-dark-green/40 p-5 shadow-lg/40 sm:block"
          >
            <div className="mb-4 flex items-center justify-between text-[11px] text-accent-white/70">
              <span className="uppercase tracking-[0.18em]">Mandate overview</span>
              <span>Founders • Investors</span>
            </div>

            <div className="space-y-4 rounded-xl bg-primary-dark-green/60 p-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-baseline justify-between gap-4 border-b border-accent-white/10 pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="text-[11px] uppercase tracking-[0.16em] text-accent-white/60">
                    {metric.label}
                  </span>
                  <span className="text-sm font-semibold text-accent-white">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 text-[11px] text-accent-white/80 sm:grid-cols-2">
              <div className="rounded-lg border border-accent-white/10 bg-primary-dark-green/40 px-3 py-2">
                <div className="font-semibold text-accent-white">For Founders</div>
                <p className="mt-1 text-[11px] text-accent-white/80">
                  Strategic capital, liquidity design, and exchange access for serious teams.
                </p>
              </div>
              <div className="rounded-lg border border-accent-white/10 bg-primary-dark-green/40 px-3 py-2">
                <div className="font-semibold text-accent-white">For Investors</div>
                <p className="mt-1 text-[11px] text-accent-white/80">
                  Curated Web3 deal flow with disciplined entry and distribution coordination.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
