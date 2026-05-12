'use client'

import { useProfile } from '@/components/ProfileContext'
import { Tag } from '@/components/atoms'

export function ResultadosSection() {
  const { currentProfile } = useProfile()

  if (!currentProfile) return null

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 md:px-10" style={{ background: 'linear-gradient(180deg,#0D1425 0%,#060C17 100%)' }}>
      <div className="max-w-4xl w-full">
        <div className="text-sm font-bold letter-spacing-0.8px text-transform-uppercase mb-3" style={{ color: currentProfile.color }}>
          Resultados reales
        </div>

        <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
          Pacientes que ya transformaron su vida
        </h2>

        <p className="text-lg text-[rgba(255,255,255,0.6)] max-w-2xl mb-8 leading-relaxed">
          {currentProfile.resSub}
        </p>

        <div className="w-14 h-1 rounded-full mb-12" style={{ background: `linear-gradient(90deg, ${currentProfile.color}, ${currentProfile.color}00)` }} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentProfile.resultados.map((result, i) => (
            <div
              key={i}
              className="rounded-3xl p-8 border transition-all duration-400"
              style={{
                background: `linear-gradient(135deg, rgba(${currentProfile.colorRgb}, 0.12), rgba(${currentProfile.colorRgb}, 0.03))`,
                borderColor: `rgba(${currentProfile.colorRgb}, 0.25)`,
              }}
            >
              <div className="text-xs font-bold letter-spacing-0.8px text-transform-uppercase mb-2" style={{ color: currentProfile.color }}>
                {result.tag}
              </div>
              <h3 className="text-lg font-bold mb-4">{result.title}</h3>
              {result.stats.map((stat, j) => (
                <div key={j} className="flex items-center gap-3 mb-3">
                  <div className="text-2xl font-black" style={{ color: '#10b981', minWidth: '80px' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-[rgba(255,255,255,0.55)]">{stat.description}</div>
                </div>
              ))}
              <Tag variant="success" className="mt-4">
                {result.badge}
              </Tag>
            </div>
          ))}
        </div>

        {/* Testimonios */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8">Lo que dicen nuestras pacientes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentProfile.testimonios.map((testi, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 border"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  borderColor: 'rgba(255,255,255,0.07)',
                }}
              >
                <div className="text-lg mb-3">⭐⭐⭐⭐⭐</div>
                <p className="text-base text-[rgba(255,255,255,0.65)] mb-4 italic leading-relaxed">{testi.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ background: `rgba(${currentProfile.colorRgb}, 0.2)` }}>
                    {testi.emoji}
                  </div>
                  <div className="text-sm">
                    <div className="font-bold">{testi.name}</div>
                    <div className="text-xs text-[rgba(255,255,255,0.4)]">{testi.program}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
