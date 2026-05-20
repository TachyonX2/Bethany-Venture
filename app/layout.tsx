import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bethanyventures.org'),
  title: 'Bethany Ventures | Web3 Capital & Liquidity Advisory',
  description:
    'Boutique advisory for Web3 founders and investors: capital strategy, OTC coordination, exchange pathways, growth partnerships, and institutional introductions.',
  keywords:
    'Bethany Ventures, Web3 advisory, OTC coordination, capital advisory, exchange strategy, liquidity, crypto fundraising, boutique advisory',
  openGraph: {
    title: 'Bethany Ventures | Web3 Capital & Liquidity Advisory',
    description:
      'Boutique advisory for serious founders, ecosystems, and investors across fundraising, OTC, and market access.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <div className="flex min-h-screen flex-col bg-surface">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
