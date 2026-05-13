'use client'

import { useProfile } from '@/components/ProfileContext'

export function TrustBar() {
  const { currentProfile } = useProfile()
  if (!currentProfile) return null

  const stats = [
    { value: '2,847+', label: 'Pacientes' },
    { value: '4.9★', label: 'Calificación' },
    { value: '92%', label: 'Resultados' },
    { value: '3', label: 'Especialistas' },
  ]

  return (
    <section
      className="py-8 md:py-10 px-5 sm:px-8 relative"
      style={{
        background: 'rgba(255,255,255,0.015)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-2xl md:text-3xl font-black mb-1 tabular-nums"
                style={{ color: currentProfile.color }}
              >
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-[rgba(255,255,255,0.4)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
