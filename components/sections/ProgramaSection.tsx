'use client'

import { useProfile } from '@/components/ProfileContext'

export function ProgramaSection() {
  const { currentProfile } = useProfile()
  if (!currentProfile) return null

  return (
    <section
      id="programa"
      className="section"
      style={{ background: 'var(--bg)' }}
    >
      <div className="container-tight">
        <div className="app-tag">🎯 Sistema {currentProfile.label}</div>

        <h2 style={{ marginBottom: '.75rem' }}>
          El método que <span style={{ color: 'var(--ac)' }}>realmente funciona</span>
        </h2>

        <p style={{ marginBottom: '1.75rem', fontWeight: 700 }}>
          {currentProfile.progSub}
        </p>

        {/* Phase cards */}
        <div style={{ display: 'grid', gap: '1rem' }}>
          {currentProfile.programa.map((prog, i) => (
            <div
              key={i}
              className="app-card"
              style={{
                position: 'relative',
                padding: '1.5rem',
                overflow: 'hidden',
              }}
            >
              {/* Big bg number */}
              <span
                style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '12px',
                  fontSize: '5.5rem',
                  fontWeight: 900,
                  color: 'var(--ac-light)',
                  lineHeight: 1,
                  pointerEvents: 'none',
                  zIndex: 0,
                  opacity: 0.5,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '.5rem' }}>
                  {prog.icon}
                </span>

                <span
                  style={{
                    fontSize: '.65rem',
                    fontWeight: 900,
                    color: 'var(--ac)',
                    textTransform: 'uppercase',
                    letterSpacing: '.08em',
                    display: 'block',
                    marginBottom: '.3rem',
                  }}
                >
                  Fase {i + 1} del Sistema
                </span>

                <h3 style={{ marginBottom: '.4rem', fontSize: '1.05rem' }}>{prog.title}</h3>
                <p style={{ fontSize: '.88rem', marginBottom: '.85rem', lineHeight: 1.5 }}>
                  {prog.description}
                </p>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '.35rem',
                    background: 'var(--green-light)',
                    border: '1px solid #a7f3d0',
                    color: 'var(--green)',
                    padding: '.4rem .8rem',
                    borderRadius: '.65rem',
                    fontSize: '.72rem',
                    fontWeight: 900,
                  }}
                >
                  ✓ Resultado medible
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Doctor badge (app-style) */}
        <div
          className="app-card-flat"
          style={{
            marginTop: '1.5rem',
            padding: '1.15rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '.85rem',
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
            borderColor: '#bae6fd',
          }}
        >
          <div
            style={{
              width: '3rem',
              height: '3rem',
              borderRadius: '1rem',
              background: '#0ea5e9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.4rem',
              color: '#fff',
              flexShrink: 0,
            }}
          >
            🩺
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: '.85rem', fontWeight: 900, color: 'var(--dark)', margin: 0 }}>
              {currentProfile.medico}
            </p>
            <p style={{ fontSize: '.72rem', fontWeight: 700, color: '#0284c7', margin: '.15rem 0 0' }}>
              {currentProfile.medicoRole}
            </p>
          </div>
          <span
            style={{
              fontSize: '.62rem',
              fontWeight: 900,
              background: '#dcfce7',
              color: '#15803d',
              padding: '.3rem .55rem',
              borderRadius: '.5rem',
              textTransform: 'uppercase',
              letterSpacing: '.05em',
              flexShrink: 0,
            }}
          >
            ● En línea
          </span>
        </div>
      </div>
    </section>
  )
}
