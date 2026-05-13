'use client'

import { useProfile } from '@/components/ProfileContext'

export function Nav() {
  const { currentProfile } = useProfile()

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 px-5 sm:px-8 py-3.5"
      style={{
        background: 'rgba(8,14,26,0.96)',
        borderColor: `rgba(${currentProfile?.colorRgb || '255,255,255'}, 0.15)`,
      }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="font-black text-base tracking-wide flex items-center gap-1.5">
          Nutrifit
          <span style={{ color: currentProfile?.color }}>App</span>
        </div>

        <ul className="hidden md:flex gap-6 list-none">
          {[
            { label: 'El Problema', href: '#problema' },
            { label: 'El Programa', href: '#programa' },
            { label: 'Resultados', href: '#resultados' },
            { label: 'Planes', href: '#planes' },
          ].map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-bold uppercase tracking-wider text-[rgba(255,255,255,0.5)] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#planes"
          className="btn-ripple px-4 py-2 rounded-lg text-xs font-bold text-white transition-all duration-300 hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${currentProfile?.color || '#be185d'}, rgba(${currentProfile?.colorRgb || '190,24,93'}, 0.75))`,
          }}
        >
          Unirme ahora
        </a>
      </div>
    </nav>
  )
}
