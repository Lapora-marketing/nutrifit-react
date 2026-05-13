'use client'

import { useState, useEffect } from 'react'
import {
  Nav,
  Onboarding,
  FormularioOnboarding,
  HeroSection,
  ProblemaSection,
  ProgramaSection,
  ResultadosSection,
  PlanesSection,
  CTASection,
  Footer,
} from '@/components'
import { useUser } from '@/components'
import { type UserPreferences } from '@/lib/userPreferences'

export default function Home() {
  const { userPreferences, setUserPreferences } = useUser()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // No renderizar nada hasta que el componente esté montado (hidratación)
  if (!mounted) {
    return null
  }

  // Si no tiene preferencias guardadas, mostrar el formulario
  if (!userPreferences) {
    return (
      <FormularioOnboarding
        onComplete={(prefs: UserPreferences) => {
          setUserPreferences(prefs)
        }}
      />
    )
  }

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
