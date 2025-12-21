'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const exchanges = [
  { name: 'Binance', logo: '/exchange-logos/exchange-1.png' },
  { name: 'Bybit', logo: '/exchange-logos/exchange-2.jpg' },
  { name: 'OKX', logo: '/exchange-logos/exchange-3.jpg' },
  { name: 'Gate', logo: '/exchange-logos/exchange-4.jpg' },
  { name: 'MEXC', logo: '/exchange-logos/exchange-5.jpg' },
  { name: 'KuCoin', logo: '/exchange-logos/exchange-6.jpg' },
]

interface ExchangeLogoProps {
  logo: string
  name: string
}

function ExchangeLogo({ logo, name }: ExchangeLogoProps) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <div className="text-center">
        <svg
          className="w-16 h-16 mx-auto mb-2 text-gray-400 group-hover:text-primary-muted-green transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p className="text-xs text-gray-500 group-hover:text-primary-muted-green transition-colors duration-300">
          Logo Placeholder
        </p>
      </div>
    )
  }

  return (
    <Image
      src={logo}
      alt={`${name} logo`}
      fill
      className="object-contain p-4"
      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      onError={() => setImageError(true)}
    />
  )
}

export default function ExchangePartnersSection() {
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
            <span className="text-gradient">Tier 1 Exchange Partners</span>
          </h2>
          <p className="text-xl text-primary-dark-green max-w-2xl mx-auto">
            We partner with leading Tier 1 cryptocurrency exchanges to provide seamless listing opportunities and market access for our portfolio companies.
          </p>
        </motion.div>

        {/* Exchange Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {exchanges.map((exchange, index) => (
            <motion.div
              key={exchange.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-background-light-gray p-8 rounded-2xl border-2 border-gray-200 hover:border-primary-dark-green transition-all duration-300 hover:shadow-xl flex flex-col items-center justify-center min-h-[200px]">
                {/* Logo Container */}
                <div className="w-full h-32 mb-4 flex items-center justify-center bg-white rounded-xl border border-gray-300 group-hover:border-primary-muted-green transition-all duration-300 relative overflow-hidden">
                  <ExchangeLogo logo={exchange.logo} name={exchange.name} />
                </div>
                {/* Exchange Name */}
                <p className="text-sm font-medium text-primary-dark-green text-center mt-2">
                  {exchange.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

