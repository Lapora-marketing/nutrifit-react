'use client'

import { useProfile } from '@/components/ProfileContext'

export function ResultadosSection() {
  const { currentProfile } = useProfile()
  if (!currentProfile) return null

  return (
    <section
      id="resultados"
      className="section"
      style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}
    >
      <div
        className="deco-blob animate-floatBlob"
        style={{
          position: 'absolute',
          bottom: '-100px',
          right: '-80px',
          width: 320,
          height: 320,
          background: 'var(--amber)',
          opacity: 0.18,
        }}
      />

      <div className="container-narrow" style={{ position: 'relative', zIndex: 2 }}>
        <div className="tag">💬 Resultados reales</div>

        <h2 style={{ marginBottom: '1.5rem' }}>
          Pacientes que ya<br />
          <span className="serif">transformaron</span> su vida.
        </h2>

        <p style={{ fontWeight: 700, marginTop: '.75rem' }}>
          {currentProfile.resSub}
        </p>

        {/* Resultados stats */}
        <div style={{ display: 'grid', gap: '1.1rem', marginTop: '2rem' }}>
          {currentProfile.resultados.map((result, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: '1.4rem',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontSize: '.72rem',
                  fontWeight: 900,
                  color: 'var(--ac)',
                  textTransform: 'uppercase',
                  letterSpacing: '.06em',
                  marginBottom: '.5rem',
                }}
              >
                {result.tag}
              </div>
              <h3 style={{ marginBottom: '.85rem' }}>{result.title}</h3>

              {result.stats.map((stat, j) => (
                <div
                  key={j}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '.85rem',
                    marginBottom: '.65rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 900,
                      color: 'var(--green)',
                      minWidth: '70px',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {stat.value}
                  </span>
                  <span style={{ fontSize: '.85rem', color: 'var(--gray)', fontWeight: 700 }}>
                    {stat.description}
                  </span>
                </div>
              ))}

              <span
                style={{
                  display: 'inline-block',
                  marginTop: '.85rem',
                  background: 'rgba(16,185,129,.12)',
                  border: '1px solid rgba(16,185,129,.25)',
                  color: 'var(--green)',
                  padding: '.35rem .85rem',
                  borderRadius: 999,
                  fontSize: '.75rem',
                  fontWeight: 900,
                }}
              >
                ✓ {result.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonios con quote mark */}
        <div style={{ display: 'grid', gap: '1.1rem', marginTop: '2rem' }}>
          {currentProfile.testimonios.map((testi, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: '1.4rem',
                position: 'relative',
              }}
            >
              {/* Big quote mark */}
              <span
                style={{
                  content: '\\201C',
                  fontSize: '4rem',
                  color: 'var(--ac-light)',
                  position: 'absolute',
                  top: '-.4rem',
                  left: '.9rem',
                  lineHeight: 1,
                  fontWeight: 900,
                }}
              >
                {'“'}
              </span>

              <div className="stars" style={{ fontSize: '.9rem', marginBottom: '.75rem' }}>
                ★★★★★
              </div>

              <p
                style={{
                  fontSize: '.92rem',
                  fontWeight: 800,
                  color: 'var(--dark)',
                  marginBottom: '1rem',
                  lineHeight: 1.5,
                }}
              >
                {testi.text}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '.7rem' }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'var(--ac-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    flexShrink: 0,
                  }}
                >
                  {testi.emoji}
                </div>
                <div>
                  <div style={{ fontSize: '.85rem', fontWeight: 900, color: 'var(--dark)' }}>
                    {testi.name}
                  </div>
                  <div style={{ fontSize: '.72rem', fontWeight: 700, color: 'var(--gray)' }}>
                    {testi.program}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
