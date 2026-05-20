'use client'

import { useEffect, useState } from 'react'

interface Credential {
  icon: string
  label: string
  sub: string
}

// Real medical credentials & endorsements (replace with logo SVGs when available)
const CREDENTIALS: Credential[] = [
  { icon: '🎓', label: 'Universidad El Bosque', sub: 'Bogotá · Egresado 2018' },
  { icon: '🩺', label: 'Reg. médico INVIMA', sub: 'Vigente · Verificable' },
  { icon: '🏥', label: 'Asoc. Nutrición Clínica', sub: 'Miembro activo' },
  { icon: '🔬', label: 'Especialista en Postparto', sub: 'Certificación 2022' },
  { icon: '🌿', label: 'Medicina Funcional', sub: 'IFM Trained Provider' },
  { icon: '📋', label: 'Habilitación Min. Salud', sub: 'Colombia · 2024' },
]

interface TrustBadgesProps {
  /** Number of columns to display in the carousel */
  columns?: number
}

export function TrustBadges({ columns = 2 }: TrustBadgesProps) {
  const cycleInterval = 2400 // ms per credential

  return (
    <section
      style={{
        background: 'var(--bg-elevated)',
        padding: '2rem 1.25rem',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <span
            style={{
              fontSize: '.62rem',
              fontWeight: 900,
              color: 'var(--gray)',
              textTransform: 'uppercase',
              letterSpacing: '.12em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.5rem',
            }}
          >
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--gray-soft)' }} />
            Avalado y respaldado por
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--gray-soft)' }} />
          </span>
        </div>

        {/* Carousel grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: '.75rem',
          }}
        >
          {Array.from({ length: columns }).map((_, i) => (
            <CredentialColumn
              key={i}
              index={i}
              cycleInterval={cycleInterval}
              columnCount={columns}
            />
          ))}
        </div>

        {/* Footer line */}
        <p
          style={{
            textAlign: 'center',
            marginTop: '1rem',
            fontSize: '.7rem',
            color: 'var(--gray-light)',
            fontWeight: 700,
          }}
        >
          📋 Todos los registros médicos son verificables · Más info en la sección legal
        </p>
      </div>
    </section>
  )
}

// === Animated column with cycling credentials ===
interface ColumnProps {
  index: number
  cycleInterval: number
  columnCount: number
}

function CredentialColumn({ index, cycleInterval, columnCount }: ColumnProps) {
  // Each column starts at a different credential
  const [position, setPosition] = useState(index)

  useEffect(() => {
    // Stagger each column's start time
    const startDelay = index * 600

    const start = setTimeout(() => {
      const interval = setInterval(() => {
        setPosition(p => (p + columnCount) % CREDENTIALS.length)
      }, cycleInterval)

      return () => clearInterval(interval)
    }, startDelay)

    return () => clearTimeout(start)
  }, [index, cycleInterval, columnCount])

  const current = CREDENTIALS[position]

  return (
    <div
      key={position}
      style={{
        background: 'var(--bg-soft)',
        borderRadius: 'var(--r)',
        padding: '.85rem',
        height: '4rem',
        display: 'flex',
        alignItems: 'center',
        gap: '.7rem',
        overflow: 'hidden',
        position: 'relative',
        animation: 'credSlide .55s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      }}
    >
      <span
        style={{
          fontSize: '1.5rem',
          flexShrink: 0,
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,.05))',
        }}
      >
        {current.icon}
      </span>
      <div style={{ minWidth: 0 }}>
        <p
          style={{
            fontSize: '.78rem',
            fontWeight: 900,
            color: 'var(--dark)',
            margin: 0,
            lineHeight: 1.2,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {current.label}
        </p>
        <p
          style={{
            fontSize: '.65rem',
            fontWeight: 700,
            color: 'var(--gray)',
            margin: '.15rem 0 0',
            lineHeight: 1.2,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {current.sub}
        </p>
      </div>

      <style jsx>{`
        @keyframes credSlide {
          0% {
            opacity: 0;
            transform: translateY(8px);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
      `}</style>
    </div>
  )
}
