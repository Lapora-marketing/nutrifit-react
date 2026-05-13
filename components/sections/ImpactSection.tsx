'use client'

import { useProfile } from '@/components/ProfileContext'

export function ImpactSection() {
  const { currentProfile } = useProfile()
  if (!currentProfile) return null

  return (
    <section
      style={{
        background: 'var(--white)',
        padding: '4rem 0 5rem',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="container-nut">
        <p
          style={{
            textAlign: 'center',
            fontWeight: 900,
            fontSize: '.85rem',
            letterSpacing: '.15em',
            color: 'var(--dark)',
            textTransform: 'uppercase',
            marginBottom: '2.5rem',
          }}
        >
          POR LAS MAMÁS + POR LA SALUD
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            maxWidth: 880,
            margin: '0 auto',
          }}
          className="impact-grid"
        >
          {[
            { icon: '👩‍⚕️', num: '200+', label: 'mamás transformadas' },
            { icon: '⏱️', num: '6 sem', label: 'promedio resultados' },
            { icon: '💯', num: '98%', label: 'reportan mejora' },
          ].map((item, i) => (
            <div
              key={i}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              <span style={{ fontSize: '2rem', marginBottom: '.75rem' }}>{item.icon}</span>
              <p
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 900,
                  color: 'var(--dark)',
                  lineHeight: 1,
                  marginBottom: '.4rem',
                }}
              >
                {item.num}
              </p>
              <p
                style={{
                  fontSize: '.78rem',
                  fontWeight: 700,
                  color: 'var(--gray)',
                  margin: 0,
                  textTransform: 'uppercase',
                  letterSpacing: '.05em',
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            fontSize: '.75rem',
            color: 'var(--gray)',
            fontStyle: 'italic',
          }}
        >
          *Datos promediados sobre +200 pacientes activas en el programa.
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .impact-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}
