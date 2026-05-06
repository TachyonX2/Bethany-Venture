import Link from 'next/link'

const posts = [
  {
    slug: 'state-of-web3-fundraising-2026',
    title: 'The State of Web3 Fundraising in 2026',
    category: 'Fundraising',
    readingTime: '7 min read',
    summary:
      'Fundraising has shifted from narrative to proof—product, users, treasury discipline, and investor alignment now define what is fundable.',
  },
  {
    slug: 'otc-vs-public-raises-allocation-models',
    title: 'OTC vs Public Raises: Strategic Allocation Models',
    category: 'Capital Structure',
    readingTime: '6 min read',
    summary:
      'Why OTC allocations are increasingly preferred for control, stability, partner quality, and predictable market formation.',
  },
]

export default function InsightsIndexPage() {
  return (
    <div className="bg-accent-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold tracking-[0.18em] text-primary-dark-green/80 uppercase">
            Insights
          </p>
          <h1 className="text-3xl font-bold text-primary-dark-green sm:text-4xl font-heading">
            Bethany Ventures research and operating notes.
          </h1>
          <p className="text-sm sm:text-base text-primary-dark-green/80">
            A working collection of perspectives on Web3 capital formation, liquidity, and
            exchange access. Not investment advice.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-gray-200 bg-background-light-gray p-6 transition hover:bg-accent-white"
            >
              <div className="flex items-center gap-3 text-xs text-primary-dark-green/70">
                <span className="rounded-full border border-primary-dark-green/30 px-2 py-0.5">
                  {post.category}
                </span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-primary-dark-green group-hover:text-primary-muted-green">
                <Link href={`/insights/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="mt-3 text-sm text-primary-dark-green/80">{post.summary}</p>
              <Link
                href={`/insights/${post.slug}`}
                className="mt-4 inline-flex text-xs font-semibold text-primary-dark-green hover:text-primary-muted-green"
              >
                Read insight →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

