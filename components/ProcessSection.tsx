'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Initial Assessment',
    description: 'We evaluate your project\'s potential, market fit, and funding readiness through our proprietary scoring system.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Strategic Positioning',
    description: 'We work with you to optimize your pitch, valuation strategy, and investor targeting approach.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Investor Matching',
    description: 'We introduce you to carefully selected investors who align with your stage, sector, and strategic goals.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'Deal Execution',
    description: 'We support you through negotiations, due diligence, and closing to ensure optimal terms and successful funding.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
]

export default function ProcessSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-heading">
            <span className="text-gradient">Our Process</span>
          </h2>
          <p className="text-xl text-primary-dark-green max-w-2xl mx-auto">
            A proven methodology that maximizes your chances of securing the right funding at the right terms.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-dark-green to-primary-muted-green transform -translate-y-1/2 z-0"></div>
          
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
                  {/* Step Circle */}
                  <div className="w-16 h-16 bg-primary-dark-green rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                    <div className="text-accent-white font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-accent-white rounded-full flex items-center justify-center border-2 border-primary-dark-green">
                      <div className="text-primary-dark-green">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary-dark-green mb-4 font-heading">
                  {step.title}
                </h3>
                <p className="text-primary-dark-green leading-relaxed">
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
