'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectStage: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, just log the form data
    console.log('Form submitted:', formData)
    // In a real implementation, you would send this to your backend
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', projectStage: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-heading">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-xl text-primary-dark-green max-w-2xl mx-auto">
            Ready to take your project to the next level? Let's discuss how we can help you secure the funding you need.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-background-light-gray p-8 rounded-2xl border border-gray-200 shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-dark-green mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-accent-white border border-gray-300 rounded-lg text-primary-dark-green placeholder-gray-500 focus:outline-none focus:border-primary-dark-green focus:ring-1 focus:ring-primary-dark-green"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-dark-green mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-accent-white border border-gray-300 rounded-lg text-primary-dark-green placeholder-gray-500 focus:outline-none focus:border-primary-dark-green focus:ring-1 focus:ring-primary-dark-green"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div>
              <label htmlFor="projectStage" className="block text-sm font-medium text-primary-dark-green mb-2">
                Project Stage *
              </label>
              <select
                id="projectStage"
                name="projectStage"
                required
                value={formData.projectStage}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-accent-white border border-gray-300 rounded-lg text-primary-dark-green focus:outline-none focus:border-primary-dark-green focus:ring-1 focus:ring-primary-dark-green"
              >
                <option value="">Select your project stage</option>
                <option value="pre-seed">Pre-seed</option>
                <option value="seed">Seed</option>
                <option value="series-a">Series A</option>
                <option value="series-b">Series B</option>
                <option value="series-c">Series C+</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary-dark-green mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-accent-white border border-gray-300 rounded-lg text-primary-dark-green placeholder-gray-500 focus:outline-none focus:border-primary-dark-green focus:ring-1 focus:ring-primary-dark-green resize-vertical"
                placeholder="Tell us about your project, funding goals, and how we can help..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-primary-dark-green hover:bg-primary-muted-green text-accent-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
