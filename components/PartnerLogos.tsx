'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

// Your actual partner companies - place your JPG logos in public/partner logos/ folder
const partners = [
  { name: 'Msquared', logo: '/partner logos/msquared.jpg' },
  { name: 'Amigo Ventures', logo: '/partner logos/amigo.jpg' },
  { name: 'AcquireFi', logo: '/partner logos/aquireFi.jpg' },
  { name: 'Anti Capital', logo: '/partner logos/anti capital.jpg' },
  { name: 'Enflux Capital', logo: '/partner logos/enflux.jpg' },
  { name: 'Cequire Capital', logo: '/partner logos/cequire.jpg' },
  { name: 'Cybertim', logo: '/partner logos/cybertim.jpg' },
  { name: 'HVS Ventures', logo: '/partner logos/HVS.jpg' },
  { name: 'MAGNUS', logo: '/partner logos/magnus.jpg' },
  { name: 'Web3 Ventures', logo: '/partner logos/web3 ventures.jpg' },
  { name: 'Nimbus Capital', logo: '/partner logos/nimbus.jpg' },
]

export default function PartnerLogos() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-heading">
            <span className="text-gradient">Key Partners</span>
          </h2>
          <p className="text-lg text-primary-dark-green max-w-2xl mx-auto">
            We work with established companies and innovative startups across the Web3 and emerging tech ecosystem.
          </p>
        </motion.div>

        {/* Logo Slideshow */}
        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-primary-dark-green to-primary-muted-green p-8 rounded-2xl shadow-lg">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={partners[currentIndex].logo}
                    alt={`${partners[currentIndex].name} logo`}
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </div>
                <div className="text-lg text-accent-white font-semibold">
                  {partners[currentIndex].name}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-dark-green scale-125'
                    : 'bg-gray-300 hover:bg-primary-muted-green'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Partner Grid (Alternative Layout) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background-light-gray p-6 rounded-xl border border-gray-200 hover:border-primary-dark-green transition-all duration-300 hover:shadow-lg text-center"
              >
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
                <div className="text-sm text-primary-dark-green font-medium">
                  {partner.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
