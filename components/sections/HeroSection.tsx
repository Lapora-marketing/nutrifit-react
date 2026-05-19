'use client'

import { useProfile } from '@/components/ProfileContext'
import { useUser } from '@/components/UserContext'
import Image from 'next/image'

// Background images per profile
const HERO_IMG: Record<'rap' | 'kids' | 'fit', string | null> = {
  rap: '/img/mamitas/hero-park.jpeg',
  kids: null,
  fit: null,
}

export function HeroSection() {
  const { currentProfile } = useProfile()
  const { userPreferences } = useUser()
  if (!currentProfile) return null

  const firstName = userPreferences?.nombre?.split(' ')[0] || ''
  const heroImg = HERO_IMG[currentProfile.id]

  return (
    <section id="hero" style={{ background: 'var(--bg)', padding: '1.5rem 0 3rem' }}>
      <div className="container-app">

        {/* Top greeting */}
        <div
          className="anim-fade-up"
          style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1.25rem' }}
        >
          <span className="anim-float" style={{ fontSize: '1.75rem', display: 'inline-block' }}>
            👋
          </span>
          <div>
            <p
              style={{
                fontSize: '.7rem',
                fontWeight: 900,
                color: 'var(--gray)',
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                margin: 0,
                lineHeight: 1,
              }}
            >
              Hola{firstName && `, ${firstName}`}
            </p>
            <p style={{ fontSize: '.95rem', fontWeight: 900, color: 'var(--dark)', margin: '.25rem 0 0', lineHeight: 1.1 }}>
              Tu transformación empieza aquí
            </p>
          </div>
        </div>

        {/* APP-STYLE HERO BANNER WITH BACKGROUND IMAGE */}
        <div
          className="hero-banner-app anim-pop"
          style={{
            padding: 0,
            marginBottom: '1rem',
            minHeight: '22rem',
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          {/* Background photo (right-side priority) */}
          {heroImg && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
                borderRadius: 'inherit',
              }}
            >
              <Image
                src={heroImg}
                alt={`${currentProfile.label} hero`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 900px"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'right center',
                }}
              />
              {/* Gradient overlay for text readability */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(95deg,
                    var(--ac) 0%,
                    var(--ac) 40%,
                    rgba(${currentProfile.colorRgb}, 0.85) 55%,
                    rgba(${currentProfile.colorRgb}, 0.55) 70%,
                    rgba(${currentProfile.colorRgb}, 0.15) 100%)`,
                }}
              />
            </div>
          )}

          {/* Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              padding: '1.75rem',
              maxWidth: heroImg ? '70%' : '85%',
              width: '100%',
            }}
          >
            <span
              style={{
                fontSize: '.65rem',
                fontWeight: 900,
                background: 'rgba(255,255,255,0.22)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
                padding: '.35rem .8rem',
                borderRadius: '.6rem',
                textTransform: 'uppercase',
                letterSpacing: '.08em',
                display: 'inline-block',
                marginBottom: '.85rem',
                color: '#fff',
                border: '1px solid rgba(255,255,255,.2)',
              }}
            >
              {currentProfile.heroBadge}
            </span>

            <h1
              style={{
                color: '#fff',
                fontSize: 'clamp(1.5rem, 4.5vw, 2rem)',
                lineHeight: 1.15,
                marginBottom: '.65rem',
                textShadow: '0 2px 8px rgba(0,0,0,.15)',
              }}
            >
              {currentProfile.heroH1.replace(/<\/?span>/g, '')}
            </h1>

            <p
              style={{
                fontSize: '.85rem',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.92)',
                marginBottom: '1.25rem',
                lineHeight: 1.5,
                textShadow: '0 1px 4px rgba(0,0,0,.15)',
              }}
            >
              {currentProfile.heroSub}
            </p>

            {/* Progress bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
              <div className="app-progress" style={{ flex: 1 }}>
                <div className="app-progress-fill" style={{ width: '35%' }} />
              </div>
              <span style={{ fontSize: '.8rem', fontWeight: 900, color: '#fff' }}>35%</span>
            </div>
          </div>

          {/* Fallback decorative emoji (when no image) */}
          {!heroImg && (
            <div className="hero-banner-emoji anim-float">{currentProfile.emoji}</div>
          )}
        </div>

        {/* Stats Strip */}
        <div
          className="app-card-flat anim-fade-up delay-200"
          style={{
            display: 'flex',
            overflow: 'hidden',
            background: 'var(--bg-elevated)',
            marginBottom: '1.25rem',
          }}
        >
          {currentProfile.stats.map((stat, i, arr) => (
            <div
              key={i}
              style={{
                flex: 1,
                padding: '1rem .5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--dark)', lineHeight: 1 }}>
                {stat.num}
              </span>
              <span
                style={{
                  fontSize: '.62rem',
                  fontWeight: 800,
                  color: 'var(--gray-light)',
                  textAlign: 'center',
                  lineHeight: 1.25,
                  marginTop: '.3rem',
                  textTransform: 'uppercase',
                  letterSpacing: '.04em',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA + social proof */}
        <div
          className="anim-fade-up delay-300"
          style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', marginBottom: '1.25rem' }}
        >
          <a href="#oferta" className="btn btn-rap btn-xl btn-full">
            ✨ Empezar mi transformación
          </a>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.6rem' }}>
            <span style={{ color: 'var(--amber)', fontSize: '.95rem', letterSpacing: '-.04em' }}>
              ★★★★★
            </span>
            <p style={{ fontSize: '.78rem', fontWeight: 800, color: 'var(--gray)', margin: 0 }}>
              <strong style={{ color: 'var(--dark)' }}>+500 pacientes</strong> activas en el programa
            </p>
          </div>
        </div>

        {/* Scroll down hint */}
        <div
          className="anim-bounce-down anim-fade-in delay-700"
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            cursor: 'pointer',
            color: 'var(--gray-light)',
            fontSize: '.7rem',
            fontWeight: 900,
            letterSpacing: '.12em',
            textTransform: 'uppercase',
          }}
          onClick={() => document.getElementById('espejo')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <p style={{ margin: 0 }}>Sigue leyendo</p>
          <p style={{ margin: '.2rem 0 0', fontSize: '1.1rem' }}>↓</p>
        </div>
      </div>
    </section>
  )
}
