'use client'

import { useProfile } from '@/components/ProfileContext'

export function ProblemaSection() {
  const { currentProfile } = useProfile()
  if (!currentProfile) return null

  return (
    <section
      id="problema"
      className="section"
      style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}
    >
      <div className="container-tight">
        <div className="app-tag">💭 Lo que vives cada día</div>

        <h2 style={{ marginBottom: '.75rem' }}>
          Lo que <span style={{ color: 'var(--ac)' }}>nadie te dijo</span>
        </h2>

        <p style={{ marginBottom: '1.75rem', fontWeight: 700 }}>
          {currentProfile.probSub}
        </p>

        {/* Problem cards */}
        <div style={{ display: 'grid', gap: '.75rem' }}>
          {currentProfile.problemas.map((problema, i) => (
            <div
              key={i}
              className="app-card"
              style={{
                padding: '1.15rem 1.25rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
              }}
            >
              <div
                className="habit-icon"
                style={{
                  background: 'var(--ac-light)',
                  width: '2.75rem',
                  height: '2.75rem',
                  fontSize: '1.25rem',
                  flexShrink: 0,
                }}
              >
                {problema.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ fontSize: '.95rem', marginBottom: '.2rem' }}>{problema.title}</h3>
                <p style={{ fontSize: '.85rem', lineHeight: 1.5, margin: 0 }}>
                  {problema.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closure callout (dark gradient like app) */}
        <div
          style={{
            background: 'linear-gradient(135deg, var(--dark) 0%, #1e293b 100%)',
            borderRadius: 'var(--r-lg)',
            padding: '1.25rem 1.5rem',
            color: '#fff',
            marginTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '.85rem',
          }}
        >
          <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>💡</span>
          <p style={{ color: '#fff', fontSize: '.92rem', fontWeight: 800, margin: 0, lineHeight: 1.4 }}>
            No es <em style={{ color: 'rgba(255,255,255,0.6)' }}>"falta de fuerza de voluntad"</em>. Es{' '}
            <strong style={{ color: 'var(--ac-light)' }}>biología</strong> sin protocolo.
          </p>
        </div>
      </div>
    </section>
  )
}
