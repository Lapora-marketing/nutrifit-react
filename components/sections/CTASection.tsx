'use client'

import { useProfile } from '@/components/ProfileContext'

export function CTASection() {
  const { currentProfile } = useProfile()
  if (!currentProfile) return null

  return (
    <section
      id="cierre"
      style={{
        padding: '6rem 0',
        background: `linear-gradient(180deg, var(--white) 0%, var(--ac-light) 100%)`,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="deco-blob animate-floatBlob"
        style={{
          position: 'absolute',
          top: '20%',
          left: '8%',
          width: 200,
          height: 200,
          background: 'var(--amber)',
          opacity: 0.2,
        }}
      />
      <div
        className="deco-blob animate-floatBlob"
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: 250,
          height: 250,
          background: 'var(--ac)',
          opacity: 0.15,
          animationDelay: '-4s',
        }}
      />

      <div className="container-narrow" style={{ position: 'relative', zIndex: 2 }}>
        <div className="tag" style={{ margin: '0 auto 1rem' }}>✨ Empieza hoy</div>

        <h2 style={{ maxWidth: 600, margin: '0 auto 1.25rem' }}>
          Tu mejor versión<br />
          <span className="serif">empieza</span> hoy.
        </h2>

        <p
          style={{
            maxWidth: 440,
            margin: '0 auto 2rem',
            fontSize: '.95rem',
            fontWeight: 700,
          }}
        >
          {currentProfile.ctaSub}
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '.85rem',
            alignItems: 'center',
            maxWidth: 380,
            margin: '0 auto',
          }}
        >
          <a href="#oferta" className="btn btn-rap btn-xl btn-full">
            ✨ Empezar mi programa hoy
          </a>
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark btn-full"
          >
            💬 Hablar primero por WhatsApp
          </a>
        </div>

        {/* Trust row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
            marginTop: '1.5rem',
          }}
        >
          {[
            { ico: '🔒', text: 'Pago seguro' },
            { ico: '🛡️', text: 'Garantía 4 semanas' },
            { ico: '📋', text: 'Sin contratos' },
            { ico: '👨‍⚕️', text: 'Médicos avalados' },
          ].map((item, i) => (
            <span
              key={i}
              style={{
                fontSize: '.74rem',
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
