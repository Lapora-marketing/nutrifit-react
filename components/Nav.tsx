'use client'

import { useProfile } from '@/components/ProfileContext'
import { Button } from '@/components/atoms'

export function Nav() {
  const { currentProfile } = useProfile()

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 backdrop-blur-xl border-b transition-colors duration-400 px-6 md:px-10 py-3.5 flex items-center justify-between" style={{ background: 'rgba(8,14,26,0.96)', borderColor: `rgba(${currentProfile?.colorRgb || '255,255,255'}, 0.25)` }}>
      <div className="font-black text-lg tracking-wider flex items-center gap-2">
        Nutrifit
        <span style={{ color: currentProfile?.color }}>App</span>
      </div>

      <ul className="hidden md:flex gap-7 list-none">
        <li>
          <a href="#problema" className="text-xs font-bold letter-spacing-0.8px text-transform-uppercase text-[rgba(255,255,255,0.6)] hover:text-[var(--ac)] transition-colors duration-300">
            El Problema
          </a>
        </li>
        <li>
          <a href="#programa" className="text-xs font-bold letter-spacing-0.8px text-transform-uppercase text-[rgba(255,255,255,0.6)] hover:text-[var(--ac)] transition-colors duration-300">
            El Programa
          </a>
        </li>
        <li>
          <a href="#resultados" className="text-xs font-bold letter-spacing-0.8px text-transform-uppercase text-[rgba(255,255,255,0.6)] hover:text-[var(--ac)] transition-colors duration-300">
            Resultados
          </a>
        </li>
        <li>
          <a href="#planes" className="text-xs font-bold letter-spacing-0.8px text-transform-uppercase text-[rgba(255,255,255,0.6)] hover:text-[var(--ac)] transition-colors duration-300">
            Planes
          </a>
        </li>
      </ul>

      <Button variant="primary" size="sm" className="hidden md:inline-flex">
        Unirme ahora
      </Button>
    </nav>
  )
}
