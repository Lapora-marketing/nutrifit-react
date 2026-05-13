'use client'

import { useProfile } from '@/components/ProfileContext'

export function CTASection() {
  const { currentProfile } = useProfile()

  if (!currentProfile) return null

  return (
    <section
      className="py-16 md:py-24 px-5 sm:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0c1830, #080E1A)' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, rgba(${currentProfile.colorRgb}, 0.12) 0%, transparent 65%)`,
        }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6"
            style={{
              background: `rgba(${currentProfile.colorRgb}, 0.12)`,
              border: `1px solid rgba(${currentProfile.colorRgb}, 0.3)`,
              color: currentProfile.color,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: currentProfile.color }} />
            {currentProfile.ctaBadge}
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight">
            {currentProfile.ctaH2.split('<span>').map((part, i) => {
              if (i === 0) return <span key={i}>{part}</span>
              const [spanContent, rest] = part.split('</span>')
              return (
                <span key={i}>
                  <span style={{ color: currentProfile.color }}>{spanContent}</span>
                  {rest}
                </span>
              )
            })}
          </h2>

          <p className="text-base md:text-lg text-[rgba(255,255,255,0.55)] mb-8 leading-relaxed">
            {currentProfile.ctaSub}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              className="btn-ripple flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white text-base transition-all duration-300 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${currentProfile.color}, rgba(${currentProfile.colorRgb}, 0.75))`,
                boxShadow: `0 4px 20px rgba(${currentProfile.colorRgb}, 0.35)`,
              }}
            >
              💬 Hablar con el equipo
            </button>
            <button
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105"
              style={{
                border: `1.5px solid rgba(${currentProfile.colorRgb}, 0.4)`,
                background: `rgba(${currentProfile.colorRgb}, 0.06)`,
                color: currentProfile.color,
              }}
            >
              📞 WhatsApp directo
            </button>
          </div>

          {/* Trust signals */}
          <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
            {['🔒 Pago seguro', '📋 Sin contratos', '✅ Resultados garantizados'].map((item, i) => (
              <span key={i} className="text-xs text-[rgba(255,255,255,0.35)]">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
