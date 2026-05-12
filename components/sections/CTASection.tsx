'use client'

import { useProfile } from '@/components/ProfileContext'
import { Button, Badge } from '@/components/atoms'

export function CTASection() {
  const { currentProfile } = useProfile()

  if (!currentProfile) return null

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 md:px-10 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#0c1830,#080E1A)' }}>
      <div
        className="absolute inset-0 opacity-20 transition-all duration-500"
        style={{
          background: `radial-gradient(ellipse at center, rgba(${currentProfile.colorRgb}, 0.14) 0%, transparent 65%)`,
        }}
      />

      <div className="relative z-10 max-w-3xl w-full text-center">
        <Badge variant="default" className="mb-8 px-5 py-2.5 inline-block">
          {currentProfile.ctaBadge}
        </Badge>

        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
          {currentProfile.ctaH2.split('<span>').map((part, i) => {
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

        <p className="text-lg text-[rgba(255,255,255,0.6)] mb-12 max-w-2xl mx-auto leading-relaxed">
          {currentProfile.ctaSub}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg">
            💬 Hablar con el equipo
          </Button>
          <Button variant="outline" size="lg">
            📞 WhatsApp directo
          </Button>
        </div>
      </div>
    </section>
  )
}
