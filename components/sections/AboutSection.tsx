'use client'

import Image from 'next/image'
import { useProfile } from '@/components/ProfileContext'

export function AboutSection() {
  const { currentProfile } = useProfile()
  if (!currentProfile) return null

  return (
    <section className="section" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div className="container-nut">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* LEFT — Text */}
          <div>
            <h2 style={{ color: 'var(--dark)', marginBottom: '1.5rem' }}>
              Tu nuevo<br />
              <span className="serif">capítulo</span> de mamá.
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--gray)', marginBottom: '2rem', maxWidth: 460 }}>
              Las mamás merecen un plan seguro, efectivo y diseñado por médicos. Un sistema que
              funciona, se siente bien, y respeta tu lactancia, tu cuerpo y tu tiempo.
            </p>

            {/* Features 2x2 grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.25rem',
                maxWidth: 460,
              }}
            >
              {[
                { icon: '🌿', text: 'Seguro\nen lactancia' },
                { icon: '👐', text: 'Diseñado\npara mamás' },
                { icon: '⏱️', text: '15 min\nal día' },
                { icon: '😊', text: '100% médicos\nespecialistas' },
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '.75rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.4rem' }}>{f.icon}</span>
                  <p
                    style={{
                      fontSize: '.85rem',
                      fontWeight: 700,
                      color: 'var(--dark)',
                      lineHeight: 1.35,
                      whiteSpace: 'pre-line',
                      margin: 0,
                    }}
                  >
                    {f.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Photo with floating pill */}
          <div style={{ position: 'relative' }}>
            {/* Decorative blob behind */}
            <div
              className="deco-blob animate-floatBlob"
              style={{
                position: 'absolute',
                top: -20,
                right: -20,
                width: 280,
                height: 280,
                background: 'var(--amber)',
                opacity: 0.35,
                zIndex: 0,
              }}
            />
            <div
              className="deco-dots"
              style={{
                top: '-40px',
                left: '-20px',
                width: 80,
                height: 80,
                zIndex: 1,
              }}
            />

            {/* Photo */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '3/4',
                borderRadius: 'var(--radius-card)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-soft)',
                zIndex: 2,
              }}
            >
              <Image
                src="/mamitas/mami-3.jpeg"
                alt="Mamá feliz con su bebé"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Floating quiz button */}
            <a
              href="#oferta"
              className="floating-pill"
              style={{
                background: 'var(--dots-blue)',
                bottom: '8%',
                right: '-5%',
              }}
            >
              EMPEZAR<br />MI PROCESO
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  )
}
