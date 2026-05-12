'use client'

import {
  Nav,
  Onboarding,
  HeroSection,
  ProblemaSection,
  ProgramaSection,
  ResultadosSection,
  PlanesSection,
  CTASection,
  Footer,
} from '@/components'

export default function Home() {
  return (
    <>
      <Nav />
      <Onboarding />
      <HeroSection />
      <ProblemaSection />
      <ProgramaSection />
      <ResultadosSection />
      <PlanesSection />
      <CTASection />
      <Footer />
    </>
  )
}
