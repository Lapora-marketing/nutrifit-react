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
        background: 'rgba(254,252,248,0.92)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--border)',
        padding: '1rem 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        {/* Left links */}
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="nav-left">
          <a href="#problema" className="arrow-link" style={{ fontSize: '.72rem' }}>
            Problema
          </a>
          <a href="#programa" className="arrow-link" style={{ fontSize: '.72rem' }}>
            Programa
          </a>
        </div>

        {/* Center logo */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '.35rem',
            fontWeight: 900,
            color: 'var(--dark)',
            justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: '1.5rem' }} className="serif">nutrifit</span>
        </a>

        {/* Right links */}
        <div
          style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', justifyContent: 'flex-end' }}
          className="nav-right"
        >
          <a href="#resultados" className="arrow-link" style={{ fontSize: '.72rem' }} >
            Resultados
          </a>
          <a
            href="#oferta"
            className="btn btn-rap"
            style={{ padding: '.55rem 1.2rem', fontSize: '.78rem' }}
          >
            Empezar
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          :global(.nav-left), :global(.nav-right) {
            display: none !important;
          }
          :global(.nav-right) {
            display: flex !important;
            justify-content: flex-end !important;
          }
        }
      `}</style>
    </nav>
  )
}
