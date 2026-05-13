'use client'

import { useState, useEffect } from 'react'
import {
  Nav,
  FormularioOnboarding,
  HeroSection,
  ProblemaSection,
  ProgramaSection,
  ResultadosSection,
  PlanesSection,
  CTASection,
  Footer,
  Reveal,
  TrustBar,
  UrgencyBar,
  WhatsAppButton,
  useUser,
} from '@/components'
import { type UserPreferences } from '@/lib/userPreferences'

export default function Home() {
  const { userPreferences, setUserPreferences } = useUser()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (!userPreferences) {
    return (
      <FormularioOnboarding
        onComplete={(prefs: UserPreferences) => setUserPreferences(prefs)}
      />
    )
  }

  return (
    <>
      <UrgencyBar />
      <Nav />
      <main>
        <HeroSection />
        <TrustBar />
        <Reveal>
          <ProblemaSection />
        </Reveal>
        <Reveal>
          <ProgramaSection />
        </Reveal>
        <Reveal>
          <ResultadosSection />
        </Reveal>
        <Reveal>
          <PlanesSection />
        </Reveal>
        <Reveal>
          <CTASection />
        </Reveal>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
