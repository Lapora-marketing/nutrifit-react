'use client'

import Image from 'next/image'
import { useProfile } from '@/components/ProfileContext'

export function AboutSection() {
  const { currentProfile } = useProfile()
  if (!currentProfile) return null

  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container-tight">

        <div className="app-tag">🌸 Por qué Nutrifit</div>
        <h2 style={{ marginBottom: '0.75rem' }}>
          Un sistema médico real
        </h2>
        <p style={{ marginBottom: '1.75rem', fontWeight: 700 }}>
          No es coaching genérico ni dietas restrictivas. Es un protocolo diseñado por especialistas que respeta tu cuerpo, tu lactancia y tu tiempo.
        </p>

        {/* Foto + Features lado a lado */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            alignItems: 'stretch',
          }}
          className="about-grid"
        >
          {/* Photo card */}
          <div
            className="app-card"
            style={{
              position: 'relative',
              minHeight: 280,
              overflow: 'hidden',
              padding: 0,
              borderRadius: 'var(--r-xl)',
            }}
          >
            <Image
              src="/mamitas/mami-2.jpeg"
              alt="Mamá feliz con su bebé"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              style={{ objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.65))',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1rem 1.15rem',
                color: '#fff',
              }}
            >
              <p style={{ fontSize: '.75rem', fontWeight: 800, opacity: 0.85, margin: 0 }}>
                Testimonio real
              </p>
              <p style={{ fontSize: '.85rem', fontWeight: 900, margin: '.2rem 0 0', lineHeight: 1.3 }}>
                "Recuperé mi cuerpo y mi energía en 6 semanas"
              </p>
            </div>
          </div>

          {/* Features grid 2x2 */}
          <div
            style={{
              display: 'grid',
              gridTemplateRows: 'repeat(4, 1fr)',
              gap: '.75rem',
            }}
          >
            {[
              { icon: '🌿', label: 'Seguro en lactancia', bg: '#d1fae5' },
              { icon: '👨‍⚕️', label: 'Diseñado por médicos', bg: '#e0f2fe' },
              { icon: '⏱️', label: '15 min al día', bg: '#fef3c7' },
              { icon: '💯', label: 'Con resultados medibles', bg: '#fce7f3' },
            ].map((f, i) => (
              <div
                key={i}
                className="app-card-flat"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.75rem',
                  padding: '.85rem 1rem',
                }}
              >
                <div className="habit-icon" style={{ background: f.bg, width: '2.25rem', height: '2.25rem', fontSize: '1rem' }}>
                  {f.icon}
                </div>
                <p
                  style={{
                    fontSize: '.85rem',
                    fontWeight: 900,
                    color: 'var(--dark)',
                    margin: 0,
                    lineHeight: 1.25,
                  }}
                >
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
