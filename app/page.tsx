import HeroSection from '../components/HeroSection'
import StrategicRelationshipsSection from '../components/StrategicRelationshipsSection'
import ProcessSection from '../components/ProcessSection'
import Footer from '../components/Footer'

const insightsPosts = [
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

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Strategic relationships */}
      <StrategicRelationshipsSection />

      <section
        id="metrics"
        className="border-y border-gray-200 bg-background-light-gray px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2 space-y-3">
              <h2 className="text-sm font-semibold tracking-[0.16em] text-primary-dark-green/80 uppercase">
                Institutional execution, not hype
              </h2>
              <p className="text-xl font-semibold text-primary-dark-green sm:text-2xl">
                Liquidity and capital coordination for founders and investors who care about
                counterparty quality and execution risk.
              </p>
            </div>
            <div className="space-y-4 text-sm text-primary-dark-green">
              <div>
                <div className="text-xs font-medium text-primary-dark-green/80 uppercase">
                  Q2 2025 Liquidity
                </div>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-2xl font-semibold text-primary-dark-green">500+</span>
                  <span className="text-sm text-primary-dark-green/80">SOL</span>
                </div>
                <p className="text-xs text-primary-dark-green/80">
                  in OTC transactions involving high-volume counterparties.
                </p>
              </div>
            </div>
            <div className="space-y-4 text-sm text-primary-dark-green">
              <div>
                <div className="text-xs font-medium text-primary-dark-green/80 uppercase">
                  Execution & relationships
                </div>
                <ul className="mt-2 space-y-1 text-xs text-primary-dark-green/90">
                  <li>High-volume private transactions executed</li>
                  <li>Strategic investor and exchange relationships</li>
                  <li>Seamless OTC execution & capital coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-accent-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold text-primary-dark-green sm:text-4xl font-heading">
              Four Pillars of Liquidity &amp; Capital Support
            </h2>
            <p className="text-sm sm:text-base text-primary-dark-green/80">
              Bethany Ventures works across OTC, market makers, exchanges, and strategic
              investors to align incentives and execution.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-background-light-gray p-6">
              <h3 className="text-lg font-semibold text-primary-dark-green">
                OTC &amp; Private Rounds
              </h3>
              <p className="mt-3 text-sm text-primary-dark-green/90">
                Structured token allocations, strategic capital placement, and private investor
                syndication designed to respect liquidity, vesting, and downstream exchange plans.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-background-light-gray p-6">
              <h3 className="text-lg font-semibold text-primary-dark-green">
                Market Making &amp; Liquidity Strategy
              </h3>
              <p className="mt-3 text-sm text-primary-dark-green/90">
                Liquidity structuring, exchange readiness, and TGE support including MM
                coordination, depth planning, and order book expectations that are credible to
                institutions.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-background-light-gray p-6">
              <h3 className="text-lg font-semibold text-primary-dark-green">
                Exchange Access &amp; Listings
              </h3>
              <p className="mt-3 text-sm text-primary-dark-green/90">
                Strategic guidance and introductions to centralized exchanges with realistic
                timelines, information requirements, and listing pathways.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-background-light-gray p-6">
              <h3 className="text-lg font-semibold text-primary-dark-green">
                Strategic BD &amp; Growth
              </h3>
              <p className="mt-3 text-sm text-primary-dark-green/90">
                Partnerships, ecosystem positioning, and capital narrative refinement that speak
                to funds, treasuries, and sophisticated market participants—not retail hype.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="pathways"
        className="border-y border-gray-200 bg-accent-white px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl font-bold text-primary-dark-green sm:text-4xl font-heading">
              Two clear paths. One aligned execution partner.
            </h2>
            <p className="text-sm sm:text-base text-primary-dark-green/80">
              Whether you are a founder structuring a raise or an investor deploying into
              Web3, Bethany Ventures coordinates the right side of the table.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-background-light-gray p-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-primary-dark-green">
                  For Founders
                </h3>
                <p className="text-sm text-primary-dark-green/90">
                  Raise strategic capital. Structure liquidity. Access exchanges. Built for
                  teams who think in years, not weeks.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-primary-dark-green/90">
                  <li>- Capital stack and liquidity planning</li>
                  <li>- OTC counterparties and MM coordination</li>
                  <li>- Exchange introductions and listing support</li>
                </ul>
              </div>
              <div className="mt-6">
                <a
                  href="https://tally.so/r/b57eDg"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-accent-white px-4 py-2 text-xs font-semibold text-primary-dark-green shadow-sm transition hover:bg-background-light-gray"
                >
                  Apply for Funding →
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-accent-white p-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-primary-dark-green">
                  For Investors
                </h3>
                <p className="text-sm text-primary-dark-green/90">
                  Access curated Web3 deal flow with structured entry opportunities and
                  counterparties who are serious about liquidity, compliance, and governance.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-primary-dark-green/90">
                  <li>- Vetted teams and token structures</li>
                  <li>- Structured OTC entries and allocations</li>
                  <li>- Coordinated distribution and information flows</li>
                </ul>
              </div>
              <div className="mt-6">
                <a
                  href="https://tally.so/r/b57eDg"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-primary-dark-green/40 bg-accent-white px-4 py-2 text-xs font-semibold text-primary-dark-green transition hover:bg-background-light-gray"
                >
                  Join Our Network →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="bg-background-light-gray px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl font-bold text-primary-dark-green sm:text-4xl font-heading">
              Endorsed by founders and counterparties.
            </h2>
            <p className="text-sm sm:text-base text-primary-dark-green/80">
              Select endorsements from teams and counterparties Bethany Ventures has supported
              across growth, liquidity, and OTC execution.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-accent-white p-6">
              <div className="space-y-3">
                <div className="text-xs font-medium text-primary-dark-green/80">
                  Nyxia AI — Founder Endorsement
                </div>
                <p className="text-sm text-primary-dark-green/90">
                  “Bethany Ventures played a critical role in strengthening our community
                  operations, campaign execution, and overall visibility. Their strategic
                  involvement, operational discipline, and proactive communication significantly
                  enhanced our growth and user engagement. Their professionalism and reliability
                  make them a trusted partner in any Web3 expansion initiative.”
                </p>
              </div>
              <div className="mt-4 text-xs text-primary-dark-green/80">
                — Heiko Trenkle, Founder, Nyxia AI (Berlin)
              </div>
            </article>

            <article className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-accent-white p-6">
              <div className="space-y-3">
                <div className="text-xs font-medium text-primary-dark-green/80">
                  CoChilli — Project Partner
                </div>
                <p className="text-sm text-primary-dark-green/90">
                  “Working with Bethany Ventures has been seamless from day one. Their
                  responsiveness, strategic support, and ability to activate meaningful network
                  exposure brought tangible visibility and engagement to our project. We highly
                  recommend them as a reliable Web3 growth and advisory partner.”
                </p>
              </div>
              <div className="mt-4 text-xs text-primary-dark-green/80">— CoChilli Team</div>
            </article>

            <article className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-accent-white p-6">
              <div className="space-y-3">
                <div className="text-xs font-medium text-primary-dark-green/80">
                  OTC Counterparty Statement
                </div>
                <p className="text-sm text-primary-dark-green/90">
                  “In Q2 2025, Bethany Ventures successfully facilitated over 500 SOL in OTC
                  transactions involving $KOKOK. Their professionalism, reliability, and
                  seamless execution made them an ideal partner for high-volume trades. We
                  confidently recommend Bethany Ventures to anyone seeking a trusted and
                  efficient OTC trading partner.”
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <ProcessSection />

      <section
        id="insights"
        className="border-y border-gray-200 bg-accent-white px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-primary-dark-green sm:text-4xl font-heading">
                Insights for founders and allocators.
              </h2>
              <p className="max-w-2xl text-sm sm:text-base text-primary-dark-green/80">
                A working library on Web3 fundraising, OTC structures, exchange access, and
                liquidity strategy.
              </p>
            </div>
            <a
              href="/insights"
              className="text-xs font-semibold text-primary-dark-green hover:text-primary-muted-green"
            >
              View all insights →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {insightsPosts.map((post) => (
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
                <h3 className="mt-4 text-lg font-semibold text-primary-dark-green group-hover:text-primary-muted-green">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-primary-dark-green/80">{post.summary}</p>
                <a
                  href={`/insights/${post.slug}`}
                  className="mt-4 inline-flex text-xs font-semibold text-primary-dark-green hover:text-primary-muted-green"
                >
                  Read insight →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
