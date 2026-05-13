'use client'

import Image from 'next/image'
import { useProfile } from '@/components/ProfileContext'

export function ProgramCardsSection() {
  const { currentProfile } = useProfile()
  if (!currentProfile) return null

  const programs = [
    {
      img: '/mamitas/mami-1.jpeg',
      name: 'Plan Esencial',
      sub: 'Para mamás recientes (0-6m)',
      price: '$80k',
      tag: '/mes',
    },
    {
      img: '/mamitas/mami-2.jpeg',
      name: 'Programa Completo',
      sub: 'Tu transformación de 3 meses',
      price: '$490k',
      tag: 'total',
      featured: true,
    },
    {
      img: '/mamitas/mami-3.jpeg',
      name: 'Consulta Médica',
      sub: 'Diagnóstico personalizado',
      price: '$120k',
      tag: 'consulta',
    },
  ]

  return (
    <section
      className="section"
      style={{ background: 'var(--white)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative dots */}
      <div
        className="deco-dots"
        style={{ top: 60, right: '5%', width: 100, height: 100 }}
      />

      <div className="container-nut">
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '2.5rem',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <h2 className="long-line" style={{ color: 'var(--dark)', margin: 0 }}>
            Programas
          </h2>
          <a href="#oferta" className="arrow-link">
            VER TODOS LOS PLANES <span>→</span>
          </a>
        </div>

        {/* Programs grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}
          className="programs-grid"
        >
          {programs.map((p, i) => (
            <div
              key={i}
              className="card hover-lift"
              style={{
                padding: 0,
                background: p.featured ? 'var(--bg-warm)' : 'var(--white)',
                border: p.featured ? `2px solid var(--ac)` : '1px solid var(--border)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1/1',
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-card) var(--radius-card) 0 0',
                }}
              >
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  style={{ objectFit: 'cover' }}
                />
                {p.featured && (
                  <span
                    style={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      background: 'var(--ac)',
                      color: 'white',
                      padding: '.4rem .8rem',
                      borderRadius: 999,
                      fontSize: '.7rem',
                      fontWeight: 900,
                      letterSpacing: '.05em',
                      textTransform: 'uppercase',
                    }}
                  >
                    ⭐ Recomendado
                  </span>
                )}
              </div>

              <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
                <h3
                  style={{
                    color: 'var(--dark)',
                    marginBottom: '.25rem',
                    fontSize: '1.1rem',
                  }}
                >
                  {p.name}
                </h3>
                <p style={{ fontSize: '.78rem', marginBottom: '1rem' }}>{p.sub}</p>

                <div
                  className="long-line"
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontWeight: 900,
                      fontSize: '.78rem',
                      color: 'var(--dark)',
                      letterSpacing: '.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {p.tag}
                  </span>
                  <span
                    style={{
                      fontWeight: 900,
                      fontSize: '1.4rem',
                      color: p.featured ? 'var(--ac)' : 'var(--dark)',
                    }}
                  >
                    {p.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .programs-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
