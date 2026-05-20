'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CALENDLY_URL, INTAKE_URL } from '@/lib/site-data'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Selected Work' },
  { href: '#team', label: 'Team' },
  { href: '#process', label: 'Process' },
  { href: '#insights', label: 'Insights' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/[0.08] bg-surface/90 backdrop-blur-xl shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light"
          aria-label="Bethany Ventures home"
        >
          <Image
            src="/bethany-ventures-logo.png"
            alt="Bethany Ventures"
            width={200}
            height={80}
            className="h-9 w-auto max-w-[180px] object-contain object-left sm:h-10 sm:max-w-[200px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={INTAKE_URL} target="_blank" rel="noreferrer" className="btn-secondary !px-4 !py-2 text-xs">
            Discuss Your Raise
          </a>
          <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-primary !px-4 !py-2 text-xs">
            Book a Strategy Call
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="h-5 w-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/[0.08] bg-surface-raised px-4 py-6 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-muted"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="divider-gradient my-2" />
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-primary text-center">
              Book a Strategy Call
            </a>
            <a href={INTAKE_URL} target="_blank" rel="noreferrer" className="btn-secondary text-center">
              Discuss Your Raise
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
