'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { insightsComingSoon, insightsPosts } from '@/lib/site-data'

export default function InsightsPreviewSection() {
  const featured = insightsPosts.filter((p) => p.featured)

  return (
    <section id="insights" className="section-padding bg-surface">
      <div className="container-narrow space-y-14">
        <SectionHeader
          label="Insights"
          title="Research and operating notes for allocators"
          description="Editorial perspectives on fundraising, OTC, exchange access, and ecosystem strategy. Not investment advice."
          action={
            <Link href="/insights" className="btn-ghost shrink-0">
              View all insights
            </Link>
          }
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group card-premium relative overflow-hidden lg:row-span-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative p-8 lg:p-10">
                <div className="flex items-center gap-3 text-xs text-ink-faint">
                  <span className="rounded-full border border-brand-light/30 px-2.5 py-0.5 text-brand-muted">
                    {post.category}
                  </span>
                  <span>{post.readingTime}</span>
                  <span className="rounded-full bg-brand/30 px-2 py-0.5 text-[10px] uppercase tracking-wider text-brand-muted">
                    Featured
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl text-ink transition group-hover:text-brand-muted">
                  <Link href={`/insights/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="mt-4 body-muted">{post.summary}</p>
                <Link
                  href={`/insights/${post.slug}`}
                  className="btn-ghost mt-6 inline-flex"
                >
                  Read article
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {insightsComingSoon.slice(0, 3).map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-dashed border-white/10 p-5"
            >
              <span className="text-[10px] uppercase tracking-wider text-ink-faint">
                {item.category} · Coming soon
              </span>
              <p className="mt-2 text-sm text-ink-muted">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
