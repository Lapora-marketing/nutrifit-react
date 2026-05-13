'use client'

import { useProfile } from '@/components/ProfileContext'

export function Footer() {
  const { currentProfile } = useProfile()

  return (
    <footer
      className="px-5 sm:px-8 pt-12 pb-8"
      style={{
        background: '#040A13',
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="font-black text-base tracking-wide flex items-center gap-1.5 mb-3">
              Nutrifit
              <span style={{ color: currentProfile?.color }}>App</span>
            </div>
            <p className="text-sm text-[rgba(255,255,255,0.4)] leading-relaxed">
              Academia Médica especializada en nutrición y transformación corporal.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white mb-4">Producto</h4>
            <ul className="space-y-2.5 text-sm text-[rgba(255,255,255,0.45)]">
              <li><a href="#programa" className="hover:text-white transition-colors">El Programa</a></li>
              <li><a href="#planes" className="hover:text-white transition-colors">Planes</a></li>
              <li><a href="#resultados" className="hover:text-white transition-colors">Resultados</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white mb-4">Contacto</h4>
            <ul className="space-y-2.5 text-sm text-[rgba(255,255,255,0.45)]">
              <li><a href="mailto:info@nutrifit.app" className="hover:text-white transition-colors">Email</a></li>
              <li><a href="https://wa.me/57" className="hover:text-white transition-colors">WhatsApp</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm text-[rgba(255,255,255,0.45)]">
              <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
            </ul>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[rgba(255,255,255,0.3)]"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p>© 2026 Nutrifit App. Todos los derechos reservados.</p>
          <p>
            Hecho por{' '}
            <a href="https://lapora.co" className="hover:text-[rgba(255,255,255,0.5)] transition-colors">
              Lapora Marketing Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
