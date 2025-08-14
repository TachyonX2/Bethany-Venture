'use client'

import { motion } from 'framer-motion'

export default function ValuePropositionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-light-gray">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-heading">
            <span className="text-gradient">Value Proposition</span>
          </h2>
          <p className="text-xl text-primary-dark-green max-w-2xl mx-auto">
            We create value for both founders seeking funding and investors seeking opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* For Founders */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-accent-white p-8 rounded-2xl border border-gray-200 shadow-lg"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary-dark-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-dark-green mb-4 font-heading">For Founders</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-dark-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-primary-dark-green">Access to our network of 500+ strategic investors</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-dark-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-primary-dark-green">Strategic positioning and pitch optimization</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-dark-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-primary-dark-green">Valuation guidance and term sheet negotiation</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-dark-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-primary-dark-green">Ongoing support through the funding process</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-dark-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-primary-dark-green">Post-investment strategic advisory</span>
              </li>
            </ul>
          </motion.div>

          {/* For Investors */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-accent-white p-8 rounded-2xl border border-gray-200 shadow-lg"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary-dark-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-dark-green mb-4 font-heading">For Investors</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-dark-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-primary-dark-green">Curated pipeline of pre-vetted opportunities</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-dark-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-primary-dark-green">Deep due diligence and market analysis</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-dark-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-primary-dark-green">Access to exclusive deal flow</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-dark-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-primary-dark-green">Strategic introductions to promising founders</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-dark-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-primary-dark-green">Ongoing portfolio company support</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
