'use client'

import { useProfile } from '@/components/ProfileContext'
import { useUser } from '@/components/UserContext'
import Image from 'next/image'

export function HeroSection() {
  const { currentProfile } = useProfile()
  const { userPreferences } = useUser()
  if (!currentProfile) return null

  const firstName = userPreferences?.nombre?.split(' ')[0] || ''

  return (
    <section id="hero" style={{ background: 'var(--bg)', padding: '2rem 0 4rem' }}>
      <div className="container-nut">
        {/* HERO — Aisle-style two-column color block */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
            gap: 0,
            borderRadius: 'var(--radius-card)',
            overflow: 'hidden',
            position: 'relative',
            minHeight: '520px',
          }}
          className="hero-grid"
        >
          {/* LEFT — green editorial block */}
          <div
            style={{
              background: 'var(--dark)',
              padding: '3rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              minHeight: 480,
            }}
            className="animate-fadeIn"
          >
            <div>
              <h1 style={{ color: 'var(--white)', marginBottom: '1.5rem' }} className="animate-fadeUp">
                <span style={{ display: 'block' }}>Plan</span>
                <span className="serif" style={{ display: 'block', color: 'var(--ac-mid)', fontSize: '0.85em', paddingLeft: '1.5rem' }}>
                  para
                </span>
                <span style={{ display: 'block' }}>cada mamá</span>
              </h1>
              <p
                style={{
                  color: 'rgba(255,255,255,.7)',
                  fontWeight: 700,
                  maxWidth: 320,
                  marginTop: '2rem',
                }}
                className="animate-fadeUp delay-200"
              >
                {firstName && `${firstName}, `}recupera tu energía y tu cuerpo postparto con un{' '}
                <strong style={{ color: '#fff' }}>protocolo médico real</strong>.
              </p>
            </div>

            <a
              href="#oferta"
              className="arrow-link animate-fadeUp delay-300"
              style={{ color: 'var(--white)', marginTop: '2rem' }}
            >
              EMPEZAR AHORA <span style={{ fontSize: '1.1rem' }}>→</span>
            </a>

            {/* Decorative dots */}
            <div
              className="deco-dots animate-float"
              style={{ bottom: 30, left: '40%', opacity: 0.4 }}
            />
          </div>

          {/* RIGHT — mamita photo on warm bg */}
          <div
            style={{
              background: 'var(--bg-warm)',
              padding: '2rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
            className="animate-fadeIn delay-200"
          >
            {/* Decorative blobs */}
            <div
              className="deco-blob animate-floatBlob"
              style={{
                top: '-30px',
                right: '-30px',
                width: 180,
                height: 180,
                background: 'var(--ac)',
                opacity: 0.18,
              }}
            />
            <div
              className="deco-blob animate-floatBlob"
              style={{
                bottom: '-50px',
                left: '-30px',
                width: 130,
                height: 130,
                background: 'var(--amber)',
                opacity: 0.25,
                animationDelay: '-3s',
              }}
            />

            {/* Photo */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '3/4',
                maxWidth: 320,
                borderRadius: 'var(--radius-card)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-soft)',
                zIndex: 2,
              }}
            >
              <Image
                src="/mamitas/mami-2.jpeg"
                alt="Mamá con su bebé al atardecer"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Floating "Take the quiz"-style pill */}
            <a
              href="#oferta"
              className="floating-pill"
              style={{
                background: 'var(--ac)',
                bottom: '8%',
                right: '8%',
              }}
            >
              EMPEZAR<br />MI PLAN ✨
            </a>
          </div>
        </div>

        {/* Social proof strip below hero */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginTop: '2rem',
            padding: '1rem 0',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <span className="stars" style={{ fontSize: '1.05rem' }}>★★★★★</span>
            <p style={{ fontSize: '.85rem', fontWeight: 700, margin: 0, color: 'var(--dark)' }}>
              <strong>+200 mamás</strong> ya recuperaron su abdomen con este método
            </p>
          </div>
          <a href="#programa" className="arrow-link">
            VER CÓMO FUNCIONA <span>→</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </section>
  )
}
