'use client'

import { useProfile } from '@/components/ProfileContext'

export function Footer() {
  const { currentProfile } = useProfile()

  return (
    <footer
      style={{
        background: 'var(--dark)',
        color: 'rgba(255,255,255,.55)',
        padding: '3rem 1.25rem 2rem',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Top: logo + tagline */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '.6rem',
            marginBottom: '1rem',
          }}
        >
          <span
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '.6rem',
              background: 'var(--bg-elevated)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
            }}
          >
            🥗
          </span>
          <span style={{ fontSize: '1rem', fontWeight: 900, color: '#fff' }}>
            Nutrifit
            <span style={{ color: currentProfile?.color }}>App</span>
          </span>
        </div>
        <p style={{ fontSize: '.85rem', maxWidth: 380, marginBottom: '2rem', color: 'rgba(255,255,255,.45)' }}>
          Academia médica especializada en nutrición y transformación corporal.
        </p>

        {/* Links */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}
          className="footer-grid"
        >
          {[
            { title: 'Producto', links: [['#programa', 'El sistema'], ['#oferta', 'Planes'], ['#resultados', 'Resultados']] },
            { title: 'Contacto', links: [['mailto:hola@nutrifit.app', 'Email'], ['https://wa.me/573001234567', 'WhatsApp'], ['https://instagram.com', 'Instagram']] },
            { title: 'Legal', links: [['#', 'Términos'], ['#', 'Privacidad'], ['#', 'Cookies']] },
          ].map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  color: '#fff',
                  fontSize: '.72rem',
                  textTransform: 'uppercase',
                  letterSpacing: '.1em',
                  marginBottom: '.85rem',
                }}
              >
                {col.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.55rem' }}>
                {col.links.map(([href, label]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="footer-link"
                      style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.55)' }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          style={{
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255,255,255,.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '.75rem',
            fontSize: '.72rem',
            color: 'rgba(255,255,255,.4)',
          }}
        >
          <p style={{ margin: 0 }}>© 2026 Nutrifit. Todos los derechos reservados.</p>
          <p style={{ margin: 0 }}>
            Hecho por{' '}
            <a
              href="https://lapora.co"
              className="footer-link"
              style={{ color: 'rgba(255,255,255,.7)' }}
            >
              Lapora Marketing Digital
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        :global(.footer-link) {
          transition: color .2s;
        }
        :global(.footer-link:hover) {
          color: rgba(255,255,255,.9);
        }
        @media (max-width: 540px) {
          :global(.footer-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </footer>
  )
}
