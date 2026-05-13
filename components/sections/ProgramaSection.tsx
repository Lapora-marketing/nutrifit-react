'use client'

import { useProfile } from '@/components/ProfileContext'
import { Card } from '@/components/atoms'

export function ProgramaSection() {
  const { currentProfile } = useProfile()

  if (!currentProfile) return null

  return (
    <section id="programa" className="min-h-screen flex items-center justify-center py-20 px-5 md:px-10" style={{ background: 'linear-gradient(180deg,#080E1A 0%,#0D1425 100%)' }}>
      <div className="max-w-4xl w-full">
        <div className="text-sm font-bold letter-spacing-0.8px text-transform-uppercase mb-3" style={{ color: currentProfile.color }}>
          {currentProfile.progTag}
        </div>

        <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
          {currentProfile.progH2.split('<span>').map((part, i) => {
            if (i === 0) return part
            const [spanContent, rest] = part.split('</span>')
            return (
              <span key={i}>
                <span style={{ color: currentProfile.color }}>{spanContent}</span>
                {rest}
              </span>
            )
          })}
        </h2>

        <p className="text-lg text-[rgba(255,255,255,0.6)] max-w-2xl mb-8 leading-relaxed">
          {currentProfile.progSub}
        </p>

        <div className="w-14 h-1 rounded-full mb-12" style={{ background: `linear-gradient(90deg, ${currentProfile.color}, ${currentProfile.color}00)` }} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentProfile.programa.map((prog, i) => (
            <Card key={i} icon={prog.icon} title={prog.title} description={prog.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
