'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { team } from '@/lib/site-data'

function TeamAvatar({ name, image }: { name: string; image?: string }) {
  if (image) {
    return (
      <div className="relative h-24 w-24 overflow-hidden rounded-full border border-brand-light/30">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top"
          sizes="96px"
        />
      </div>
    )
  }

  const initials = name
    .split(' ')
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase() || '?'

  return (
    <div className="flex h-24 w-24 items-center justify-center rounded-full border border-brand-light/30 bg-gradient-to-br from-brand/40 to-surface-overlay font-display text-2xl text-ink">
      {initials}
    </div>
  )
}

export default function TeamSection() {
  return (
    <section id="team" className="section-padding bg-surface-raised">
      <div className="container-narrow space-y-14">
        <SectionHeader
          label="Leadership"
          title="The team behind the mandate"
          description="Leadership across capital advisory, partnerships, and institutional relationship development."
        />

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-premium p-8"
            >
              <TeamAvatar name={member.name} image={member.image} />
              <h3 className="mt-6 font-display text-xl text-ink">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-brand-muted">{member.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">{member.bio}</p>
              {member.linkedin ? (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost mt-6 inline-flex items-center gap-2"
                  aria-label={`LinkedIn profile for ${member.name}`}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              ) : (
                <p className="mt-6 text-xs text-ink-faint">LinkedIn: add verified profile URL</p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
