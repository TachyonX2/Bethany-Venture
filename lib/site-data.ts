export const CALENDLY_URL = 'https://calendly.com/hello-bethanyventures/30min'
export const INTAKE_URL = 'https://tally.so/r/b57eDg'
export const EMAIL = 'hello@bethanyventures.org'
export const PHONE = '+44 7411 948768'

export const services = [
  {
    id: 'capital-advisory',
    title: 'Capital Advisory',
    forWhom: 'Founders preparing private rounds, strategic allocations, or capital planning before TGE.',
    outcomes: [
      'Clear raise narrative aligned with tokenomics and treasury',
      'Investor targeting by stage, thesis, and check size',
      'Structured materials for sophisticated allocators',
    ],
    engagement: 'Mandate based advisory from diligence through close coordination.',
  },
  {
    id: 'otc-liquidity',
    title: 'OTC & Liquidity Coordination',
    forWhom: 'Teams balancing private distribution, vesting, and market formation.',
    outcomes: [
      'Counterparty introductions and transaction coordination',
      'Allocation design that respects liquidity constraints',
      'Execution support with institutional counterparties',
    ],
    engagement: 'Engagement scoped per transaction or ongoing liquidity mandate.',
  },
  {
    id: 'exchange-strategy',
    title: 'Exchange Strategy',
    forWhom: 'Projects evaluating CEX pathways, timelines, and listing readiness.',
    outcomes: [
      'Realistic listing roadmap and information requirements',
      'Introductions where relationships exist; no guaranteed listings',
      'Pre listing narrative and disclosure alignment',
    ],
    engagement: 'Advisory and coordination. Bethany Ventures is not an exchange or broker.',
  },
  {
    id: 'growth-partnerships',
    title: 'Growth & Partnerships',
    forWhom: 'Ecosystems and protocols seeking distribution, BD, and partner activation.',
    outcomes: [
      'Partnership pipeline development and warm introductions',
      'Campaign and community coordination support',
      'Positioning for ecosystem grants and strategic alliances',
    ],
    engagement: 'Project based or retainer advisory aligned to GTM milestones.',
  },
  {
    id: 'gtm',
    title: 'Go to Market Support',
    forWhom: 'Teams launching tokens, products, or major ecosystem initiatives.',
    outcomes: [
      'Launch sequencing across investors, community, and markets',
      'Messaging discipline for institutional audiences',
      'Coordination across advisors, MMs, and distribution partners',
    ],
    engagement: 'Defined sprint or ongoing advisory through launch window.',
  },
  {
    id: 'investor-intros',
    title: 'Investor Introductions',
    forWhom: 'Founders and investors seeking curated, thesis aligned conversations.',
    outcomes: [
      'Qualified introductions to funds and strategic allocators',
      'Structured OTC and allocation opportunities for investors',
      'Ongoing relationship management after introduction',
    ],
    engagement: 'Introduction and coordination services; not a placement agent or broker dealer.',
  },
]

export const credibilityPillars = [
  {
    label: 'Mandate focus',
    title: 'Boutique by design',
    description:
      'We take selective mandates across fundraising, OTC, and market access, prioritizing execution quality over volume.',
  },
  {
    label: 'Operating model',
    title: 'Advisory, not a fund',
    description:
      'Bethany Ventures provides strategic advisory and coordination. We do not manage external capital or offer investment products.',
  },
  {
    label: 'Coverage',
    title: 'Web3 native execution',
    description:
      'Experience across token launches, private allocations, exchange pathways, and ecosystem partnerships on major networks.',
  },
  {
    label: 'Counterparties',
    title: 'Institutional relationships',
    description:
      'Coordination with funds, OTC desks, market makers, and exchanges where existing relationships support the mandate.',
  },
]

export const marketAccessCategories = [
  'Tier 1 and regional centralized exchanges',
  'OTC desks and high volume private counterparties',
  'Market makers and liquidity providers',
  'Web3 native funds and family offices',
  'Ecosystem foundations and grant programs',
]

export const ecosystemVerticals = [
  'DeFi and structured products',
  'Infrastructure and tooling',
  'AI and crypto applications',
  'Gaming and consumer Web3',
  'RWA and institutional pilots',
  'Solana, Ethereum, and emerging L1/L2 ecosystems',
]

export const investorNetwork = [
  { name: 'Msquared', logo: '/partner logos/msquared.jpg' },
  { name: 'Amigo Ventures', logo: '/partner logos/amigo.jpg' },
  { name: 'AcquireFi', logo: '/partner logos/aquireFi.jpg' },
  { name: 'Anti Capital', logo: '/partner logos/anti capital.jpg' },
  { name: 'Enflux Capital', logo: '/partner logos/enflux.jpg' },
  { name: 'Cequire Capital', logo: '/partner logos/cequire.jpg' },
  { name: 'Cybertim', logo: '/partner logos/cybertim.jpg' },
  { name: 'HVS Ventures', logo: '/partner logos/HVS.jpg' },
  { name: 'MAGNUS', logo: '/partner logos/magnus.jpg' },
  { name: 'Web3 Ventures', logo: '/partner logos/web3 ventures.jpg' },
  { name: 'Nimbus Capital', logo: '/partner logos/nimbus.jpg' },
]

export const caseStudies = [
  {
    category: 'OTC & Distribution',
    title: 'Before TGE strategic allocation',
    summary:
      'Coordinated private allocation structure and counterparty introductions for an infrastructure project ahead of public market formation.',
    highlights: ['Allocation design', 'OTC counterparty coordination', 'Vesting alignment'],
    status: 'Anonymized (client NDA)',
  },
  {
    category: 'Growth & Ecosystem',
    title: 'Ecosystem partnership activation',
    summary:
      'Supported community operations, campaign execution, and partner visibility for an AI native Web3 team expanding into new markets.',
    highlights: ['BD introductions', 'Campaign coordination', 'Narrative refinement'],
    status: 'Nyxia AI (public endorsement)',
  },
  {
    category: 'Capital Advisory',
    title: 'Raise preparation and investor alignment',
    summary:
      'Structured fundraising materials and investor targeting for an early stage protocol seeking strategic rather than hype driven capital.',
    highlights: ['Investor materials', 'Thesis aligned outreach', 'Process management'],
    status: 'Anonymized (client NDA)',
  },
]

export const team: Array<{
  name: string
  role: string
  bio: string
  linkedin?: string
  image?: string
}> = [
  {
    name: 'Akolawole Christain',
    role: 'Founder, Bethany Ventures',
    bio: 'Leads firm strategy, capital advisory mandates, and institutional relationships across fundraising, OTC coordination, and exchange strategy.',
    linkedin: 'https://www.linkedin.com/in/akolawole-christian-8b2282204',
    image: '/team/akolawole-christian.png',
  },
  {
    name: 'Musa Faruq Adeola',
    role: 'Team Lead and Business Development Manager, Bethany Ventures',
    bio: 'Drives partnership development, client engagement, and business development across ecosystems, growth mandates, and founder facing advisory work.',
    linkedin: 'https://www.linkedin.com/in/musa-faruq-adeola-4b2282204',
    image: '/team/musa-faruq-adeola.jpg',
  },
]

export const testimonials = [
  {
    source: 'Nyxia AI',
    type: 'Founder endorsement',
    quote:
      'Bethany Ventures played a critical role in strengthening our community operations, campaign execution, and overall visibility. Their strategic involvement, operational discipline, and proactive communication significantly enhanced our growth and user engagement.',
    attribution: 'Heiko Trenkle, Founder, Nyxia AI (Berlin)',
  },
  {
    source: 'CoChilli',
    type: 'Project partner',
    quote:
      'Working with Bethany Ventures has been seamless from day one. Their responsiveness, strategic support, and ability to activate meaningful network exposure brought tangible visibility and engagement to our project.',
    attribution: 'CoChilli Team',
  },
]

export const insightsPosts = [
  {
    slug: 'state-of-web3-fundraising-2026',
    title: 'The State of Web3 Fundraising in 2026',
    category: 'Fundraising',
    readingTime: '7 min read',
    summary:
      'Fundraising has shifted from narrative to proof: product, users, treasury discipline, and investor alignment now define what is fundable.',
    featured: true,
  },
  {
    slug: 'otc-vs-public-raises-allocation-models',
    title: 'OTC vs Public Raises: Strategic Allocation Models',
    category: 'Capital Structure',
    readingTime: '6 min read',
    summary:
      'Why OTC allocations are increasingly preferred for control, stability, partner quality, and predictable market formation.',
    featured: true,
  },
]

export const insightsComingSoon = [
  {
    title: 'Founder Playbook: Exchange Readiness Without Overpromising',
    category: 'Exchange Strategy',
  },
  {
    title: 'OTC Counterparty Diligence for Founders',
    category: 'OTC Insights',
  },
  {
    title: 'Ecosystem Analysis: Liquidity Formation After TGE',
    category: 'Market Commentary',
  },
]
