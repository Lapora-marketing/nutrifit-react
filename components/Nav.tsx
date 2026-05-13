'use client'

import { useProfile } from '@/components/ProfileContext'

export function Nav() {
  const { currentProfile } = useProfile()

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 99,
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        padding: '.85rem 1.25rem',
      }}
    >
      <div
        style={{
          maxWidth: 680,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '.3rem', fontWeight: 900, color: 'var(--dark)' }}>
          <span style={{ fontSize: '1.1rem' }}>🥗</span>
          <span style={{ fontSize: '1rem' }}>Nutrifit</span>
          <span style={{ color: 'var(--ac)', fontSize: '1rem' }}>App</span>
        </a>

        <a
          href="#oferta"
          className="btn btn-rap"
          style={{ padding: '.5rem 1.1rem', fontSize: '.78rem' }}
        >
          Empezar
        </a>
      </div>
    </nav>
  )
}
