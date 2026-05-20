'use client'

import Link from 'next/link'
import { CALENDLY_URL, EMAIL, INTAKE_URL, PHONE } from '@/lib/site-data'

const footerLinks = {
  company: [
    { href: '#services', label: 'Services' },
    { href: '#team', label: 'Team' },
    { href: '#work', label: 'Selected Work' },
    { href: '#insights', label: 'Insights' },
  ],
  legal: [
    { href: '/legal/disclaimer', label: 'Disclaimer' },
    { href: '/legal/privacy', label: 'Privacy Policy' },
    { href: '/legal/terms', label: 'Terms of Service' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-surface">
      <div className="container-narrow px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="section-label">Bethany Ventures</p>
            <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
              Boutique Web3 capital and liquidity advisory. We coordinate fundraising,
              OTC, exchange strategy, and partnerships for founders and investors who
              prioritize execution over hype.
            </p>
            <p className="text-xs text-ink-faint">
              [Legal entity name and registration number: to be confirmed and inserted
              prior to publication]
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink">Company</p>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-ink-muted transition hover:text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink">Legal</p>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ink-muted transition hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink">Contact</p>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-ink">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="hover:text-ink">
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="hover:text-ink">
                  Book a Strategy Call
                </a>
              </li>
              <li>
                <a href={INTAKE_URL} target="_blank" rel="noreferrer" className="hover:text-ink">
                  Discuss Your Raise
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-gradient my-10" />

        <div className="space-y-4">
          <p className="text-xs leading-relaxed text-ink-faint">
            <strong className="text-ink-muted">Important disclaimer:</strong> Bethany Ventures
            provides strategic advisory and coordination services only. We are not a venture
            capital fund, broker dealer, investment adviser (unless separately registered),
            exchange, or placement agent. Nothing on this website constitutes financial,
            legal, or tax advice, or an offer to sell or solicitation to buy any security,
            token, or financial instrument. Past coordination of transactions or relationships
            does not guarantee future results. Services may not be available in all
            jurisdictions.
          </p>
          <div className="flex flex-col items-start justify-between gap-3 text-xs text-ink-faint sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Bethany Ventures. All rights reserved.</p>
            <p>Jurisdiction: [Insert governing jurisdiction upon legal review]</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
