'use client'

export function UrgencyBar() {
  return (
    <div
      className="text-center text-white"
      style={{
        background: 'var(--dark)',
        padding: '.6rem 1rem',
        fontSize: '.8rem',
        fontWeight: 800,
        letterSpacing: '.02em',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: '2px solid var(--ac)',
      }}
    >
      ⚠️ Precio de lanzamiento — Solo quedan{' '}
      <strong style={{ color: 'var(--amber)' }}>8 cupos</strong> · Termina pronto
    </div>
  )
}
