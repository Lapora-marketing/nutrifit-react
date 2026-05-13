'use client'

import { useProfile } from '@/components/ProfileContext'

export function ProgramaSection() {
  const { currentProfile } = useProfile()

  if (!currentProfile) return null

  return (
    <section
      id="programa"
      className="py-16 md:py-24 px-5 sm:px-8"
      style={{ background: 'linear-gradient(180deg, #080E1A 0%, #0D1425 100%)' }}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section header */}
        <div className="max-w-2xl mb-10 md:mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: currentProfile.color }}
          >
            {currentProfile.progTag}
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight">
            {currentProfile.progH2.split('<span>').map((part, i) => {
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

          <p className="text-base md:text-lg text-[rgba(255,255,255,0.55)] leading-relaxed">
            {currentProfile.progSub}
          </p>
        </div>

        {/* Phases grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {currentProfile.programa.map((prog, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 md:p-6 border hover-lift transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, rgba(${currentProfile.colorRgb}, 0.08), rgba(${currentProfile.colorRgb}, 0.02))`,
                borderColor: `rgba(${currentProfile.colorRgb}, 0.18)`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: `rgba(${currentProfile.colorRgb}, 0.15)` }}
                >
                  {prog.icon}
                </div>
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: currentProfile.color }}
                >
                  Fase {i + 1}
                </span>
              </div>
              <h3 className="font-bold text-base md:text-lg text-white mb-2">
                {prog.title}
              </h3>
              <p className="text-sm text-[rgba(255,255,255,0.5)] leading-relaxed">
                {prog.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
