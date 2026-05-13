'use client'

import { useProfile } from '@/components/ProfileContext'

export function ProgramaSection() {
  const { currentProfile } = useProfile()
  if (!currentProfile) return null

  return (
    <section
      id="programa"
      className="section"
      style={{ background: 'var(--dark)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Dots */}
      <div
        className="deco-dots"
        style={{
          top: 40,
          right: '5%',
          width: 110,
          height: 110,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.25) 2px, transparent 2.5px)',
        }}
      />

      <div className="container-narrow">
        <div
          className="tag"
          style={{ background: `rgba(${currentProfile.colorRgb}, 0.2)`, color: '#f9a8d4' }}
        >
          🎯 {currentProfile.progTag}
        </div>

        <h2 style={{ color: '#fff', marginBottom: '1.25rem' }}>
          El <span className="serif" style={{ color: '#f9a8d4' }}>sistema</span> que funciona
        </h2>

        <p style={{ color: 'rgba(255,255,255,.65)', fontWeight: 700, marginTop: '.75rem' }}>
          {currentProfile.progSub}
        </p>

        {/* Step cards */}
        <div style={{ display: 'grid', gap: '1.25rem', marginTop: '2rem' }}>
          {currentProfile.programa.map((prog, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,.05)',
                border: '1px solid rgba(255,255,255,.09)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Big background number */}
              <span
                style={{
                  position: 'absolute',
                  top: -20,
                  right: '.75rem',
                  fontSize: '5.5rem',
                  fontWeight: 900,
                  color: 'rgba(255,255,255,.04)',
                  lineHeight: 1,
                  pointerEvents: 'none',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <span style={{ fontSize: '2.2rem', display: 'block', marginBottom: '.85rem' }}>
                {prog.icon}
              </span>
              <h3 style={{ color: '#fff', marginBottom: '.3rem' }}>{prog.title}</h3>
              <p
                style={{
                  color: '#f9a8d4',
                  fontSize: '.85rem',
                  fontWeight: 800,
                  marginBottom: '.5rem',
                }}
              >
                Fase {i + 1} del Sistema
              </p>
              <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.85rem', margin: '0 0 .85rem' }}>
                {prog.description}
              </p>
              <div
                style={{
                  background: 'rgba(16,185,129,.12)',
                  border: '1px solid rgba(16,185,129,.25)',
                  color: '#6ee7b7',
                  padding: '.5rem .9rem',
                  borderRadius: '.75rem',
                  fontSize: '.78rem',
                  fontWeight: 900,
                  display: 'inline-block',
                }}
              >
                ✓ Resultado medible al final de la fase
              </div>
            </div>
          ))}
        </div>

        {/* Medico badge */}
        <div
          style={{
            marginTop: '2rem',
            background: 'rgba(14,165,233,.1)',
            border: '1px solid rgba(14,165,233,.25)',
            borderRadius: 'var(--radius)',
            padding: '1.25rem 1.5rem',
            textAlign: 'center',
          }}
        >
          <p style={{ color: 'rgba(255,255,255,.85)', fontSize: '.88rem', fontWeight: 700, margin: 0 }}>
            🩺 Diseñado por <strong style={{ color: '#7dd3fc' }}>{currentProfile.medico}</strong>{' '}
            — {currentProfile.medicoRole}
          </p>
        </div>
      </div>
    </section>
  )
}
