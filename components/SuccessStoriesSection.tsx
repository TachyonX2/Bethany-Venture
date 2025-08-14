'use client'

import { motion } from 'framer-motion'

const successStories = [
  {
    title: 'DeFi Protocol Series A',
    description: 'Helped a DeFi protocol secure $15M Series A funding from top-tier VCs, achieving 3x oversubscription within 2 weeks.',
    metrics: {
      funding: '$15M',
      timeline: '2 weeks',
      oversubscription: '3x'
    },
    category: 'DeFi'
  },
  {
    title: 'Web3 Infrastructure Seed',
    description: 'Guided a Web3 infrastructure startup through their seed round, connecting them with strategic investors who provided both capital and technical expertise.',
    metrics: {
      funding: '$8M',
      timeline: '4 weeks',
      investors: '5 VCs'
    },
    category: 'Infrastructure'
  },
  {
    title: 'AI/Blockchain Series B',
    description: 'Successfully positioned an AI-powered blockchain platform for Series B, resulting in $25M funding and strategic partnerships with enterprise clients.',
    metrics: {
      funding: '$25M',
      timeline: '6 weeks',
      partnerships: '3 enterprise'
    },
    category: 'AI/Blockchain'
  }
]

export default function SuccessStoriesSection() {
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
            <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-primary-dark-green max-w-2xl mx-auto">
            Real results from real projects. Here are some of our recent success stories.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-accent-white p-8 rounded-2xl border border-gray-200 hover:border-primary-dark-green transition-all duration-300 hover:shadow-2xl"
            >
              <div className="mb-4">
                <span className="inline-block bg-primary-dark-green text-accent-white px-3 py-1 rounded-full text-sm font-semibold">
                  {story.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-primary-dark-green mb-4 font-heading">
                {story.title}
              </h3>
              
              <p className="text-primary-dark-green leading-relaxed mb-6">
                {story.description}
              </p>
              
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                {Object.entries(story.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-primary-dark-green font-bold text-lg">
                      {value}
                    </div>
                    <div className="text-gray-600 text-sm capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
