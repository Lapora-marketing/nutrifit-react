'use client'

import { useProfile } from '@/components/ProfileContext'

export function Footer() {
  const { currentProfile } = useProfile()

  return (
    <footer className="bg-[#040A13] border-t border-[rgba(255,255,255,0.08)] px-6 md:px-10 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="font-black text-lg tracking-wider flex items-center gap-2 mb-4">
              Nutrifit
              <span style={{ color: currentProfile?.color }}>App</span>
            </div>
            <p className="text-sm text-[rgba(255,255,255,0.5)]">
              Academia Médica especializada en nutrición y transformación corporal.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Producto</h4>
            <ul className="space-y-2 text-sm text-[rgba(255,255,255,0.5)]">
              <li><a href="#programa" className="hover:text-white transition-colors">El Programa</a></li>
              <li><a href="#planes" className="hover:text-white transition-colors">Planes</a></li>
              <li><a href="#resultados" className="hover:text-white transition-colors">Resultados</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Contacto</h4>
            <ul className="space-y-2 text-sm text-[rgba(255,255,255,0.5)]">
              <li><a href="mailto:info@nutrifit.app" className="hover:text-white transition-colors">Email</a></li>
              <li><a href="https://wa.me/57" className="hover:text-white transition-colors">WhatsApp</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-[rgba(255,255,255,0.5)]">
              <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.08)] pt-8 text-center text-sm text-[rgba(255,255,255,0.35)]">
          <p>© 2026 Nutrifit App. Todos los derechos reservados.</p>
          <p className="mt-2">Hecho por <a href="https://lapora.co" className="hover:text-[rgba(255,255,255,0.5)] transition-colors">Lapora Marketing Digital</a></p>
        </div>
      </div>
    </footer>
  )
}
