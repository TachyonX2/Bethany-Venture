import Link from 'next/link'
import { insightsComingSoon, insightsPosts } from '@/lib/site-data'

export default function InsightsIndexPage() {
  return (
    <div className="section-padding">
      <div className="container-narrow space-y-16">
        <header className="max-w-3xl space-y-4 border-b border-white/[0.08] pb-12">
          <p className="section-label">Insights</p>
          <h1 className="heading-display">Research & operating notes</h1>
          <p className="body-muted">
            Editorial perspectives on Web3 capital formation, OTC structures, exchange access,
            and ecosystem strategy. Not investment advice.
          </p>
        </header>

        <div className="space-y-6">
          <h2 className="font-display text-xl text-ink">Published</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {insightsPosts.map((post) => (
              <article key={post.slug} className="card-premium group p-8">
                <div className="flex items-center gap-3 text-xs text-ink-faint">
                  <span className="rounded-full border border-brand-light/30 px-2.5 py-0.5 text-brand-muted">
                    {post.category}
                  </span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-4 font-display text-xl text-ink group-hover:text-brand-muted">
                  <Link href={`/insights/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-3 body-muted">{post.summary}</p>
                <Link href={`/insights/${post.slug}`} className="btn-ghost mt-5 inline-flex">
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="font-display text-xl text-ink">Coming soon</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {insightsComingSoon.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-dashed border-white/10 bg-surface-raised/50 p-6"
              >
                <span className="text-[10px] uppercase tracking-wider text-ink-faint">
                  {item.category}
                </span>
                <p className="mt-2 text-sm text-ink-muted">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <Link href="/" className="btn-ghost inline-flex">
          Back to home
        </Link>
      </div>
    </div>
  )
}
