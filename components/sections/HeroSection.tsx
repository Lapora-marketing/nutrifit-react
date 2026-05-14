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
    <section id="hero" style={{ background: 'var(--bg)', padding: '1.5rem 0 3rem' }}>
      <div className="container-app">

        {/* Top greeting */}
        <div
          className="anim-fade-up"
          style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1.25rem' }}
        >
          <span style={{ fontSize: '1.75rem' }}>👋</span>
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
            <p style={{ fontSize: '.9rem', fontWeight: 800, color: 'var(--dark)', margin: '.2rem 0 0', lineHeight: 1 }}>
              Tu transformación empieza aquí
            </p>
          </div>
        </div>

        {/* APP-STYLE HERO BANNER */}
        <div
          className="hero-banner-app anim-pop"
          style={{ padding: '1.75rem', marginBottom: '1rem' }}
        >
          <div style={{ position: 'relative', zIndex: 2, maxWidth: '75%' }}>
            <span
              style={{
                fontSize: '.65rem',
                fontWeight: 900,
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(4px)',
                padding: '.3rem .7rem',
                borderRadius: '.5rem',
                textTransform: 'uppercase',
                letterSpacing: '.08em',
                display: 'inline-block',
                marginBottom: '.6rem',
                color: '#fff',
              }}
            >
              {currentProfile.heroBadge}
            </span>

            <h1 style={{ color: '#fff', fontSize: '1.65rem', lineHeight: 1.15, marginBottom: '.4rem' }}>
              {currentProfile.heroH1.replace(/<\/?span>/g, '')}
            </h1>

            <p style={{ fontSize: '.85rem', fontWeight: 700, color: 'rgba(255,255,255,0.85)', marginBottom: '1rem', lineHeight: 1.45 }}>
              {currentProfile.heroSub}
            </p>

            {/* Progress bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
              <div className="app-progress" style={{ flex: 1 }}>
                <div className="app-progress-fill" style={{ width: '35%' }} />
              </div>
              <span style={{ fontSize: '.75rem', fontWeight: 900, color: '#fff' }}>35%</span>
            </div>
          </div>

          {/* Floating decorative emoji */}
          <div className="hero-banner-emoji anim-float">{currentProfile.emoji}</div>
        </div>

        {/* Stats Strip (matches app exactly) */}
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '.6rem',
            }}
          >
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
          onClick={() => document.getElementById('programa')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <p style={{ margin: 0 }}>Ver cómo funciona</p>
          <p style={{ margin: '.2rem 0 0', fontSize: '1.1rem' }}>↓</p>
        </div>
      </div>
    </section>
  )
}
