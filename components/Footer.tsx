'use client'

export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--dark)',
        color: 'rgba(255,255,255,.45)',
        textAlign: 'center',
        padding: '2.25rem 1.25rem',
        fontSize: '.75rem',
        fontWeight: 700,
      }}
    >
      <p>
        © 2026 <strong style={{ color: 'rgba(255,255,255,.8)' }}>Nutrifit Academia</strong>.
        Todos los derechos reservados.
      </p>
      <p style={{ marginTop: '.5rem' }}>
        Hecho por{' '}
        <a
          href="https://lapora.co"
          style={{ color: 'rgba(255,255,255,.6)', textDecoration: 'underline' }}
        >
          Lapora Marketing Digital
        </a>
      </p>
      <p style={{ marginTop: '.85rem', fontSize: '.7rem' }}>
        <a href="#" style={{ color: 'rgba(255,255,255,.45)' }}>Términos</a>
        {'  ·  '}
        <a href="#" style={{ color: 'rgba(255,255,255,.45)' }}>Privacidad</a>
      </p>
    </footer>
  )
}
