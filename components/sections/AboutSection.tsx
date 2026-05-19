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
          <span style={{ color: 'var(--ac)' }}>contigo todos los días</span>
        </h2>
        <p style={{ marginBottom: '1.75rem', fontWeight: 700 }}>
          No es coaching genérico ni dietas restrictivas. Es un protocolo diseñado por
          especialistas que respeta tu cuerpo, tu lactancia y tu tiempo.
        </p>

        {/* ===== DOCTOR BANNER (pink gradient + photo right) ===== */}
        <div
          className="anim-pop"
          style={{
            position: 'relative',
            borderRadius: 'var(--r-xl)',
            overflow: 'hidden',
            aspectRatio: '16 / 7',
            minHeight: '11rem',
            background: `linear-gradient(135deg, var(--ac) 0%, var(--ac-dark) 100%)`,
            boxShadow: `0 12px 32px -8px rgba(${currentProfile.colorRgb}, 0.35)`,
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'stretch',
          }}
        >
          {/* Decorative gradient circle */}
          <div
            style={{
              position: 'absolute',
              top: '-3rem',
              left: '-3rem',
              width: '10rem',
              height: '10rem',
              borderRadius: '50%',
              background: 'rgba(255,255,255,.06)',
              pointerEvents: 'none',
            }}
          />

          {/* Left: text */}
          <div
            style={{
              flex: '1 1 58%',
              padding: '1.25rem 1rem 1.25rem 1.35rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 2,
              minWidth: 0,
            }}
          >
            <h3
              style={{
                color: '#fff',
                fontSize: 'clamp(1.25rem, 4.5vw, 1.75rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                marginBottom: '.5rem',
                letterSpacing: '-.02em',
                textShadow: '0 2px 8px rgba(0,0,0,.18)',
              }}
            >
              {doctor.fullName}
            </h3>
            <p
              style={{
                color: 'rgba(255,255,255,.92)',
                fontSize: '.85rem',
                fontWeight: 700,
                lineHeight: 1.45,
                margin: 0,
                textShadow: '0 1px 4px rgba(0,0,0,.15)',
              }}
            >
              {doctor.subtitle}
            </p>

            {/* En línea pill */}
            <div
              style={{
                marginTop: '.85rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '.4rem',
                background: 'rgba(255,255,255,.18)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                padding: '.3rem .65rem',
                borderRadius: 999,
                width: 'fit-content',
                border: '1px solid rgba(255,255,255,.18)',
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#22c55e',
                  display: 'inline-block',
                  boxShadow: '0 0 0 3px rgba(34,197,94,.25)',
                  animation: 'pulse-red 2s infinite',
                }}
              />
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

          {/* Right: doctor photo */}
          <div
            style={{
              flex: '1 1 42%',
              position: 'relative',
              alignSelf: 'stretch',
              overflow: 'hidden',
            }}
          >
            {doctor.photo ? (
              <>
                <Image
                  src={doctor.photo}
                  alt={doctor.fullName}
                  fill
                  sizes="(max-width: 768px) 45vw, 320px"
                  priority
                  style={{
                    objectFit: 'cover',
                    objectPosition: '72% 22%',
                  }}
                />
                {/* Subtle left edge fade (5% only) so photo joins gradient cleanly */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(90deg, rgba(${currentProfile.colorRgb}, 0.65) 0%, rgba(${currentProfile.colorRgb}, 0.15) 8%, transparent 18%)`,
                    pointerEvents: 'none',
                  }}
                />
              </>
            ) : (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '6rem',
                  opacity: 0.35,
                  filter: 'drop-shadow(0 4px 12px rgba(0,0,0,.25))',
                }}
              >
                {currentProfile.emoji}
              </div>
            )}
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

        {/* ===== Features grid (2x2) ===== */}
        <div
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
