'use client'

import { useProfile } from '@/components/ProfileContext'

export function Nav() {
  const { currentProfile } = useProfile()

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(248, 250, 252, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        padding: '.85rem 1.25rem',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '.45rem',
            fontWeight: 900,
          }}
        >
          <span
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '.6rem',
              background: 'var(--dark)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
            }}
          >
            🥗
          </span>
          <span style={{ fontSize: '1rem', color: 'var(--dark)' }}>
            Nutrifit
            <span style={{ color: 'var(--ac)' }}>App</span>
          </span>
        </a>

        {/* Right links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
          <a
            href="#programa"
            className="nav-link"
            style={{
              fontSize: '.78rem',
              fontWeight: 800,
              color: 'var(--gray)',
              padding: '.5rem .75rem',
              borderRadius: '.6rem',
              transition: 'background .2s',
            }}
          >
            Programa
          </a>
          <a
            href="#resultados"
            className="nav-link"
            style={{
              fontSize: '.78rem',
              fontWeight: 800,
              color: 'var(--gray)',
              padding: '.5rem .75rem',
              borderRadius: '.6rem',
              transition: 'background .2s',
            }}
          >
            Resultados
          </a>
          <a
            href="/app"
            className="nav-link"
            aria-label="Abrir la aplicación"
            style={{
              fontSize: '.78rem',
              fontWeight: 800,
              color: 'var(--gray)',
              padding: '.5rem .75rem',
              borderRadius: '.6rem',
              transition: 'background .2s',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.35rem',
            }}
          >
            <span style={{ fontSize: '.9rem' }}>📱</span>
            <span>App</span>
          </a>
          <a
            href="#oferta"
            className="btn btn-rap"
            style={{ padding: '.5rem 1.1rem', fontSize: '.78rem' }}
          >
            Empezar
          </a>
        </div>
      </div>

      <style jsx>{`
        :global(.nav-link:hover) {
          background: var(--bg-soft);
          color: var(--dark);
        }
        @media (max-width: 540px) {
          :global(.nav-link) { display: none; }
        }
      `}</style>
    </nav>
  )
}
