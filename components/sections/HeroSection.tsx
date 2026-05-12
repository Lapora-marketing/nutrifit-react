'use client'

import { useProfile } from '@/components/ProfileContext'
import { Button, Badge, Stat, Avatar } from '@/components/atoms'

export function HeroSection() {
  const { currentProfile } = useProfile()

  if (!currentProfile) return null

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-12 px-6 md:px-10">
      <div
        className="absolute inset-0 opacity-20 transition-all duration-500"
        style={{
          background: `radial-gradient(ellipse at 55% 35%, rgba(${currentProfile.colorRgb}, 0.12) 0%, transparent 65%)`,
        }}
      />

      <div className="relative z-10 max-w-4xl w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 mb-8 px-5 py-2.5 rounded-full" style={{ background: `rgba(${currentProfile.colorRgb}, 0.12)`, border: `1px solid rgba(${currentProfile.colorRgb}, 0.3)` }}>
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: currentProfile.color }} />
          <span className="text-sm font-bold text-[rgba(255,255,255,0.9)]">{currentProfile.heroBadge}</span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          {currentProfile.heroH1.split('<span>').map((part, i) => {
            if (i === 0) return part
            const [spanContent, rest] = part.split('</span>')
            return (
              <span key={i}>
                <span style={{ color: currentProfile.color }}>{spanContent}</span>
                {rest}
              </span>
            )
          })}
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-[rgba(255,255,255,0.65)] max-w-2xl mx-auto mb-12 leading-relaxed">
          {currentProfile.heroSub}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Button variant="primary" size="lg">
            Quiero mi programa →
          </Button>
          <Button variant="outline" size="lg">
            Ver cómo funciona
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
          {currentProfile.stats.map((stat, i) => (
            <Stat key={i} number={stat.num} label={stat.label} color={currentProfile.color} />
          ))}
        </div>

        {/* Doctor Card */}
        <div className="flex items-center gap-4 max-w-sm mx-auto rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <Avatar emoji={currentProfile.emoji} size="md" bgColor={`rgba(${currentProfile.colorRgb}, 0.2)`} />
          <div className="text-left flex-1">
            <div className="font-bold text-white">{currentProfile.medico}</div>
            <div className="text-xs text-[rgba(255,255,255,0.5)] mt-1">{currentProfile.medicoRole}</div>
          </div>
          <div className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: `rgba(16, 185, 129, 0.15)`, color: '#10b981' }}>
            ● En línea
          </div>
        </div>
      </div>
    </section>
  )
}
