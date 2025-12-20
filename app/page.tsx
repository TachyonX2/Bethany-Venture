import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import PartnerLogos from '../components/PartnerLogos'
import ExchangePartnersSection from '../components/ExchangePartnersSection'
import WhatWeDoSection from '../components/WhatWeDoSection'
import ValuePropositionSection from '../components/ValuePropositionSection'
import ProcessSection from '../components/ProcessSection'
import SuccessStoriesSection from '../components/SuccessStoriesSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <PartnerLogos />
      <ExchangePartnersSection />
      <WhatWeDoSection />
      <ValuePropositionSection />
      <ProcessSection />
      <SuccessStoriesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
