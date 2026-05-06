import type { Metadata } from 'next'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bethany Ventures | Liquidity & Capital Advisory for Web3',
  description:
    'Bethany Ventures is a liquidity and capital advisory firm helping Web3 founders raise strategic funding, structure liquidity, and access exchanges.',
  keywords:
    'Bethany Ventures, Web3 liquidity, OTC, capital advisory, token listings, market making, exchange access, crypto fundraising',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col bg-accent-white">
          <header className="sticky top-0 z-40 border-b border-gray-200 bg-accent-white/95 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <a
                href="/"
                className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark-green/40 focus-visible:ring-offset-2"
              >
                <Image
                  src="/bethany-ventures-logo.png"
                  alt="Bethany Ventures"
                  width={160}
                  height={160}
                  className="h-9 w-auto object-contain sm:h-10"
                  priority
                />
              </a>
              <nav className="hidden items-center gap-8 text-sm text-primary-dark-green/80 md:flex">
                <a href="#services" className="hover:text-primary-dark-green">
                  Services
                </a>
                <a href="#pathways" className="hover:text-primary-dark-green">
                  Founders & Investors
                </a>
                <a href="#process" className="hover:text-primary-dark-green">
                  Process
                </a>
                <a href="#insights" className="hover:text-primary-dark-green">
                  Insights
                </a>
              </nav>
              <div className="hidden items-center gap-3 md:flex">
                <a
                  href="https://tally.so/r/b57eDg"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-primary-dark-green/20 bg-accent-white px-4 py-2 text-xs font-medium text-primary-dark-green transition hover:border-primary-dark-green/60 hover:bg-primary-dark-green/5"
                >
                  Apply for Funding
                </a>
                <a
                  href="https://calendly.com/hello-bethanyventures/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-background-light-gray px-4 py-2 text-xs font-semibold text-primary-dark-green shadow-sm transition hover:bg-accent-white"
                >
                  Schedule a Call →
                </a>
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
