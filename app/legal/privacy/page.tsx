import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Bethany Ventures',
  description: 'Privacy policy for Bethany Ventures website visitors.',
}

export default function PrivacyPage() {
  return (
    <article className="section-padding">
      <div className="container-narrow max-w-3xl">
        <Link href="/" className="btn-ghost mb-8 inline-flex">
          Back to home
        </Link>
        <h1 className="heading-display">Privacy Policy</h1>
        <p className="mt-4 text-sm text-ink-faint">Last updated: May 2026 · Subject to legal review</p>

        <div className="prose-legal mt-10">
          <p>
            This Privacy Policy describes how Bethany Ventures collects, uses, and protects
            information when you visit our website or submit inquiries through our contact forms
            and scheduling tools.
          </p>

          <h2>Information we collect</h2>
          <ul>
            <li>Contact details you provide (name, email, company, message content)</li>
            <li>Technical data such as IP address, browser type, and device information</li>
            <li>Usage data through standard analytics tools, if enabled</li>
          </ul>

          <h2>How we use information</h2>
          <ul>
            <li>To respond to inquiries and schedule advisory conversations</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations where applicable</li>
          </ul>

          <h2>Third party services</h2>
          <p>
            We may use third-party tools for scheduling (e.g., Calendly), form intake (e.g.,
            Tally), and email delivery. Those providers process data under their own privacy
            policies.
          </p>

          <h2>Data retention</h2>
          <p>
            We retain inquiry data only as long as necessary for business purposes or as
            required by law. [Insert specific retention periods upon legal review.]
          </p>

          <h2>Your rights</h2>
          <p>
            Depending on your jurisdiction, you may have rights to access, correct, or delete
            personal data. Contact us to exercise these rights.
          </p>

          <h2>Contact</h2>
          <p>
            Privacy inquiries:{' '}
            <a href="mailto:hello@bethanyventures.org" className="text-brand-muted hover:text-ink">
              hello@bethanyventures.org
            </a>
          </p>
        </div>
      </div>
    </article>
  )
}
