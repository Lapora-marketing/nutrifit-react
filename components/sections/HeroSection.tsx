'use client'

import { useProfile } from '@/components/ProfileContext'
import { useUser } from '@/components/UserContext'
import { Button, Stat } from '@/components/atoms'

export function HeroSection() {
  const { currentProfile } = useProfile()
  const { userPreferences } = useUser()

  if (!currentProfile) return null

  const scrollToPlanes = () => {
    document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToPrograma = () => {
    document.getElementById('programa')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="min-h-[90vh] flex items-center justify-center relative overflow-hidden pt-24 pb-16 px-5 sm:px-8"
      aria-label="Hero principal"
    >
      {/* Background gradients */}
      <div
        className="absolute inset-0 opacity-20 transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse at 60% 30%, rgba(${currentProfile.colorRgb}, 0.18) 0%, transparent 60%),
                       radial-gradient(ellipse at 20% 80%, rgba(${currentProfile.colorRgb}, 0.08) 0%, transparent 50%)`,
        }}
      />

      {/* Floating orb */}
      <div
        className="absolute top-1/3 right-0 w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl opacity-10 pointer-events-none animate-pulse-slow"
        style={{ background: `rgba(${currentProfile.colorRgb}, 1)` }}
      />

      <div className="relative z-10 max-w-3xl w-full text-center mx-auto">

        {/* ⭐ Stars + social proof — PRIMERA VISTA */}
        <div className="animate-fadeInDown mb-5 flex flex-col items-center gap-2">
          <div className="flex items-center gap-1 justify-center star-rating">
            {['★', '★', '★', '★', '★'].map((s, i) => (
              <span key={i} className="star text-yellow-400 text-xl md:text-2xl">{s}</span>
            ))}
          </div>
          <p className="text-sm text-[rgba(255,255,255,0.55)]">
            <span className="text-white font-bold">4.9/5</span> · Más de{' '}
            <span className="text-white font-bold">2,847</span> transformaciones reales
          </p>
        </div>

        {/* Badge activo */}
        <div
          className="inline-flex items-center gap-2.5 mb-6 px-5 py-2 rounded-full animate-fadeIn"
          style={{
            background: `rgba(${currentProfile.colorRgb}, 0.12)`,
            border: `1px solid rgba(${currentProfile.colorRgb}, 0.3)`,
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: currentProfile.color }}
          />
          <span className="text-xs md:text-sm font-bold text-[rgba(255,255,255,0.9)]">
            {currentProfile.heroBadge}
          </span>
        </div>

        {/* H1 emocional personalizado */}
        <h1 className="hero-h1 text-4xl md:text-6xl font-black mb-4 leading-tight animate-fadeInUp">
          {userPreferences?.nombre
            ? (
              <>
                <span style={{ color: currentProfile.color }}>{userPreferences.nombre}</span>
                {', '}
              </>
            )
            : null}
          {currentProfile.heroH1.split('<span>').map((part, i) => {
            if (i === 0) return <span key={i}>{part}</span>
            const [spanContent, rest] = part.split('</span>')
            return (
              <span key={i}>
                <span style={{ color: currentProfile.color }}>{spanContent}</span>
                {rest}
              </span>
            )
          })}
        </h1>

        {/* Subtitle emocional */}
        <p className="text-base md:text-lg text-[rgba(255,255,255,0.65)] max-w-2xl mx-auto mb-5 leading-relaxed animate-fadeInUp delay-100">
          {currentProfile.heroSub}
        </p>

        {/* 🎯 CTA Diagnóstico Personalizado — acción principal */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2.5 rounded-xl text-sm font-medium animate-fadeInUp delay-200 cursor-pointer hover-lift"
          style={{
            background: `rgba(${currentProfile.colorRgb}, 0.08)`,
            border: `1px solid rgba(${currentProfile.colorRgb}, 0.25)`,
            color: currentProfile.color,
          }}
          onClick={scrollToPrograma}
        >
          <span>🔬</span>
          <span>
            {userPreferences
              ? `Tu Dx personalizado listo — objetivo: ${
                  userPreferences.objetivo === 'bajar-peso' ? 'Bajar de peso' :
                  userPreferences.objetivo === 'ganar-masa' ? 'Ganar masa muscular' :
                  userPreferences.objetivo === 'mejorar-salud' ? 'Mejorar tu salud' : 'Tu meta'
                }`
              : 'Descubre tu diagnóstico personalizado →'
            }
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12 animate-fadeInUp delay-300">
          <button
            onClick={scrollToPlanes}
            className="btn-ripple inline-flex items-center justify-center gap-2 px-8 py-4 text-base md:text-lg font-bold text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: `linear-gradient(135deg, rgba(${currentProfile.colorRgb}, 1), rgba(${currentProfile.colorRgb}, 0.75))`,
              boxShadow: `0 4px 24px rgba(${currentProfile.colorRgb}, 0.35)`,
            }}
            aria-label="Quiero mi programa personalizado"
          >
            Quiero mi programa →
          </button>
          <button
            onClick={scrollToPrograma}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base md:text-lg font-bold text-white rounded-xl border transition-all duration-300 hover:scale-105"
            style={{
              border: `1.5px solid rgba(${currentProfile.colorRgb}, 0.4)`,
              background: `rgba(${currentProfile.colorRgb}, 0.06)`,
            }}
            aria-label="Ver cómo funciona el programa"
          >
            Ver cómo funciona
          </button>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-10 max-w-xl mx-auto animate-fadeInUp delay-400">
          {currentProfile.stats.map((stat, i) => (
            <Stat key={i} number={stat.num} label={stat.label} color={currentProfile.color} />
          ))}
        </div>

        {/* Médico + social proof */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 max-w-sm mx-auto rounded-2xl p-4 md:p-5 animate-fadeInUp delay-500 hover-lift"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Avatar */}
          <div
            className="flex items-center justify-center w-12 h-12 rounded-xl text-2xl shrink-0"
            style={{ background: `rgba(${currentProfile.colorRgb}, 0.18)` }}
          >
            {currentProfile.emoji}
          </div>

          <div className="text-left flex-1 min-w-0">
            <p className="font-bold text-white text-sm truncate">{currentProfile.medico}</p>
            <p className="text-xs text-[rgba(255,255,255,0.45)] mt-0.5 leading-snug">
              {currentProfile.medicoRole}
            </p>
          </div>

          <div
            className="text-xs font-bold px-3 py-1.5 rounded-full shrink-0 flex items-center gap-1"
            style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#10b981' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
            En línea
          </div>
        </div>

        {/* Validación: logos/badges de confianza */}
        <div className="mt-8 animate-fadeInUp delay-700">
          <p className="text-xs text-[rgba(255,255,255,0.3)] mb-3 uppercase tracking-wider">
            Avalado por médicos especialistas
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {['🏥 Medicina Integrativa', '🔬 Nutrición Clínica', '💊 Suplementación'].map((item, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
