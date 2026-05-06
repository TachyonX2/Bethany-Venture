'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Initial Assessment',
    description:
      "We review your token, treasury, and current market position to understand liquidity constraints, cap table, and exchange readiness.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Capital Strategy Structuring',
    description:
      'We design a capital and liquidity plan across OTC, private rounds, market makers, and exchange timelines that aligns with your objectives.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Investor & Exchange Coordination',
    description:
      'We coordinate with strategic investors, OTC counterparties, and centralized exchanges to align allocations, timing, and disclosures.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'Execution & Post-Raise Support',
    description:
      'We stay involved through execution, listing, and post-raise, supporting liquidity stability, announcements, and ongoing capital relations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
]

export default function ProcessSection() {
  return (
    <section id="process" className="bg-accent-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-heading text-primary-dark-green">
            Process built for institutional execution
          </h2>
          <p className="text-sm sm:text-base text-primary-dark-green/80 max-w-2xl mx-auto">
            A structured, repeatable approach from first conversation through post-raise support,
            designed for teams that treat capital formation as core infrastructure.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-14 h-14 rounded-full border border-primary-dark-green/40 bg-background-light-gray flex items-center justify-center mx-auto mb-6 relative z-10">
                    <div className="text-xs font-semibold tracking-[0.2em] text-primary-dark-green/80">
                      {step.number}
                    </div>
                  </div>
                </div>

                <h3 className="text-base font-semibold text-primary-dark-green mb-3 font-heading">
                  {step.title}
                </h3>
                <p className="text-sm text-primary-dark-green/80 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
