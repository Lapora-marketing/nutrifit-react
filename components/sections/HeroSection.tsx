'use client'

import { useProfile } from '@/components/ProfileContext'
import { useUser } from '@/components/UserContext'

export function HeroSection() {
  const { currentProfile } = useProfile()
  const { userPreferences } = useUser()

  if (!currentProfile) return null

  const greeting = userPreferences?.nombre ? `${userPreferences.nombre}, ` : ''

  return (
    <section id="hero" style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)', padding: 0 }}>
      <div style={{ display: 'flex', flexDirection: 'column', padding: '2.5rem 1.25rem 0', maxWidth: 680, margin: '0 auto' }}>
        {/* Hook */}
        <div
          style={{
            fontSize: '.82rem',
            fontWeight: 900,
            color: 'var(--ac)',
            textTransform: 'uppercase',
            letterSpacing: '.07em',
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
            marginBottom: '.9rem',
          }}
        >
          <span style={{ display: 'block', width: 24, height: 2.5, background: 'var(--ac)', borderRadius: 2 }} />
          {currentProfile.heroBadge}
        </div>

        {/* H1 */}
        <h1 style={{ marginBottom: '.6rem' }}>
          {greeting}
          {currentProfile.heroH1.split('<span>').map((part, i) => {
            if (i === 0) return <span key={i}>{part}</span>
            const [spanContent, rest] = part.split('</span>')
            return (
              <span key={i}>
                <em className="hi">{spanContent}</em>
                {rest}
              </span>
            )
          })}
        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--gray)', margin: '.75rem 0 1.5rem' }}>
          {currentProfile.heroSub}{' '}
          <strong style={{ color: 'var(--dark)' }}>Y vuelve a sentirte tú misma otra vez 💫</strong>
        </p>

        {/* CTA */}
        <a
          href="#oferta"
          className="btn btn-rap btn-xl btn-full"
          style={{ maxWidth: 420 }}
        >
          ✨ Quiero empezar — Mi plan personalizado
        </a>
        <p style={{ fontSize: '.78rem', fontWeight: 700, color: 'var(--gray)', textAlign: 'center', marginTop: '.65rem' }}>
          ⚡ Empieza con una sesión gratis de diagnóstico inicial
        </p>

        {/* Social proof */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <span className="stars" style={{ fontSize: '1rem' }}>★★★★★</span>
          <p style={{ fontSize: '.8rem', fontWeight: 700, color: 'var(--gray)', margin: 0 }}>
            <strong style={{ color: 'var(--dark)' }}>+200 pacientes</strong> ya transformaron su vida con este método
          </p>
        </div>

        {/* Banner emocional */}
        <div
          style={{
            background: `linear-gradient(135deg, var(--ac) 0%, var(--ac-dark, var(--rap-dark)) 100%)`,
            borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
            padding: '2rem 1.5rem',
            marginTop: '2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              content: '""',
              position: 'absolute',
              top: -60,
              right: -60,
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: 'rgba(255,255,255,.06)',
            }}
          />
          <span
            style={{
              fontSize: '4.5rem',
              display: 'block',
              marginBottom: '.75rem',
              filter: 'drop-shadow(0 4px 12px rgba(0,0,0,.3))',
            }}
          >
            {currentProfile.emoji}
          </span>
          <p
            style={{
              fontStyle: 'italic',
              fontWeight: 800,
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,.92)',
              margin: 0,
              position: 'relative',
            }}
          >
            "{currentProfile.medico} — {currentProfile.medicoRole}"
          </p>
        </div>
      </div>
    </section>
  )
}
