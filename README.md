# Bethany Ventures — Marketing Website

Boutique Web3 capital and liquidity advisory site. Static export via Next.js App Router.

## Tech stack

- Next.js 14 (App Router, static export)
- TypeScript, Tailwind CSS, Framer Motion

## Project structure

```
app/
  page.tsx              # Home page (section composition)
  layout.tsx            # Fonts, navbar, footer
  globals.css           # Design tokens & utilities
  insights/             # Research index + articles
  legal/                # Disclaimer, privacy, terms
components/
  Navbar.tsx, Footer.tsx, HeroSection.tsx, …
  ui/SectionHeader.tsx
lib/
  site-data.ts          # Copy, URLs, services, team placeholders
public/                 # Logo, partner & asset images
```

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Static output in out/
```

## Content edits

Update shared copy and links in `lib/site-data.ts`. Article bodies live in `app/insights/[slug]/page.tsx`.

## Contact

- hello@bethanyventures.org
- +44 7411 948768
