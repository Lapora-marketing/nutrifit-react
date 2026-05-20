'use client'

import Image from 'next/image'
import { useProfile } from '@/components/ProfileContext'

// Doctor photo + meta per profile
const DOCTOR_INFO: Record<
  'rap' | 'kids' | 'fit',
  { photo: string | null; fullName: string; subtitle: string; university?: string }
> = {
  rap: {
    photo: '/img/doctor/juan-pablo.png',
    fullName: 'Juan Pablo Hernandez V.',
    subtitle:
      'Plataforma de acompañamiento diario para mamás que quieren sentirse bien sin complicarse.',
    university: 'Universidad El Bosque',
  },
  kids: {
    photo: null,
    fullName: 'Nutrióloga Pediátrica',
    subtitle: 'Plan alimentario y suplementación adaptada a la etapa de tu hijo.',
  },
  fit: {
    photo: null,
    fullName: 'Equipo médico Fit',
    subtitle: 'Protocolo nutricional para recomposición corporal en adultos activos.',
  },
}

export function AboutSection() {
  const { currentProfile } = useProfile()
  if (!currentProfile) return null

  const doctor = DOCTOR_INFO[currentProfile.id]

  return (
    <section id="medico" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container-tight">

        {/* Section header */}
        <div className="app-tag">🩺 Quién te acompaña</div>
        <h2 style={{ marginBottom: '0.75rem' }}>
          Un médico real,{' '}
          <span className="shimmer-text">contigo todos los días</span>
        </h2>
        <p style={{ marginBottom: '1.75rem', fontWeight: 700 }}>
          No es coaching genérico ni dietas restrictivas. Es un protocolo diseñado por
          especialistas que respeta tu cuerpo, tu lactancia y tu tiempo.
        </p>

        {/* ===== DOCTOR BANNER (constrained to content width, no overflow) ===== */}
        <div
          className="anim-pop doctor-banner"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
            borderRadius: 'var(--r-xl)',
            overflow: 'hidden',
            aspectRatio: '16 / 6',
            minHeight: '11rem',
            background: `linear-gradient(135deg, var(--ac) 0%, var(--ac-dark) 100%)`,
            boxShadow: `0 8px 24px -8px rgba(${currentProfile.colorRgb}, 0.3)`,
            marginBottom: '1.5rem',
            isolation: 'isolate',
          }}
        >
          {/* Border beam — very subtle, only visible on left/text side */}
          <span
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              padding: '1px',
              background: `conic-gradient(from 200deg, transparent 0deg, transparent 90deg, rgba(255,255,255,0.4) 130deg, rgba(255,255,255,0.7) 150deg, rgba(255,255,255,0.4) 170deg, transparent 210deg, transparent 360deg)`,
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              animation: 'doctorBeam 8s linear infinite',
              pointerEvents: 'none',
              zIndex: 3,
              opacity: 0.4,
            }}
          />
          {/* ===== FULL BACKGROUND PHOTO ===== */}
          {doctor.photo ? (
            <Image
              src={doctor.photo}
              alt={doctor.fullName}
              fill
              sizes="(max-width: 768px) 100vw, 680px"
              priority
              style={{
                objectFit: 'cover',
                objectPosition: '70% 35%',
              }}
            />
          ) : (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: '2rem',
                fontSize: '6rem',
                opacity: 0.35,
              }}
            >
              {currentProfile.emoji}
            </div>
          )}

          {/* ===== PINK GRADIENT OVERLAY (sharper cutoff — no pink bleed on photo) ===== */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(90deg,
                var(--ac) 0%,
                var(--ac) 42%,
                rgba(${currentProfile.colorRgb}, 0.95) 45%,
                rgba(${currentProfile.colorRgb}, 0.55) 48%,
                rgba(${currentProfile.colorRgb}, 0.1) 51%,
                transparent 53%)`,
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          {/* ===== Decorative top-left blob ===== */}
          <div
            style={{
              position: 'absolute',
              top: '-3rem',
              left: '-3rem',
              width: '10rem',
              height: '10rem',
              borderRadius: '50%',
              background: 'rgba(255,255,255,.07)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          {/* ===== TEXT CONTENT (absolute, left side) ===== */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              padding: '1.35rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              zIndex: 2,
              maxWidth: '60%',
            }}
          >
            <h3
              style={{
                color: '#fff',
                fontSize: 'clamp(1.35rem, 5.5vw, 2.1rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                marginBottom: '.55rem',
                letterSpacing: '-.025em',
                textShadow: '0 2px 10px rgba(0,0,0,.25)',
              }}
            >
              {doctor.fullName}
            </h3>
            <p
              style={{
                color: 'rgba(255,255,255,.95)',
                fontSize: '.85rem',
                fontWeight: 700,
                lineHeight: 1.4,
                margin: 0,
                textShadow: '0 1px 6px rgba(0,0,0,.2)',
              }}
            >
              {doctor.subtitle}
            </p>

            {/* En línea pill — dynamic-island style breathing */}
            <div
              style={{
                marginTop: '.9rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '.45rem',
                background: 'rgba(0,0,0,.35)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                padding: '.35rem .8rem',
                borderRadius: 999,
                width: 'fit-content',
                border: '1px solid rgba(255,255,255,.18)',
                animation: 'diBreathe 2.8s ease-in-out infinite',
              }}
            >
              <span
                style={{
                  position: 'relative',
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#22c55e',
                  display: 'inline-block',
                  boxShadow: '0 0 8px rgba(34,197,94,.7)',
                }}
              >
                {/* Pulsing outer ring */}
                <span
                  aria-hidden
                  style={{
                    position: 'absolute',
                    inset: -4,
                    borderRadius: '50%',
                    border: '2px solid #22c55e',
                    animation: 'ringPulse 2s ease-out infinite',
                    opacity: 0.6,
                  }}
                />
              </span>
              <span
                style={{
                  fontSize: '.65rem',
                  fontWeight: 900,
                  color: '#fff',
                  textTransform: 'uppercase',
                  letterSpacing: '.06em',
                }}
              >
                En línea
              </span>
            </div>
          </div>
        </div>

        {/* Credentials line */}
        {doctor.university && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '.5rem',
              fontSize: '.78rem',
              fontWeight: 700,
              color: 'var(--gray)',
              marginBottom: '1.5rem',
              padding: '0 .25rem',
            }}
          >
            <span style={{ fontSize: '.95rem' }}>🎓</span>
            <span>
              <strong style={{ color: 'var(--dark)' }}>{doctor.university}</strong> · Especialista en {currentProfile.medicoRole}
            </span>
          </div>
        )}

        {/* ===== Features grid (2x2 mobile, 4x1 desktop) ===== */}
        <div
          className="features-grid-2x2"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '.75rem',
          }}
        >
          {[
            { icon: '🌿', label: 'Seguro en lactancia', bg: '#d1fae5' },
            { icon: '👨‍⚕️', label: 'Diseñado por médicos', bg: '#e0f2fe' },
            { icon: '⏱️', label: '15 min al día', bg: '#fef3c7' },
            { icon: '💯', label: 'Resultados medibles', bg: '#fce7f3' },
          ].map((f, i) => (
            <div
              key={i}
              className="app-card-flat anim-fade-up"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '.75rem',
                padding: '.85rem 1rem',
                animationDelay: `${i * 80}ms`,
                opacity: 0,
              }}
            >
              <div
                className="habit-icon"
                style={{
                  background: f.bg,
                  width: '2.25rem',
                  height: '2.25rem',
                  fontSize: '1rem',
                }}
              >
                {f.icon}
              </div>
              <p
                style={{
                  fontSize: '.82rem',
                  fontWeight: 900,
                  color: 'var(--dark)',
                  margin: 0,
                  lineHeight: 1.25,
                }}
              >
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
