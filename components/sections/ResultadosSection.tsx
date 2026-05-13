'use client'

import { useProfile } from '@/components/ProfileContext'

export function ResultadosSection() {
  const { currentProfile } = useProfile()

  if (!currentProfile) return null

  return (
    <section
      id="resultados"
      className="py-16 md:py-24 px-5 sm:px-8"
      style={{ background: 'linear-gradient(180deg, #0D1425 0%, #060C17 100%)' }}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section header */}
        <div className="max-w-2xl mb-10 md:mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: currentProfile.color }}
          >
            Resultados reales
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight">
            Pacientes que ya{' '}
            <span style={{ color: currentProfile.color }}>transformaron su vida</span>
          </h2>

          <p className="text-base md:text-lg text-[rgba(255,255,255,0.55)] leading-relaxed">
            {currentProfile.resSub}
          </p>
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-16">
          {currentProfile.resultados.map((result, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 md:p-6 border hover-lift transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, rgba(${currentProfile.colorRgb}, 0.1), rgba(${currentProfile.colorRgb}, 0.02))`,
                borderColor: `rgba(${currentProfile.colorRgb}, 0.22)`,
              }}
            >
              <span
                className="inline-block text-xs font-bold uppercase tracking-wider mb-3"
                style={{ color: currentProfile.color }}
              >
                {result.tag}
              </span>

              <h3 className="font-bold text-base text-white mb-4 leading-snug">
                {result.title}
              </h3>

              <div className="space-y-3 mb-4">
                {result.stats.map((stat, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <span className="text-xl md:text-2xl font-black tabular-nums" style={{ color: '#10b981', minWidth: '70px' }}>
                      {stat.value}
                    </span>
                    <span className="text-xs text-[rgba(255,255,255,0.5)] leading-snug pt-1">
                      {stat.description}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: 'rgba(16,185,129,0.12)', color: '#10b981' }}
              >
                ✓ {result.badge}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[rgba(255,255,255,0.3)]">
            Lo que dicen nuestras pacientes
          </span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]" />
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {currentProfile.testimonios.map((testi, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 md:p-6 border hover-lift transition-all duration-300 flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderColor: 'rgba(255,255,255,0.07)',
              }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[1,2,3,4,5].map(s => (
                  <span key={s} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>

              <p className="text-sm text-[rgba(255,255,255,0.65)] leading-relaxed italic flex-1 mb-4">
                "{testi.text}"
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-[rgba(255,255,255,0.06)]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-base shrink-0"
                  style={{ background: `rgba(${currentProfile.colorRgb}, 0.18)` }}
                >
                  {testi.emoji}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{testi.name}</p>
                  <p className="text-xs text-[rgba(255,255,255,0.4)]">{testi.program}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
