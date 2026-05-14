'use client'

import { useProfile } from '@/components/ProfileContext'

export function PlanesSection() {
  const { currentProfile } = useProfile()
  if (!currentProfile) return null

  const includes = [
    { icon: '📱', text: 'Acceso completo a la app' },
    { icon: '🩺', text: '4 sesiones de consulta médica' },
    { icon: '📋', text: 'Plan alimentario personalizado' },
    { icon: '🎥', text: 'Biblioteca de clases grabadas' },
    { icon: '👥', text: 'Grupo privado de pacientes' },
    { icon: '📊', text: 'Reporte mensual de progreso' },
    { icon: '💬', text: 'Soporte por WhatsApp' },
  ]

  return (
    <section
      id="oferta"
      className="section"
      style={{ background: 'var(--bg)' }}
    >
      <div className="container-tight">
        <div className="app-tag">💎 Tu inversión</div>

        <h2 style={{ marginBottom: '.75rem' }}>
          Todo en un <span style={{ color: 'var(--ac)' }}>solo programa</span>
        </h2>

        <p style={{ marginBottom: '1.75rem', fontWeight: 700 }}>
          Sin contratos anuales. Sin letra pequeña. Resultados o devolvemos tu dinero.
        </p>

        {/* Pricing card */}
        <div
          className="app-card"
          style={{
            padding: '1.75rem 1.5rem',
            background: 'linear-gradient(160deg, var(--dark) 0%, #1e1b4b 100%)',
            border: 'none',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative orbs */}
          <div
            style={{
              position: 'absolute',
              top: -50,
              right: -50,
              width: 180,
              height: 180,
              borderRadius: '50%',
              background: `rgba(${currentProfile.colorRgb}, 0.18)`,
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -40,
              left: -40,
              width: 140,
              height: 140,
              borderRadius: '50%',
              background: 'rgba(14,165,233,.1)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Top badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '.4rem',
                background: 'rgba(245,158,11,0.18)',
                color: 'var(--amber)',
                padding: '.35rem .8rem',
                borderRadius: '999px',
                fontSize: '.65rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '.08em',
                marginBottom: '1.25rem',
              }}
            >
              ⚡ Solo 4 cupos · Termina pronto
            </div>

            {/* Price */}
            <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
              <p style={{ fontSize: '.95rem', textDecoration: 'line-through', color: 'rgba(255,255,255,0.35)', margin: 0 }}>
                $890.000 COP
              </p>
              <p
                style={{
                  fontSize: '3rem',
                  fontWeight: 900,
                  color: 'var(--amber)',
                  margin: '.1rem 0',
                  lineHeight: 1,
                }}
              >
                $490.000
              </p>
              <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                COP · 3 meses · pago único
              </p>
            </div>

            {/* Savings pill */}
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  background: 'rgba(16,185,129,0.18)',
                  border: '1px solid rgba(16,185,129,0.35)',
                  color: '#6ee7b7',
                  padding: '.35rem 1rem',
                  borderRadius: '999px',
                  fontSize: '.75rem',
                  fontWeight: 900,
                }}
              >
                ✓ Ahorras $400.000 hoy
              </span>
            </div>

            {/* Includes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem', marginBottom: '1.5rem' }}>
              {includes.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '.65rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '1rem', flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ fontSize: '.82rem', fontWeight: 700, color: 'rgba(255,255,255,0.88)', lineHeight: 1.4 }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <a href="#" className="btn btn-rap btn-xl btn-full">
              🚀 Quiero mi programa
            </a>

            <p
              style={{
                fontSize: '.7rem',
                color: 'rgba(255,255,255,0.5)',
                marginTop: '.75rem',
                textAlign: 'center',
              }}
            >
              🔒 Pago seguro · 💳 Tarjetas, PSE, Nequi
            </p>
          </div>
        </div>

        {/* Guarantee card */}
        <div
          className="app-card-flat"
          style={{
            marginTop: '1.25rem',
            padding: '1.15rem 1.25rem',
            background: 'var(--ac-light)',
            border: '2px solid var(--ac)',
            display: 'flex',
            gap: '.85rem',
            alignItems: 'flex-start',
          }}
        >
          <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>🛡️</span>
          <div>
            <h4 style={{ fontSize: '.9rem', color: 'var(--ac-dark)', margin: '0 0 .15rem' }}>
              Garantía de 4 semanas
            </h4>
            <p style={{ fontSize: '.78rem', color: 'var(--ac-dark)', margin: 0, fontWeight: 700, lineHeight: 1.4 }}>
              Si no hay resultados medibles en las primeras 4 semanas, revisamos el protocolo sin costo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
