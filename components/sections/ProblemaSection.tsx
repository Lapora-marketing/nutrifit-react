'use client'

import { useProfile } from '@/components/ProfileContext'

export function ProblemaSection() {
  const { currentProfile } = useProfile()

  if (!currentProfile) return null

  return (
    <section
      id="problema"
      className="py-16 md:py-24 px-5 sm:px-8"
      style={{ background: '#060C17' }}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section header */}
        <div className="max-w-2xl mb-10 md:mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: currentProfile.color }}
          >
            {currentProfile.probTag}
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight">
            {currentProfile.probH2.split('<span>').map((part, i) => {
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
            {currentProfile.probSub}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {currentProfile.problemas.map((problema, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 md:p-6 border hover-lift transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderColor: `rgba(${currentProfile.colorRgb}, 0.15)`,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
                style={{ background: `rgba(${currentProfile.colorRgb}, 0.12)` }}
              >
                {problema.icon}
              </div>
              <h3 className="font-bold text-base md:text-lg text-white mb-2">
                {problema.title}
              </h3>
              <p className="text-sm text-[rgba(255,255,255,0.5)] leading-relaxed">
                {problema.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
