'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { init, send } from '@emailjs/browser'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectStage: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Initialize EmailJS
  useEffect(() => {
    try {
      init("tKMsgNQvbmzvllnNH")
      console.log('EmailJS initialized successfully')
    } catch (error) {
      console.error('EmailJS init failed:', error)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Check if EmailJS is available
      if (typeof send === 'undefined') {
        throw new Error('EmailJS not initialized. Please refresh the page and try again.')
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_stage: formData.projectStage,
        message: formData.message,
        to_name: 'Bethany Ventures Team'
      }

      console.log('Sending email with params:', templateParams)

      await send(
        'service_wnma9y5',
        'template_v63a4pm',
        templateParams
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', projectStage: '', message: '' })
    } catch (error: any) {
      console.error('Email send failed:', error)
      console.error('Error details:', {
        message: error?.message,
        stack: error?.stack,
        response: error?.response
      })
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent-white">
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
            Ready to take your project to the next level? Let&apos;s discuss how we can help you secure the funding you need.
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
              disabled={isSubmitting}
              className={`w-full font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-primary-dark-green hover:bg-primary-muted-green'
              } text-accent-white`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>



            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center"
              >
                Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center"
              >
                Sorry, there was an error sending your message. Please try again or contact us directly.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
