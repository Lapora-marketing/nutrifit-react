'use client'

import { useState } from 'react'
import { useProfile } from '@/components/ProfileContext'
import { PAYMENT_METHODS, PAYMENT_TRUST_SIGNALS, buildWaUrl, type PaymentMethod } from '@/lib/paymentMethods'

export function PagoSection() {
  const { currentProfile } = useProfile()
  const [region, setRegion] = useState<'colombia' | 'international'>('colombia')

  if (!currentProfile) return null

  const methods = PAYMENT_METHODS.filter(m => m.region === region)

  return (
    <section
      id="pago"
      className="section"
      style={{ background: 'var(--bg-soft)' }}
    >
      <div className="container-tight">
        <div className="app-tag">💳 Pago fácil y seguro</div>

        <h2 style={{ marginBottom: '.75rem' }}>
          Paga como te quede{' '}
          <span style={{ color: 'var(--ac)' }}>más fácil</span>
        </h2>

        <p style={{ fontWeight: 700, marginBottom: '1.5rem' }}>
          Aceptamos todos los medios de pago — desde Colombia o donde estés en el mundo.
        </p>

        {/* Region Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '.3rem',
            padding: '.3rem',
            background: 'var(--bg-elevated)',
            borderRadius: '999px',
            border: '1px solid var(--border-strong)',
            marginBottom: '1.5rem',
            maxWidth: 360,
          }}
        >
          {[
            { id: 'colombia', label: '🇨🇴 Colombia' },
            { id: 'international', label: '🌎 Internacional' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setRegion(tab.id as 'colombia' | 'international')}
              style={{
                flex: 1,
                padding: '.65rem 1rem',
                borderRadius: 999,
                border: 'none',
                background: region === tab.id ? 'var(--dark)' : 'transparent',
                color: region === tab.id ? '#fff' : 'var(--gray)',
                fontSize: '.82rem',
                fontWeight: 900,
                cursor: 'pointer',
                transition: 'all .25s ease',
                fontFamily: 'inherit',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Payment Methods Grid */}
        <div
          key={region}
          className="anim-fade-in"
          style={{ display: 'grid', gap: '.85rem' }}
        >
          {methods.map((method, i) => (
            <PaymentCard key={method.id} method={method} delay={i * 60} />
          ))}
        </div>

        {/* Trust signals */}
        <div
          style={{
            marginTop: '1.75rem',
            padding: '1.25rem',
            background: 'var(--bg-elevated)',
            borderRadius: 'var(--r-lg)',
            border: '1px solid var(--border-strong)',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '.85rem',
          }}
        >
          {PAYMENT_TRUST_SIGNALS.map((signal, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: '.55rem',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{signal.icon}</span>
              <span
                style={{
                  fontSize: '.78rem',
                  fontWeight: 800,
                  color: 'var(--dark)',
                  lineHeight: 1.3,
                }}
              >
                {signal.label}
              </span>
            </div>
          ))}
        </div>

        {/* Help line */}
        <div
          style={{
            marginTop: '1rem',
            textAlign: 'center',
            fontSize: '.82rem',
            fontWeight: 700,
            color: 'var(--gray)',
          }}
        >
          ¿Dudas con el pago?{' '}
          <a
            href={buildWaUrl('Hola, tengo dudas sobre el pago del programa Nutrifit.')}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--ac)', fontWeight: 900, textDecoration: 'underline' }}
          >
            Escríbenos por WhatsApp →
          </a>
        </div>
      </div>
    </section>
  )
}

function PaymentCard({ method, delay }: { method: PaymentMethod; delay: number }) {
  return (
    <a
      href={buildWaUrl(method.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="anim-fade-up"
      style={{
        background: 'var(--bg-elevated)',
        border: '2px solid var(--border-strong)',
        borderRadius: 'var(--r-lg)',
        padding: '1.1rem 1.25rem',
        display: 'flex',
        gap: '.95rem',
        alignItems: 'center',
        boxShadow: 'var(--shadow-card)',
        animationDelay: `${delay}ms`,
        opacity: 0,
        textDecoration: 'none',
        transition: 'all .25s ease',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = method.brandColor
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = 'var(--shadow-soft)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border-strong)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'var(--shadow-card)'
      }}
    >
      {/* Popular ribbon */}
      {method.popular && (
        <div
          style={{
            position: 'absolute',
            top: '.6rem',
            right: '.6rem',
            background: 'var(--amber)',
            color: '#fff',
            fontSize: '.6rem',
            fontWeight: 900,
            padding: '.15rem .55rem',
            borderRadius: 999,
            textTransform: 'uppercase',
            letterSpacing: '.05em',
          }}
        >
          ⭐ {method.badge || 'Popular'}
        </div>
      )}

      {/* Brand icon */}
      <div
        style={{
          width: '3rem',
          height: '3rem',
          borderRadius: '.85rem',
          background: method.brandBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          flexShrink: 0,
        }}
      >
        {method.emoji}
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.15rem' }}>
          <h4
            style={{
              fontSize: '.95rem',
              fontWeight: 900,
              color: 'var(--dark)',
              margin: 0,
            }}
          >
            {method.name}
          </h4>
          {!method.popular && method.badge && (
            <span
              style={{
                fontSize: '.6rem',
                fontWeight: 900,
                padding: '.1rem .5rem',
                borderRadius: 999,
                background: method.brandBg,
                color: method.brandColor,
                textTransform: 'uppercase',
                letterSpacing: '.04em',
              }}
            >
              {method.badge}
            </span>
          )}
        </div>
        <p
          style={{
            fontSize: '.78rem',
            color: 'var(--gray)',
            margin: 0,
            lineHeight: 1.4,
            fontWeight: 600,
          }}
        >
          {method.description}
        </p>
      </div>

      {/* Arrow */}
      <span
        style={{
          fontSize: '1rem',
          color: method.brandColor,
          fontWeight: 900,
          flexShrink: 0,
        }}
      >
        →
      </span>
    </a>
  )
}
