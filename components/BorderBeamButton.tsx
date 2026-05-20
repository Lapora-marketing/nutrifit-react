'use client'

import { type CSSProperties, type ReactNode } from 'react'

interface BorderBeamButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  /** Inner background color (default: dark) */
  bg?: string
  /** Beam gradient color (default: accent) */
  beamColor?: string
  className?: string
  style?: CSSProperties
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

/**
 * Premium CTA button with a light beam continuously traveling around the border.
 * Inspired by cult-ui's border-beam-button, implemented with pure CSS (no deps).
 */
export function BorderBeamButton({
  children,
  onClick,
  href,
  bg = 'var(--dark)',
  beamColor,
  className,
  style,
  size = 'lg',
}: BorderBeamButtonProps) {
  const sizes: Record<NonNullable<BorderBeamButtonProps['size']>, CSSProperties> = {
    sm: { padding: '.6rem 1.1rem', fontSize: '.82rem', borderRadius: '.7rem' },
    md: { padding: '.85rem 1.5rem', fontSize: '.92rem', borderRadius: '.85rem' },
    lg: { padding: '1.05rem 1.75rem', fontSize: '.98rem', borderRadius: '1rem' },
    xl: { padding: '1.15rem 2rem', fontSize: '1.05rem', borderRadius: '1.15rem' },
  }

  const Tag: 'a' | 'button' = href ? 'a' : 'button'

  return (
    <Tag
      onClick={onClick}
      href={href}
      className={className}
      style={{
        ...sizes[size],
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '.5rem',
        fontWeight: 900,
        color: '#fff',
        cursor: 'pointer',
        textDecoration: 'none',
        border: 'none',
        background: 'transparent',
        overflow: 'hidden',
        isolation: 'isolate',
        fontFamily: 'inherit',
        lineHeight: 1.2,
        transition: 'transform .25s cubic-bezier(0.22, 1, 0.36, 1)',
        ...style,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Spinning conic-gradient = the "beam" */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          background: `conic-gradient(from 0deg, transparent 0deg, transparent 270deg, ${beamColor || 'var(--ac)'} 320deg, #fff 350deg, ${beamColor || 'var(--ac)'} 360deg)`,
          animation: 'bbBeamSpin 3.5s linear infinite',
          zIndex: -2,
        }}
      />

      {/* Inner background mask (creates the "border" effect) */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          inset: '1.5px',
          borderRadius: 'inherit',
          background: bg,
          zIndex: -1,
        }}
      />

      {/* Hover sheen */}
      <span
        aria-hidden
        className="bb-sheen"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          background: 'linear-gradient(135deg, rgba(255,255,255,.18), transparent 50%)',
          opacity: 0,
          transition: 'opacity .3s ease',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>

      <style jsx>{`
        @keyframes bbBeamSpin {
          to {
            transform: rotate(360deg);
          }
        }
        a:hover .bb-sheen,
        button:hover .bb-sheen {
          opacity: 1;
        }
      `}</style>
    </Tag>
  )
}
