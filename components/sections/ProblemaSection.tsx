'use client'

import { useProfile } from '@/components/ProfileContext'

export function ProblemaSection() {
  const { currentProfile } = useProfile()
  if (!currentProfile) return null

  return (
    <section
      id="problema"
      className="section"
      style={{ background: 'var(--white)' }}
    >
      <div className="container-nut">
        <div className="tag">💭 Lo que vives cada día</div>

        <h2 className="fade-up vis">
          {currentProfile.probH2.split('<span>').map((part, i) => {
            if (i === 0) return <span key={i}>{part}</span>
            const [spanContent, rest] = part.split('</span>')
            return (
              <span key={i}>
                <em className="hi">{spanContent}</em>
                {rest}
              </span>
            )
          })}
        </h2>

        <p style={{ fontWeight: 700, marginTop: '.75rem', marginBottom: '1.25rem' }}>
          {currentProfile.probSub}
        </p>

        {/* Mirror cards - cita emocional */}
        {currentProfile.problemas.slice(0, 2).map((problema, i) => (
          <div
            key={i}
            style={{
              background: `linear-gradient(135deg, var(--ac-light) 0%, var(--ac-mid) 100%)`,
              borderLeft: '4px solid var(--ac)',
              borderRadius: '0 var(--radius) var(--radius) 0',
              padding: '1.4rem 1.5rem',
              margin: '1.25rem 0',
            }}
          >
            <p
              style={{
                fontSize: '1rem',
                fontWeight: 800,
                fontStyle: 'italic',
                color: 'var(--dark)',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              <span style={{ fontSize: '1.5rem', marginRight: '.5rem' }}>{problema.icon}</span>
              "{problema.title}" — {problema.description}
            </p>
          </div>
        ))}

        {/* Closure card */}
        <div
          style={{
            background: 'var(--bg)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '1.25rem',
            textAlign: 'center',
            marginTop: '1.25rem',
          }}
        >
          <p style={{ color: 'var(--dark)', fontWeight: 800, fontSize: '.92rem', margin: 0 }}>
            👉 No estás sola. Y no, no es solo "cuestión de fuerza de voluntad" 💪
          </p>
        </div>

        {/* Extra problemas grid */}
        {currentProfile.problemas.length > 2 && (
          <div style={{ display: 'grid', gap: '.85rem', marginTop: '1.75rem' }}>
            {currentProfile.problemas.slice(2).map((problema, i) => (
              <div
                key={i}
                className="card"
                style={{
                  display: 'flex',
                  gap: '.9rem',
                  alignItems: 'flex-start',
                  padding: '1.1rem 1.25rem',
                  transition: 'all .2s',
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 999,
                    background: 'var(--ac-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0,
                  }}
                >
                  {problema.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '.9rem', fontWeight: 900, color: 'var(--dark)', marginBottom: '.2rem' }}>
                    {problema.title}
                  </h4>
                  <p style={{ fontSize: '.8rem', margin: 0 }}>{problema.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
