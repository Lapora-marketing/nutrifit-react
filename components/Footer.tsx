'use client'

export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ac-dark, #9d1550)',
        color: 'rgba(255,255,255,.7)',
        padding: '4rem 1.5rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative dots */}
      <div
        className="deco-dots"
        style={{
          top: 30,
          right: '8%',
          width: 90,
          height: 90,
          backgroundImage: 'radial-gradient(circle, rgba(245,158,11,.7) 2.5px, transparent 3px)',
        }}
      />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Big editorial heading */}
        <div style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              color: 'rgba(255,255,255,0.95)',
              lineHeight: 0.9,
              fontFamily: 'var(--font-playfair), Playfair Display, Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              letterSpacing: '-0.02em',
            }}
          >
            Nutrifit.
          </h2>
        </div>

        {/* Links grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
            marginBottom: '3rem',
          }}
          className="footer-grid"
        >
          <div>
            <h4
              style={{
                color: 'rgba(255,255,255,0.95)',
                fontSize: '.78rem',
                textTransform: 'uppercase',
                letterSpacing: '.12em',
                marginBottom: '1rem',
              }}
            >
              Programa
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
              <li><a href="#programa">El sistema</a></li>
              <li><a href="#oferta">Planes</a></li>
              <li><a href="#resultados">Resultados</a></li>
            </ul>
          </div>

          <div>
            <h4
              style={{
                color: 'rgba(255,255,255,0.95)',
                fontSize: '.78rem',
                textTransform: 'uppercase',
                letterSpacing: '.12em',
                marginBottom: '1rem',
              }}
            >
              Contacto
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
              <li><a href="mailto:hola@nutrifit.app">Email</a></li>
              <li><a href="https://wa.me/573001234567">WhatsApp</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
            </ul>
          </div>

          <div>
            <h4
              style={{
                color: 'rgba(255,255,255,0.95)',
                fontSize: '.78rem',
                textTransform: 'uppercase',
                letterSpacing: '.12em',
                marginBottom: '1rem',
              }}
            >
              Equipo
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
              <li><a href="#">Nuestros médicos</a></li>
              <li><a href="#">Filosofía</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4
              style={{
                color: 'rgba(255,255,255,0.95)',
                fontSize: '.78rem',
                textTransform: 'uppercase',
                letterSpacing: '.12em',
                marginBottom: '1rem',
              }}
            >
              Legal
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
              <li><a href="#">Términos</a></li>
              <li><a href="#">Privacidad</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,.15)',
            fontSize: '.78rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ color: 'rgba(255,255,255,.6)', margin: 0 }}>
            © 2026 Nutrifit. Hecho con ♥ por{' '}
            <a
              href="https://lapora.co"
              style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'underline' }}
            >
              Lapora Marketing Digital
            </a>
          </p>
          <p style={{ color: 'rgba(255,255,255,.5)', fontStyle: 'italic', margin: 0 }}>
            Establecido 2023
          </p>
        </div>
      </div>

      <style jsx>{`
        a { color: rgba(255,255,255,0.7); transition: color .2s; }
        a:hover { color: rgba(255,255,255,0.95); }
        @media (max-width: 768px) {
          :global(.footer-grid) {
            grid-template-columns: 1fr 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </footer>
  )
}
