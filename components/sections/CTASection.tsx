'use client'

import { useProfile } from '@/components/ProfileContext'

export function CTASection() {
  const { currentProfile } = useProfile()
  if (!currentProfile) return null

  return (
    <section
      id="cierre"
      style={{
        padding: '4rem 0 5rem',
        background: 'var(--bg-elevated)',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative orbs */}
      <div
        style={{
          position: 'absolute',
          top: -100,
          left: '15%',
          width: 250,
          height: 250,
          borderRadius: '50%',
          background: `rgba(${currentProfile.colorRgb}, 0.08)`,
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -120,
          right: '10%',
          width: 280,
          height: 280,
          borderRadius: '50%',
          background: 'rgba(14,165,233,0.06)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-tight" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <div style={{ display: 'inline-block', marginBottom: '1rem' }} className="app-tag">
          ✨ Empieza hoy
        </div>

        <h2 style={{ marginBottom: '.85rem', maxWidth: 480, margin: '0 auto .85rem' }}>
          Tu mejor versión{' '}
          <span style={{ color: 'var(--ac)' }}>empieza hoy</span>
        </h2>

        <p
          style={{
            maxWidth: 440,
            margin: '0 auto 2rem',
            fontWeight: 700,
            fontSize: '.95rem',
          }}
        >
          {currentProfile.ctaSub}
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '.7rem',
            maxWidth: 380,
            margin: '0 auto',
          }}
        >
          <a href="#oferta" className="btn btn-rap btn-xl btn-full">
            ✨ Empezar mi programa
          </a>
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa btn-xl btn-full"
          >
            💬 Hablar por WhatsApp
          </a>
        </div>

        {/* Trust row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}
        >
          {[
            { ico: '🔒', text: 'Pago seguro' },
            { ico: '🛡️', text: 'Garantía 4 sem' },
            { ico: '📋', text: 'Sin contratos' },
            { ico: '👨‍⚕️', text: 'Médicos reales' },
          ].map((item, i) => (
            <span
              key={i}
              style={{
                fontSize: '.72rem',
                fontWeight: 800,
                color: 'var(--gray)',
                display: 'flex',
                alignItems: 'center',
                gap: '.3rem',
              }}
            >
              <span>{item.ico}</span>
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
