import { ImageResponse } from 'next/og'

export const runtime = 'edge'

/**
 * Mobile screenshot for PWA manifest (form_factor: narrow).
 * 430x932 = iPhone Pro Max dimensions.
 */
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#f8fafc',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Status bar */}
        <div
          style={{
            height: 50,
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 30px',
            fontSize: 18,
            fontWeight: 700,
            color: '#0f172a',
          }}
        >
          <span>9:41</span>
          <span style={{ fontSize: 14, color: '#64748b' }}>● ● ●</span>
        </div>

        {/* Header */}
        <div
          style={{
            background: '#ffffff',
            padding: '20px 24px',
            borderBottom: '1px solid #f1f5f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 14, color: '#64748b', fontWeight: 700 }}>Hola, Sofía 👋</div>
            <div style={{ fontSize: 22, fontWeight: 900, color: '#0f172a' }}>Mi día</div>
          </div>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              background: 'linear-gradient(135deg, #be185d, #9d1550)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: 20,
              fontWeight: 900,
            }}
          >
            S
          </div>
        </div>

        {/* Hero card */}
        <div
          style={{
            margin: '20px 24px',
            background: 'linear-gradient(135deg, #be185d, #9d1550)',
            borderRadius: 28,
            padding: '24px 22px',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 800, opacity: 0.85, letterSpacing: 1 }}>
            FASE 2 · SEMANA 3
          </div>
          <div style={{ fontSize: 22, fontWeight: 900, lineHeight: 1.15 }}>
            Sigues firme, Sofía
          </div>
          <div style={{ fontSize: 14, opacity: 0.9, fontWeight: 700 }}>
            Próxima consulta en 4 días
          </div>
          {/* Progress bar */}
          <div
            style={{
              height: 6,
              background: 'rgba(255,255,255,0.2)',
              borderRadius: 99,
              marginTop: 6,
              overflow: 'hidden',
              display: 'flex',
            }}
          >
            <div
              style={{
                width: '65%',
                height: '100%',
                background: '#ffffff',
                borderRadius: 99,
              }}
            />
          </div>
        </div>

        {/* Habit cards */}
        <div style={{ margin: '0 24px', display: 'flex', gap: 12 }}>
          {[
            { ico: '💧', label: 'Agua', val: '6/8' },
            { ico: '😊', label: 'Ánimo', val: '4/5' },
            { ico: '🏃', label: 'Movimiento', val: '✓' },
          ].map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                background: '#ffffff',
                borderRadius: 20,
                padding: 14,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
                border: '1px solid #f1f5f9',
              }}
            >
              <div style={{ fontSize: 26 }}>{h.ico}</div>
              <div style={{ fontSize: 18, fontWeight: 900, color: '#0f172a' }}>{h.val}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b' }}>{h.label}</div>
            </div>
          ))}
        </div>

        {/* Today section */}
        <div style={{ margin: '24px 24px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 900, color: '#64748b', letterSpacing: 1, textTransform: 'uppercase' }}>
            HOY
          </div>
          {[
            { ico: '🥗', t: 'Desayuno · 8:00', sub: 'Avena con frutos rojos' },
            { ico: '💊', t: 'Suplemento · 12:00', sub: 'Vitamina D + B12' },
            { ico: '🩺', t: 'Mensaje del médico', sub: 'Nuevos exámenes listos' },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: '#ffffff',
                borderRadius: 18,
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                border: '1px solid #f1f5f9',
              }}
            >
              <div style={{ fontSize: 24 }}>{item.ico}</div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 14, fontWeight: 900, color: '#0f172a' }}>{item.t}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#64748b' }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom nav */}
        <div
          style={{
            marginTop: 'auto',
            background: '#ffffff',
            borderTop: '1px solid #f1f5f9',
            padding: '12px 0 30px',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          {[
            { ico: '🏠', label: 'Inicio', active: true },
            { ico: '📚', label: 'Academia' },
            { ico: '🧪', label: 'Lab' },
            { ico: '🩺', label: 'Médico' },
          ].map((nav, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 3,
                opacity: nav.active ? 1 : 0.5,
              }}
            >
              <div style={{ fontSize: 22 }}>{nav.ico}</div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 900,
                  color: nav.active ? '#be185d' : '#94a3b8',
                  letterSpacing: 0.5,
                  textTransform: 'uppercase',
                }}
              >
                {nav.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: 430,
      height: 932,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400',
      },
    }
  )
}
