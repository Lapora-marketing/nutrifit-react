'use client'

import { useState, useEffect } from 'react'
import {
  Nav,
  FormularioOnboarding,
  HeroSection,
  EspejoSection,
  ProgramaSection,
  AboutSection,
  ExamenesSection,
  AppPreviewSection,
  ResultadosSection,
  PlanesSection,
  PagoSection,
  CTASection,
  Footer,
  Reveal,
  UrgencyBar,
  WhatsAppButton,
  ScrollProgress,
  TrustBadges,
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
      <ScrollProgress />
      <UrgencyBar />
      <Nav />
      <main>
        {/* 1. Hook emocional */}
        <HeroSection />

        {/* 1.5 Social proof — credenciales médicas */}
        <Reveal>
          <TrustBadges columns={2} />
        </Reveal>

        {/* 2. DOLORES PRIMERO — espejo emocional */}
        <Reveal>
          <EspejoSection />
        </Reveal>

        {/* 3. La solución (método) */}
        <Reveal>
          <ProgramaSection />
        </Reveal>

        {/* 4. Confianza (médico) */}
        <Reveal>
          <AboutSection />
        </Reveal>

        {/* 5. Personalización médica (exámenes) */}
        <Reveal>
          <ExamenesSection />
        </Reveal>

        {/* 6. Compañero diario (app) */}
        <Reveal>
          <AppPreviewSection />
        </Reveal>

        {/* 7. Prueba social (resultados) */}
        <Reveal>
          <ResultadosSection />
        </Reveal>

        {/* 8. La oferta */}
        <Reveal>
          <PlanesSection />
        </Reveal>

        {/* 9. Pago fácil — fricción cero */}
        <Reveal>
          <PagoSection />
        </Reveal>

        {/* 10. CTA final */}
        <Reveal>
          <CTASection />
        </Reveal>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
