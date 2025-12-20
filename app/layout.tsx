import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bethany Ventures - Elite Venture Scouts for Web3 & Emerging Tech',
  description: 'Network of elite venture scouts helping high-potential Web3 and emerging-tech projects secure equity or OTC funding from pre-seed to Series B+.',
  keywords: 'venture scouts, Web3, emerging tech, funding, Series A, Series B, pre-seed, equity funding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-accent-white">
          {children}
        </div>
      </body>
    </html>
  )
}
