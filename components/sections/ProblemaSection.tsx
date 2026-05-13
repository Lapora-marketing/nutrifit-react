'use client'

import { useProfile } from '@/components/ProfileContext'

export function ProblemaSection() {
  const { currentProfile } = useProfile()
  if (!currentProfile) return null

  return (
    <section
      id="problema"
      className="section"
      style={{ background: 'var(--bg-warm)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative blob */}
      <div
        className="deco-blob animate-floatBlob"
        style={{
          position: 'absolute',
          top: '15%',
          left: '-100px',
          width: 280,
          height: 280,
          background: 'var(--ac)',
          opacity: 0.12,
        }}
      />

      <div className="container-narrow" style={{ position: 'relative', zIndex: 2 }}>
        <div className="tag">💭 Lo que vives cada día</div>

        <h2 style={{ color: 'var(--dark)', marginBottom: '1.5rem' }}>
          Lo que <span className="serif">nadie te dijo</span> después del parto
        </h2>

        <p style={{ fontWeight: 700, marginBottom: '2rem', fontSize: '1rem' }}>
          {currentProfile.probSub}
        </p>

        {/* Editorial problem cards */}
        <div style={{ display: 'grid', gap: '1rem' }}>
          {currentProfile.problemas.map((problema, i) => (
            <div
              key={i}
              className="card hover-lift"
              style={{
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start',
                padding: '1.25rem 1.5rem',
                background: 'var(--white)',
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: 56,
                  height: 56,
                  borderRadius: 999,
                  background: 'var(--ac-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                }}
              >
                {problema.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3
                  style={{
                    color: 'var(--dark)',
                    fontSize: '1rem',
                    marginBottom: '.35rem',
                  }}
                >
                  {problema.title}
                </h3>
                <p style={{ fontSize: '.88rem', margin: 0, lineHeight: 1.5 }}>
                  {problema.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closure card */}
        <div
          style={{
            background: 'var(--dark)',
            color: 'var(--white)',
            borderRadius: 'var(--radius-card)',
            padding: '1.5rem 1.75rem',
            textAlign: 'center',
            marginTop: '2rem',
          }}
        >
          <p
            style={{
              color: 'var(--white)',
              fontWeight: 800,
              fontSize: '1rem',
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            👉 No estás sola. Y no, no es solo{' '}
            <em className="hi" style={{ color: 'var(--ac-mid)' }}>cuestión de fuerza de voluntad</em>.
          </p>
        </div>
      </div>
    </section>
  )
}
