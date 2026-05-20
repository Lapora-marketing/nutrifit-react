'use client'

import { useProfile } from '@/components/ProfileContext'

export function ResultadosSection() {
  const { currentProfile } = useProfile()
  if (!currentProfile) return null

  return (
    <section
      id="resultados"
      className="section"
      style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}
    >
      <div className="container-tight">
        <div className="app-tag">💬 Resultados</div>

        <h2 style={{ marginBottom: '.75rem' }}>
          Pacientes que ya <span style={{ color: 'var(--ac)' }}>transformaron</span> su vida
        </h2>

        <p style={{ marginBottom: '1.75rem', fontWeight: 700 }}>
          {currentProfile.resSub}
        </p>

        {/* Stats cards — 1 col mobile, 3 cols desktop */}
        <div className="desktop-grid-3" style={{ display: 'grid', gap: '.85rem' }}>
          {currentProfile.resultados.map((result, i) => (
            <div
              key={i}
              className="app-card"
              style={{ padding: '1.25rem 1.4rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '.75rem', marginBottom: '.85rem' }}>
                <div>
                  <span
                    style={{
                      fontSize: '.65rem',
                      fontWeight: 900,
                      color: 'var(--ac)',
                      textTransform: 'uppercase',
                      letterSpacing: '.08em',
                    }}
                  >
                    {result.tag}
                  </span>
                  <h3 style={{ fontSize: '.95rem', marginTop: '.2rem' }}>{result.title}</h3>
                </div>
                <span
                  style={{
                    flexShrink: 0,
                    background: 'var(--green-light)',
                    color: 'var(--green)',
                    padding: '.3rem .6rem',
                    borderRadius: '.55rem',
                    fontSize: '.62rem',
                    fontWeight: 900,
                  }}
                >
                  ✓
                </span>
              </div>

              {/* Stats rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.55rem' }}>
                {result.stats.map((stat, j) => (
                  <div
                    key={j}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '.75rem',
                      padding: '.5rem .85rem',
                      background: 'var(--bg-soft)',
                      borderRadius: '.65rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 900,
                        color: 'var(--green)',
                        minWidth: '60px',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {stat.value}
                    </span>
                    <span style={{ fontSize: '.78rem', color: 'var(--gray)', fontWeight: 700, lineHeight: 1.35 }}>
                      {stat.description}
                    </span>
                  </div>
                ))}
              </div>

              <p
                style={{
                  fontSize: '.7rem',
                  fontWeight: 800,
                  color: 'var(--green)',
                  margin: '.85rem 0 0',
                }}
              >
                {result.badge}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonios — horizontal scroll like app */}
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>
            Lo que dicen ⭐ <span style={{ color: 'var(--amber)' }}>5.0</span>
          </h3>

          <div
            className="ns testimonio-scroll"
            style={{
              display: 'flex',
              overflowX: 'auto',
              gap: '.75rem',
              paddingBottom: '.5rem',
              scrollSnapType: 'x mandatory',
            }}
          >
            {currentProfile.testimonios.map((testi, i) => (
              <div
                key={i}
                className="app-card"
                style={{
                  minWidth: '260px',
                  maxWidth: '260px',
                  padding: '1.1rem 1.25rem',
                  scrollSnapAlign: 'start',
                  flexShrink: 0,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '.65rem', marginBottom: '.75rem' }}>
                  <div
                    className="habit-icon"
                    style={{
                      background: 'var(--ac-light)',
                      width: '2.5rem',
                      height: '2.5rem',
                    }}
                  >
                    {testi.emoji}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p style={{ fontSize: '.82rem', fontWeight: 900, color: 'var(--dark)', margin: 0 }}>
                      {testi.name}
                    </p>
                    <p style={{ fontSize: '.66rem', fontWeight: 700, color: 'var(--gray-light)', margin: 0 }}>
                      {testi.program}
                    </p>
                  </div>
                </div>

                <p style={{ color: 'var(--amber)', fontSize: '.8rem', margin: '0 0 .55rem', letterSpacing: '-.04em' }}>
                  ★★★★★
                </p>

                <p style={{ fontSize: '.82rem', color: 'var(--dark)', fontWeight: 700, lineHeight: 1.45, margin: 0 }}>
                  "{testi.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
