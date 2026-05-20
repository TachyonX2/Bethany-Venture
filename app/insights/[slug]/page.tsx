import type { Metadata } from 'next'
import Link from 'next/link'
import { insightsPosts } from '@/lib/site-data'

const posts = insightsPosts.map(({ slug, title, summary }) => ({ slug, title, summary }))

type Params = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: Params): Metadata {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: 'Insights | Bethany Ventures',
    }
  }

  return {
    title: `${post.title} | Bethany Ventures`,
    description: post.summary,
  }
}

export default function InsightPostPage({ params }: Params) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    return (
      <div className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h1 className="heading-section">Insight not found</h1>
          <p className="mt-3 body-muted">
            This insight is not available. Please return to the insights index.
          </p>
          <Link href="/insights" className="btn-ghost mt-6 inline-flex">
            All insights
          </Link>
        </div>
      </div>
    )
  }

  if (post.slug === 'state-of-web3-fundraising-2026') {
    return (
      <div className="section-padding">
        <article className="container-narrow mx-auto max-w-3xl space-y-6">
          <Link href="/insights" className="btn-ghost mb-6 inline-flex">
            All insights
          </Link>
          <header className="space-y-3 border-b border-white/[0.08] pb-8">
            <p className="section-label">Fundraising · 7 min read</p>
            <h1 className="heading-display">
              The State of Web3 Fundraising in 2026
            </h1>
            <p className="body-muted">
              Web3 fundraising in 2026 is defined by maturity: structure over speculation, proof
              over potential, and disciplined capital formation.
            </p>
          </header>

          <div className="prose-legal space-y-4 pt-8">
            <p>
              Web3 fundraising in 2026 no longer carries the noise and impulsiveness that once
              defined it in recent years. The market has gone through enough cycles of
              excitement and correction to force a level of maturity that simply didn’t exist a
              few years ago.
            </p>
            <p>
              What we are seeing now is not the disappearance of capital, but the evolution of
              it. Money is still flowing, but it is moving with intention, with memory, and
              with a clear preference for structure over speculation.
            </p>
            <p>
              There was a time when a strong narrative, a well designed token logo, and a
              promise of future utility were enough to unlock millions in funding. That time
              has passed. Investors today are far less interested in what a project could
              become and far more focused on what it already is. They want to see working
              products, engaged users, and a roadmap that is not just ambitious but executable.
              The conversation has shifted from potential to proof, and that shift has quietly
              redefined what it means to be fundable in Web3.
            </p>
            <p>
              One of the most noticeable changes is how seriously teams now treat their
              treasury. In previous years, treasury management was often an afterthought,
              projects would raise funds and hold a large portion in their native token or
              leave assets exposed to market volatility. Today, treasury is strategy. Founders
              are thinking in terms of runway, risk management, and sustainability. They are
              diversifying assets, planning for downturns, and ensuring that their project can
              survive even when the market turns against them. This level of discipline is not
              just impressive; it is necessary.
            </p>
            <p>
              Token issuance has also become far more deliberate. The era of aggressive supply
              releases and poorly structured vesting schedules has left behind too many
              cautionary tales. In response, teams are now designing token economies with
              precision. Circulating supply at launch is carefully controlled, unlock schedules
              are stretched and aligned with growth milestones, and distribution is approached
              with a long term view. The goal is no longer to create immediate hype, but to
              build a market structure that can sustain itself over time.
            </p>
            <p>
              Another subtle but powerful shift lies in how founders choose their investors.
              Capital is no longer treated as a commodity that can be sourced from anywhere.
              Instead, it is seen as a partnership that shapes the trajectory of the project.
              Teams are asking harder questions about who they bring onto their cap table. They
              are looking for investors who can contribute beyond funding, those who can open
              doors to exchanges, provide strategic guidance, and support the project through
              multiple phases of growth. Alignment, in this context, has become more valuable
              than valuation.
            </p>
            <p>
              What makes 2026 particularly interesting is that discipline is no longer
              optional; it is expected. The market now has a memory, and that memory influences
              behavior on both sides of the table. Founders are more careful because they have
              seen what poor decisions can lead to, and investors are more selective because
              they have experienced the cost of misplaced trust. This has created an
              environment where quality naturally rises to the top, not for the sake of
              anything, but because it is stronger.
            </p>
            <p>
              The story has changed drastically, and we don&apos;t know if “fortunate” is the
              appropriate description, but what we sure know is that fundraising in Web3 today
              is less about raising the most capital and more about raising it the right way.
            </p>
          </div>

          <p className="pt-6 text-xs text-ink-faint">
            Bethany Ventures does not provide financial advice.
          </p>
        </article>
      </div>
    )
  }

  if (post.slug === 'otc-vs-public-raises-allocation-models') {
    return (
      <div className="section-padding">
        <article className="container-narrow mx-auto max-w-3xl space-y-6">
          <Link href="/insights" className="btn-ghost mb-6 inline-flex">
            All insights
          </Link>
          <header className="space-y-3 border-b border-white/[0.08] pb-8">
            <p className="section-label">Capital Structure · 6 min read</p>
            <h1 className="heading-display">
              OTC vs Public Raises: Why Strategic OTC Allocation Is Winning in 2026
            </h1>
            <p className="body-muted">
              In 2026, projects increasingly optimize for control and market formation, not
              visibility. OTC structures offer intentionality that public raises rarely do.
            </p>
          </header>

          <div className="prose-legal space-y-4 pt-8">
            <p>
              It&apos;s been a year of us venturing into the venture market, and one thing we have
              realized is that the conversation around fundraising in Web3 has become less
              about visibility and more about control. Projects are beginning to realize that
              how capital enters the ecosystem matters just as much as how much of it is raised.
              Within this shift, OTC raises have quietly emerged as the more strategic path.
              Amidst several other paths, OTC offers something the public markets rarely do,
              and that’s “intentionality”.
            </p>
            <p>
              At its core, an OTC raise allows a project to choose its early believers. This
              is not a small advantage. In public raises, participation is open, often driven
              by short term excitement and opportunistic behavior. In contrast, OTC deals are
              negotiated, structured, and selective. Founders have the ability to align with
              participants who understand the long term vision, who are willing to commit under
              defined terms, and who are less likely to react impulsively when market conditions
              change. This level of control creates a foundation that is far more stable than
              what public participation typically offers.
            </p>
            <p>
              There is also a deeper strategic layer to OTC that many overlook. The early stage
              of any token is its most fragile phase. Price discovery is highly sensitive,
              liquidity is still forming, and perception can shift rapidly. By prioritizing OTC
              allocations, teams can reduce the chaos that often comes with open market
              speculation. Instead of exposing the token to unpredictable demand and immediate
              volatility, they are able to introduce supply in a measured way, ensuring that
              the market develops with some degree of structure.
            </p>
            <p>
              Another important advantage lies in relationship building. OTC participants are
              not just buyers; they are often partners. These are funds, market participants,
              and ecosystem players who bring more than capital to the table. They provide
              strategic guidance, access to liquidity channels, and in many cases, long term
              support that extends beyond the initial raise. This transforms fundraising from a
              transactional event into a collaborative process, where both sides are invested
              in the success of the project over time.
            </p>
            <p>
              Public raises, while valuable for visibility, often come with a hidden cost. The
              openness that makes them attractive also introduces inconsistency. Participants
              enter at scale, but without uniform expectations. Some are there for the long
              term, while many are positioned for immediate exits. This creates a fragmented
              holder base that can become difficult to manage, especially when the token begins
              trading. The result is often early volatility that is not tied to fundamentals,
              but to behavior.
            </p>
            <p>
              OTC, writing as a venture who has experienced being involved in ones that were
              structured properly, mitigates much of this risk. Through vesting schedules,
              negotiated terms, and clear communication, projects can shape the behavior of
              their early token holders. This does not eliminate sell pressure entirely, but it
              makes it more predictable and easier to manage. In a market where perception is
              everything, predictability becomes a powerful advantage.
            </p>
            <p>
              What distinguishes the most successful projects today is their ability to think
              beyond the raise itself. They understand that fundraising is not just about
              capital inflow, but about market formation. By leaning into OTC, they are
              effectively designing the early conditions under which their token will exist.
              They are choosing stability over noise, alignment over access, and long term
              positioning over short term attention.
            </p>
            <p>
              This is not to suggest that public participation has no role to play. It still
              serves as a powerful tool for community building and narrative expansion. However,
              in the current landscape, it works best as a complement, not the foundation. The
              core strength of a project’s capital structure is increasingly being built behind
              closed doors, where strategy can be executed without the distortion of hype.
            </p>
            <p>
              The rising preference for OTC in 2026 is strongly reflecting this broader
              evolution in Web3 thinking. We have seen the industry moving away from
              exposure driven decisions and toward structure driven ones. Soon, we will
              experience an alarming number of projects that would no longer be concerned about
              how loud they can be on CT, but how well they can build.
            </p>
          </div>

          <p className="pt-6 text-xs text-ink-faint">
            Bethany Ventures does not provide financial advice.
          </p>
        </article>
      </div>
    )
  }

  return null
}

