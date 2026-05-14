'use client'

export function UrgencyBar() {
  return (
    <div
      style={{
        background: 'var(--dark)',
        color: '#fff',
        padding: '.55rem 1rem',
        textAlign: 'center',
        fontSize: '.75rem',
        fontWeight: 800,
        letterSpacing: '.01em',
        position: 'sticky',
        top: 0,
        zIndex: 60,
        borderBottom: '2px solid var(--ac)',
      }}
    >
      <span style={{ marginRight: '.4rem' }}>⚡</span>
      Precio de lanzamiento — Solo quedan{' '}
      <strong style={{ color: 'var(--amber)' }}>8 cupos</strong>
      <span style={{ opacity: 0.6, margin: '0 .5rem' }}>·</span>
      <span style={{ opacity: 0.85 }}>Termina pronto</span>
    </div>
  )
}
