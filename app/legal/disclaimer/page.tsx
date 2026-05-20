import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Disclaimer | Bethany Ventures',
  description: 'Legal disclaimer for Bethany Ventures advisory services.',
}

export default function DisclaimerPage() {
  return (
    <article className="section-padding">
      <div className="container-narrow max-w-3xl">
        <Link href="/" className="btn-ghost mb-8 inline-flex">
          Back to home
        </Link>
        <h1 className="heading-display">Disclaimer</h1>
        <p className="mt-4 text-sm text-ink-faint">Last updated: May 2026 · Subject to legal review</p>

        <div className="prose-legal mt-10">
          <p>
            Bethany Ventures (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates this website to
            describe strategic advisory and coordination services related to Web3 capital
            formation, OTC, liquidity, exchange strategy, and partnerships.
          </p>

          <h2>Not financial advice</h2>
          <p>
            Nothing on this website constitutes financial, investment, legal, tax, or accounting
            advice. You should consult qualified professionals before making decisions involving
            securities, tokens, or other financial instruments.
          </p>

          <h2>Not an offer</h2>
          <p>
            Nothing on this website constitutes an offer to sell or a solicitation of an offer to
            buy any security, token, digital asset, or investment product in any jurisdiction.
          </p>

          <h2>Advisory services only</h2>
          <p>
            Bethany Ventures provides strategic advisory and coordination services. Unless
            expressly stated in a separate written agreement, we are not:
          </p>
          <ul>
            <li>A venture capital fund or asset manager</li>
            <li>A broker dealer or placement agent</li>
            <li>A registered investment adviser</li>
            <li>An exchange, custodian, or money transmitter</li>
          </ul>

          <h2>No guarantees</h2>
          <p>
            References to past work, relationships, or market access experience do not guarantee
            future results, funding outcomes, listings, or transaction execution. Outcomes depend
            on market conditions, counterparty decisions, and client specific factors.
          </p>

          <h2>Third party names and logos</h2>
          <p>
            Names and logos of third parties displayed on this site are for informational context
            only and do not imply partnership, endorsement, or affiliation unless separately
            confirmed in writing.
          </p>

          <h2>Jurisdiction</h2>
          <p>
            Services may not be available in all jurisdictions. Users are responsible for
            compliance with applicable laws in their location. [Insert governing jurisdiction upon
            legal review.]
          </p>

          <h2>Contact</h2>
          <p>
            Questions:{' '}
            <a href="mailto:hello@bethanyventures.org" className="text-brand-muted hover:text-ink">
              hello@bethanyventures.org
            </a>
          </p>
        </div>
      </div>
    </article>
  )
}
