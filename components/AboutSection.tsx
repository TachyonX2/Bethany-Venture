'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-light-gray">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-heading">
              <span className="text-gradient">About Bethany Ventures</span>
            </h2>
            <p className="text-lg text-primary-dark-green leading-relaxed">
              We are a network of elite venture scouts with deep expertise in Web3, blockchain, 
              and emerging technologies. Our mission is to bridge the gap between innovative 
              founders and strategic investors, ensuring that groundbreaking projects receive 
              the funding and support they need to scale from pre-seed to Series B+ and beyond.
            </p>
            <p className="text-lg text-primary-dark-green leading-relaxed mt-4">
              With years of experience in venture capital and a proven track record of successful 
              exits, our team brings unparalleled insights into market dynamics, investor 
              preferences, and strategic positioning that maximizes funding success rates.
            </p>
          </div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-dark-green to-primary-muted-green p-8 rounded-2xl shadow-2xl">
              {/* Network Connection Illustration */}
              <div className="relative h-64">
                {/* Central Node */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-accent-white rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-primary-dark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                
                {/* Connected Nodes */}
                <div className="absolute top-4 left-4">
                  <div className="w-8 h-8 bg-accent-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-primary-dark-green rounded-full"></div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-accent-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-primary-dark-green rounded-full"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-8 h-8 bg-accent-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-primary-dark-green rounded-full"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-8 h-8 bg-accent-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-primary-dark-green rounded-full"></div>
                  </div>
                </div>
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="50" y1="50" x2="20" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                  <line x1="50" y1="50" x2="80" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                  <line x1="50" y1="50" x2="20" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                  <line x1="50" y1="50" x2="80" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                </svg>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-white">500+</div>
                  <div className="text-sm text-gray-200">Investors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-white">$50M+</div>
                  <div className="text-sm text-gray-200">Raised</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-white">95%</div>
                  <div className="text-sm text-gray-200">Success Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
