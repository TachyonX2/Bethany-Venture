import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Bethany Ventures',
  description: 'Terms of service for use of the Bethany Ventures website.',
}

export default function TermsPage() {
  return (
    <article className="section-padding">
      <div className="container-narrow max-w-3xl">
        <Link href="/" className="btn-ghost mb-8 inline-flex">
          Back to home
        </Link>
        <h1 className="heading-display">Terms of Service</h1>
        <p className="mt-4 text-sm text-ink-faint">Last updated: May 2026 · Subject to legal review</p>

        <div className="prose-legal mt-10">
          <p>
            By accessing this website, you agree to these Terms of Service. If you do not agree,
            please do not use the site.
          </p>

          <h2>Use of the website</h2>
          <p>
            Content is provided for general informational purposes about Bethany Ventures
            advisory services. You may not reproduce, scrape, or redistribute content without
            prior written consent.
          </p>

          <h2>Advisory engagements</h2>
          <p>
            Any advisory engagement requires a separate written agreement defining scope, fees,
            confidentiality, and limitations of liability. Website content does not create a
            client relationship.
          </p>

          <h2>Intellectual property</h2>
          <p>
            All website content, branding, and materials are owned by Bethany Ventures or its
            licensors unless otherwise noted.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, Bethany Ventures disclaims liability for
            damages arising from use of this website or reliance on its content. [Insert
            jurisdiction specific limitations upon legal review.]
          </p>

          <h2>Changes</h2>
          <p>
            We may update these terms at any time. Continued use of the site after changes
            constitutes acceptance of the revised terms.
          </p>

          <h2>Contact</h2>
          <p>
            <a href="mailto:hello@bethanyventures.org" className="text-brand-muted hover:text-ink">
              hello@bethanyventures.org
            </a>
          </p>
        </div>
      </div>
    </article>
  )
}
