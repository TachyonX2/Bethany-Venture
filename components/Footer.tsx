'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-primary-dark-green border-t border-primary-muted-green">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-accent-white mb-4 font-heading">
                <span className="text-gradient">Bethany Ventures</span>
              </h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                Elite venture scouts helping high-potential Web3 and emerging-tech projects 
                secure equity or OTC funding from pre-seed to Series B+.
              </p>
              <div className="flex space-x-4">
                <a href="https://x.com/bethanyventure?s=21" className="text-gray-300 hover:text-accent-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/108611320/" className="text-gray-300 hover:text-accent-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>                
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-accent-white mb-4 font-heading">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-200 hover:text-accent-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-200 hover:text-accent-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-200 hover:text-accent-white transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#success" className="text-gray-200 hover:text-accent-white transition-colors">
                  Success Stories
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-accent-white mb-4 font-heading">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-200">
                <span className="text-accent-white font-semibold">Email:</span> hello@bethanyventures.org
              </li>
              <li className="text-gray-200">
                <span className="text-accent-white font-semibold">Phone:</span> +1 (555) 123-4567
              </li>
              <li className="text-gray-200">
                <span className="text-accent-white font-semibold">Location:</span> London, UK
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-primary-muted-green mt-8 pt-8 text-center"
        >
          <p className="text-gray-300">
            © 2025 Bethany Ventures. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
