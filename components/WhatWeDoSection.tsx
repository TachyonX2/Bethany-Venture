'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Venture Scouting',
    description: 'Identify and evaluate high-potential Web3 and emerging tech projects with strong fundamentals and market potential.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    title: 'Strategic Matchmaking',
    description: 'Connect founders with the right investors based on stage, sector expertise, and strategic alignment.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Funding Advisory',
    description: 'Provide strategic guidance on fundraising strategy, valuation, and investor relations to maximize funding success.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    )
  }
]

export default function WhatWeDoSection() {
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
            <span className="text-gradient">What We Do</span>
          </h2>
          <p className="text-xl text-primary-dark-green max-w-2xl mx-auto">
            Our comprehensive approach ensures that both founders and investors achieve their strategic objectives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-background-light-gray p-8 rounded-2xl border border-gray-200 hover:border-primary-dark-green transition-all duration-300 hover:shadow-2xl"
            >
              <div className="text-primary-dark-green mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary-dark-green font-heading">
                {service.title}
              </h3>
              <p className="text-primary-dark-green leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
