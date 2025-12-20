# Bethany Ventures - Marketing Website

A static, production-ready marketing website for Bethany Ventures — a network of elite venture scouts helping high-potential Web3 and emerging-tech projects secure equity or OTC funding from pre-seed to Series B+.

## 🚀 Features

- **Static Site Generation (SSG)** - Optimized for performance and SEO
- **Modern Design** - Clean, professional design with deep navy/charcoal backgrounds and gold accents
- **Fully Responsive** - Mobile-first design that works on all devices
- **Smooth Animations** - Subtle Framer Motion animations for enhanced UX
- **Contact Form** - Working contact form with validation
- **SEO Optimized** - Proper meta tags and structured content

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Static export ready

## 📁 Project Structure

```
bethany-ventures/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── HeroSection.tsx      # Hero section with animated background
│   ├── AboutSection.tsx     # About us section
│   ├── WhatWeDoSection.tsx  # Services overview
│   ├── ValuePropositionSection.tsx # For Founders/Investors
│   ├── ProcessSection.tsx   # Step-by-step process
│   ├── SuccessStoriesSection.tsx # Case studies
│   ├── ContactSection.tsx   # Contact form
│   └── Footer.tsx           # Footer with links and info
├── public/                  # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # TailwindCSS configuration
├── next.config.js          # Next.js configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Design System

### Colors
- **Primary Navy**: `#0f172a`
- **Charcoal**: `#1e293b`
- **Gold**: `#f59e0b`
- **Gold Light**: `#fbbf24`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, large sans-serif
- **Body**: Clean, readable text

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bethany-ventures
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

This will generate a static export in the `out` directory that can be deployed to any static hosting service.

## 📝 Content Sections

1. **Hero Section** - Bold headline, subtext, and CTA button with animated background
2. **About Us** - Mission statement with illustration
3. **What We Do** - Three service columns (Venture Scouting, Strategic Matchmaking, Funding Advisory)
4. **Value Proposition** - Split layout for Founders and Investors
5. **Our Process** - Four-step process diagram
6. **Success Stories** - Three case study cards
7. **Contact Form** - Name, email, project stage, and message
8. **Footer** - Logo, navigation, and social links

## 🎯 Key Features

- **Static Generation**: All pages are pre-rendered for optimal performance
- **Mobile-First**: Responsive design that works on all screen sizes
- **Accessibility**: Semantic HTML and proper ARIA labels
- **SEO**: Meta tags, structured data, and optimized content
- **Performance**: Optimized images, minimal JavaScript, and fast loading times

## 🔧 Customization

### Adding New Sections
1. Create a new component in the `components/` directory
2. Import and add it to `app/page.tsx`
3. Follow the existing pattern for animations and styling

### Modifying Colors
Update the color palette in `tailwind.config.js` under the `colors` section.

### Updating Content
Edit the content directly in the component files. All text content is easily accessible and modifiable.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

For questions or support, please contact:
- Email: hello@bethanyventures.com
- Phone: +1 (555) 123-4567
