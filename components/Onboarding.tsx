'use client'

import { useState } from 'react'
import { useProfile } from '@/components/ProfileContext'
import { PERFILES } from '@/lib/perfiles'
import { Button } from '@/components/atoms'

export function Onboarding() {
  const { currentProfile, setProfile } = useProfile()
  const [selected, setSelected] = useState<'rap' | 'kids' | 'fit' | null>('rap')
  const [canContinue, setCanContinue] = useState(false)
  const [completed, setCompleted] = useState(false)

  const handleSelect = (id: 'rap' | 'kids' | 'fit') => {
    setSelected(id)
    setCanContinue(true)
  }

  const handleContinue = () => {
    if (selected) {
      setProfile(selected)
      setCompleted(true)
    }
  }

  if (completed) return null

  return (
    <div className="fixed inset-0 z-500 bg-gradient-to-b from-[#080E1A] to-[#0e1724] flex flex-col items-center justify-center px-6 py-10 overflow-y-auto transition-all duration-600" style={{ opacity: completed ? 0 : 1, pointerEvents: completed ? 'none' : 'auto' }}>
      <div className="text-center mb-12">
        <div className="text-sm text-[rgba(255,255,255,0.5)] mb-6">
          <strong className="text-white">Nutrifit</strong><span style={{ color: '#be185d' }}>App</span> · Academia Médica
        </div>
        <h2 className="text-3xl md:text-4xl font-black mb-4">¿Para quién es tu programa?</h2>
        <p className="text-base text-[rgba(255,255,255,0.55)] max-w-sm">Selecciona tu perfil. El contenido de esta página se adaptará exactamente a ti.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl w-full mb-8">
        {Object.values(PERFILES).map((perfil) => (
          <button
            key={perfil.id}
            onClick={() => handleSelect(perfil.id)}
            className="text-center p-8 rounded-3xl border-2 cursor-pointer transition-all duration-300 relative overflow-hidden group"
            style={{
              background: selected === perfil.id ? `rgba(${perfil.colorRgb}, 0.08)` : 'rgba(255,255,255,0.04)',
              borderColor: selected === perfil.id ? perfil.color : 'rgba(255,255,255,0.08)',
              transform: selected === perfil.id ? 'translateY(-6px)' : 'translateY(0)',
              boxShadow: selected === perfil.id ? `0 20px 40px rgba(${perfil.colorRgb}, 0.2)` : 'none',
            }}
          >
            {selected === perfil.id && (
              <div
                className="absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-black"
                style={{ background: perfil.color }}
              >
                ✓
              </div>
            )}
            <div className="text-4xl mb-4">{perfil.emoji}</div>
            <h3 className="text-lg font-bold mb-2">{perfil.label}</h3>
            <p className="text-xs text-[rgba(255,255,255,0.5)] leading-relaxed mb-4">
              {perfil.label === 'MamaRAP' && 'Recuperación postparto · Cierre de diástasis · Core y suelo pélvico'}
              {perfil.label === 'Kids & Loncheras' && 'Nutrición infantil · Loncheras inteligentes · Concentración y cerebro'}
              {perfil.label === 'Cuchos Fit' && 'Metabolismo 35+ · Reset hormonal · Fuerza y composición corporal'}
            </p>
            <div className="text-xs text-[rgba(255,255,255,0.35)] font-bold border-t border-[rgba(255,255,255,0.08)] pt-4 mt-4">
              {perfil.medico}
            </div>
          </button>
        ))}
      </div>

      <Button
        variant="primary"
        size="lg"
        onClick={handleContinue}
        disabled={!canContinue}
        className="w-full max-w-sm mb-4"
        style={{
          opacity: canContinue ? 1 : 0.35,
          boxShadow: canContinue ? `0 12px 32px rgba(${PERFILES[selected || 'rap'].colorRgb}, 0.45)` : 'none',
        }}
      >
        Entrar a mi programa →
      </Button>
      <p className="text-xs text-[rgba(255,255,255,0.28)] text-center">⚠️ Tu selección personaliza toda la experiencia</p>
    </div>
  )
}
