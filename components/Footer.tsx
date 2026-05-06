'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-accent-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold tracking-[0.18em] text-primary-dark-green uppercase">
              Bethany Ventures
            </h3>
            <p className="mt-4 max-w-md text-sm text-primary-dark-green/80">
              Liquidity and capital advisory for Web3 teams that treat token, treasury, and
              distribution decisions as infrastructure—not marketing.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-primary-dark-green/80">
              <span className="rounded-full border border-primary-dark-green/30 px-3 py-1">
                Liquidity & OTC execution
              </span>
              <span className="rounded-full border border-primary-dark-green/30 px-3 py-1">
                Exchange & market making strategy
              </span>
              <span className="rounded-full border border-primary-dark-green/30 px-3 py-1">
                Strategic capital coordination
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4 text-sm text-primary-dark-green/90"
          >
            <div>
              <div className="font-semibold text-primary-dark-green">Contact</div>
              <p className="mt-1 text-primary-dark-green/90">
                Email:{' '}
                <a
                  href="mailto:hello@bethanyventures.org"
                  className="text-primary-dark-green underline-offset-2 hover:underline"
                >
                  hello@bethanyventures.org
                </a>
              </p>
              <p className="mt-1 text-primary-dark-green/90">
                Phone:{' '}
                <a
                  href="tel:+447411948768"
                  className="text-primary-dark-green underline-offset-2 hover:underline"
                >
                  +44 7411 948768
                </a>
              </p>
            </div>
            <div className="space-y-2">
              <a
                href="https://calendly.com/hello-bethanyventures/30min"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-primary-dark-green underline-offset-2 hover:underline"
              >
                Schedule a Call →
              </a>
              <div className="flex flex-col">
                <a
                  href="https://tally.so/r/b57eDg"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-dark-green underline-offset-2 hover:underline"
                >
                  Apply for Funding →
                </a>
              </div>
            </div>
            <p className="pt-2 text-xs text-primary-dark-green/70">
              Bethany Ventures does not provide financial advice. Nothing on this site
              constitutes an offer to sell or a solicitation of an offer to buy any security,
              token, or other instrument.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 text-xs text-primary-dark-green/70 sm:flex-row"
        >
          <p>© {new Date().getFullYear()} Bethany Ventures. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
