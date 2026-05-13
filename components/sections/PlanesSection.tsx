'use client'

import { useProfile } from '@/components/ProfileContext'

export function PlanesSection() {
  const { currentProfile } = useProfile()
  if (!currentProfile) return null

  const incluye = [
    { ico: '📱', text: 'Acceso completo a la App NutriFit' },
    { ico: '🩺', text: '4 sesiones de consulta médica personalizadas' },
    { ico: '📋', text: 'Plan alimentario diseñado para tu caso' },
    { ico: '🎥', text: 'Biblioteca de clases grabadas (acceso de por vida)' },
    { ico: '👥', text: 'Grupo privado de pacientes activas' },
    { ico: '📊', text: 'Reporte mensual de tu progreso' },
    { ico: '💬', text: 'Soporte directo por WhatsApp' },
  ]

  return (
    <section
      id="oferta"
      className="section"
      style={{ background: 'var(--white)', position: 'relative' }}
    >
      <div
        className="deco-dots"
        style={{ top: 40, left: '5%', width: 90, height: 90, opacity: 0.6 }}
      />
      <div className="container-narrow" style={{ position: 'relative' }}>
        <div className="tag">💎 Tu inversión</div>

        <h2 style={{ marginBottom: '1.25rem' }}>
          Todo lo que necesitas<br />
          en un <span className="serif">solo programa</span>.
        </h2>

        <p style={{ fontWeight: 700, marginTop: '.75rem' }}>
          Sin contratos anuales, sin letra pequeña. Resultados o devolvemos tu dinero.
        </p>

        {/* Pricing box dark */}
        <div
          style={{
            background: 'linear-gradient(145deg, var(--dark) 0%, #1e1b4b 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.25rem 1.75rem',
            color: '#fff',
            textAlign: 'center',
            margin: '1.75rem 0',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative orbs */}
          <div
            style={{
              position: 'absolute',
              top: -70,
              right: -70,
              width: 220,
              height: 220,
              borderRadius: '50%',
              background: `rgba(${currentProfile.colorRgb}, 0.12)`,
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -50,
              left: -50,
              width: 160,
              height: 160,
              borderRadius: '50%',
              background: 'rgba(14,165,233,.08)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '1rem', textDecoration: 'line-through', color: 'rgba(255,255,255,.35)', marginBottom: '.15rem' }}>
              $890.000 COP
            </div>
            <div
              style={{
                fontSize: '3.2rem',
                fontWeight: 900,
                color: 'var(--amber)',
                lineHeight: 1,
                marginBottom: '.2rem',
              }}
            >
              $490.000
            </div>
            <div style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.5)', marginBottom: '1.1rem' }}>
              COP · total 3 meses
            </div>

            <div
              style={{
                display: 'inline-block',
                background: 'rgba(16,185,129,.18)',
                border: '1px solid rgba(16,185,129,.35)',
                color: '#6ee7b7',
                padding: '.35rem 1rem',
                borderRadius: 999,
                fontSize: '.78rem',
                fontWeight: 900,
                marginBottom: '1.5rem',
              }}
            >
              ⚡ Ahorras $400.000 hoy
            </div>

            {/* Includes list */}
            <div
              style={{
                textAlign: 'left',
                display: 'grid',
                gap: '.7rem',
                margin: '1.5rem 0',
              }}
            >
              {incluye.map((inc, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '.7rem',
                    alignItems: 'flex-start',
                    fontSize: '.85rem',
                    color: 'rgba(255,255,255,.88)',
                    fontWeight: 700,
                  }}
                >
                  <span style={{ flexShrink: 0, marginTop: '.1rem', fontSize: '.95rem' }}>
                    {inc.ico}
                  </span>
                  <span>{inc.text}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="btn btn-rap btn-xl btn-full"
              style={{ marginTop: '1rem' }}
            >
              🚀 Quiero mi programa — $490k
            </a>

            <p style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.5)', marginTop: '.85rem' }}>
              💳 Solo 4 cupos disponibles · Pago seguro
            </p>
          </div>
        </div>

        {/* Guarantee */}
        <div
          style={{
            background: 'var(--ac-light)',
            border: '2px solid var(--ac-mid)',
            borderRadius: 'var(--radius)',
            padding: '1.25rem',
            display: 'flex',
            gap: '.9rem',
            alignItems: 'flex-start',
            marginTop: '1.5rem',
          }}
        >
          <span style={{ fontSize: '2rem', flexShrink: 0 }}>🛡️</span>
          <div>
            <h4 style={{ fontSize: '.95rem', fontWeight: 900, color: 'var(--dark)', marginBottom: '.25rem' }}>
              Garantía de resultados de 4 semanas
            </h4>
            <p style={{ fontSize: '.82rem', margin: 0, fontWeight: 700 }}>
              Si en las primeras 4 semanas no hay resultados medibles, revisamos el protocolo sin costo
              adicional. Trabajamos con métricas claras desde el día 1.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
