'use client'

import { useState } from 'react'
import { saveUserPreferences, type UserPreferences } from '@/lib/userPreferences'

interface FormularioOnboardingProps {
  onComplete: (prefs: UserPreferences) => void
}

const OBJETIVOS = [
  { value: 'bajar-peso', label: 'Bajar de peso', emoji: '🔥', desc: 'Quiero reducir grasa y sentirme mejor' },
  { value: 'ganar-masa', label: 'Ganar masa muscular', emoji: '💪', desc: 'Quiero un cuerpo más fuerte y definido' },
  { value: 'mejorar-salud', label: 'Mejorar mi salud', emoji: '❤️', desc: 'Quiero sentirme con más energía y vitalidad' },
  { value: 'otro', label: 'Otro objetivo', emoji: '🎯', desc: 'Tengo una meta específica diferente' },
]

const ACTIVIDADES = [
  { value: 'sedentario', label: 'Sedentario', emoji: '🪑', desc: 'Trabajo sentado, poco movimiento' },
  { value: 'leve', label: 'Actividad leve', emoji: '🚶', desc: '1-2 días de ejercicio por semana' },
  { value: 'moderado', label: 'Moderado', emoji: '🏃', desc: '3-4 días de ejercicio por semana' },
  { value: 'intenso', label: 'Intenso', emoji: '⚡', desc: '5 o más días de ejercicio' },
]

const HORARIOS = [
  { value: 'mañana', label: 'Mañana', emoji: '🌅', desc: '6am – 12pm' },
  { value: 'tarde', label: 'Tarde', emoji: '☀️', desc: '12pm – 6pm' },
  { value: 'noche', label: 'Noche', emoji: '🌙', desc: '6pm – 10pm' },
]

const STEPS = [
  { title: '¿Cómo te llamas?', sub: 'Personalizamos tu experiencia completa' },
  { title: '¿Cuál es tu objetivo?', sub: 'Diseñamos un plan exacto para lo que buscas' },
  { title: '¿Cuánto te mueves?', sub: 'Calculamos la intensidad ideal para ti' },
  { title: '¿Alergias o restricciones?', sub: 'Tu seguridad y salud son prioridad' },
  { title: '¿A qué hora entrenas?', sub: 'Optimizamos tu rutina según tu vida diaria' },
]

export function FormularioOnboarding({ onComplete }: FormularioOnboardingProps) {
  const [step, setStep] = useState(0) // 0 = intro
  const [formData, setFormData] = useState<Partial<UserPreferences>>({})
  const [direction, setDirection] = useState<'forward' | 'back'>('forward')

  const currentStep = step // 0 = intro, 1-5 = form steps

  const set = (field: keyof UserPreferences, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const next = () => {
    setDirection('forward')
    if (step === 0) { setStep(1); return }
    if (step < 5) { setStep(step + 1); return }
    // Submit
    if (formData.nombre && formData.objetivo && formData.nivelActividad &&
        formData.disponibilidad) {
      const prefs = { ...formData, alergias: formData.alergias || '' } as UserPreferences
      saveUserPreferences(prefs)
      onComplete(prefs)
    }
  }

  const back = () => {
    setDirection('back')
    setStep(s => Math.max(0, s - 1))
  }

  const canContinue = () => {
    if (step === 0) return true
    if (step === 1) return !!formData.nombre?.trim()
    if (step === 2) return !!formData.objetivo
    if (step === 3) return !!formData.nivelActividad
    if (step === 4) return true // optional
    if (step === 5) return !!formData.disponibilidad
    return false
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50 overflow-y-auto"
      style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #111827 50%, #0a0f1e 100%)' }}
    >
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #be185d 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }} />

      <div className="relative w-full max-w-md mx-auto my-auto">

        {/* ===== INTRO SCREEN ===== */}
        {step === 0 && (
          <div className="text-center animate-fadeInUp">
            {/* Logo / top */}
            <div className="mb-6">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl"
                style={{ background: 'rgba(190,24,93,0.15)', border: '1px solid rgba(190,24,93,0.3)' }}>
                🧬
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-white mb-2">
                Tu plan de nutrición <span style={{ color: '#be185d' }}>100% personalizado</span>
              </h1>
              <p className="text-[rgba(255,255,255,0.55)] text-sm md:text-base">
                Responde 5 preguntas rápidas y obtén tu diagnóstico nutricional gratuito
              </p>
            </div>

            {/* Social proof */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex -space-x-2">
                {['👩', '👨', '👩‍🦱', '🧑'].map((e, i) => (
                  <div key={i} className="w-8 h-8 rounded-full flex items-center justify-center text-sm border border-[#1a2234]"
                    style={{ background: 'rgba(255,255,255,0.08)' }}>
                    {e}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {'★★★★★'.split('').map((s, i) => (
                    <span key={i} className="text-yellow-400 text-xs">{s}</span>
                  ))}
                </div>
                <p className="text-[rgba(255,255,255,0.45)] text-xs">+2,847 personas ya lo completaron</p>
              </div>
            </div>

            {/* What you'll get */}
            <div className="rounded-2xl p-4 mb-6 text-left"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-xs font-bold text-[rgba(255,255,255,0.4)] uppercase tracking-wider mb-3">Obtendrás:</p>
              {[
                { icon: '🎯', text: 'Diagnóstico nutricional personalizado' },
                { icon: '📋', text: 'Plan de alimentación para tu objetivo' },
                { icon: '⚡', text: 'Rutina adaptada a tu ritmo de vida' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 mb-2 last:mb-0">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm text-[rgba(255,255,255,0.7)]">{item.text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={next}
              className="w-full py-4 rounded-xl font-bold text-white text-lg btn-ripple transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #be185d 0%, #9d174d 100%)',
                boxShadow: '0 4px 24px rgba(190,24,93,0.4)',
              }}
            >
              Comenzar mi diagnóstico →
            </button>
            <p className="text-xs text-[rgba(255,255,255,0.3)] mt-3">Gratis · Solo toma 2 minutos</p>
          </div>
        )}

        {/* ===== FORM STEPS ===== */}
        {step >= 1 && (
          <div className="animate-fadeInUp">
            {/* Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[rgba(255,255,255,0.5)]">
                  Paso {step} de 5
                </span>
                <span className="text-xs font-bold" style={{ color: '#be185d' }}>
                  {step * 20}%
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${step * 20}%`, background: 'linear-gradient(90deg, #be185d, #ec4899)' }}
                />
              </div>
            </div>

            {/* Card */}
            <div className="rounded-2xl p-6 md:p-8"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h2 className="text-xl md:text-2xl font-black text-white mb-1">
                {STEPS[step - 1].title}
              </h2>
              <p className="text-sm text-[rgba(255,255,255,0.45)] mb-6">
                {STEPS[step - 1].sub}
              </p>

              {/* Step 1: Nombre */}
              {step === 1 && (
                <input
                  type="text"
                  placeholder="Tu nombre o apodo..."
                  value={formData.nombre || ''}
                  onChange={e => set('nombre', e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && canContinue() && next()}
                  className="w-full px-4 py-3.5 rounded-xl text-white placeholder-[rgba(255,255,255,0.25)] text-base font-medium focus:outline-none transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: `1.5px solid ${formData.nombre ? '#be185d' : 'rgba(255,255,255,0.1)'}`,
                  }}
                  autoFocus
                />
              )}

              {/* Step 2: Objetivo */}
              {step === 2 && (
                <div className="space-y-2.5">
                  {OBJETIVOS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => set('objetivo', opt.value)}
                      className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-200"
                      style={{
                        background: formData.objetivo === opt.value
                          ? 'rgba(190,24,93,0.15)'
                          : 'rgba(255,255,255,0.04)',
                        border: `1.5px solid ${formData.objetivo === opt.value ? '#be185d' : 'rgba(255,255,255,0.08)'}`,
                        transform: formData.objetivo === opt.value ? 'scale(1.01)' : 'scale(1)',
                      }}
                    >
                      <span className="text-xl shrink-0">{opt.emoji}</span>
                      <div className="min-w-0">
                        <p className="font-bold text-white text-sm">{opt.label}</p>
                        <p className="text-xs text-[rgba(255,255,255,0.4)] mt-0.5">{opt.desc}</p>
                      </div>
                      {formData.objetivo === opt.value && (
                        <span className="ml-auto text-pink-500 text-lg shrink-0">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* Step 3: Actividad */}
              {step === 3 && (
                <div className="space-y-2.5">
                  {ACTIVIDADES.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => set('nivelActividad', opt.value)}
                      className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-200"
                      style={{
                        background: formData.nivelActividad === opt.value
                          ? 'rgba(190,24,93,0.15)'
                          : 'rgba(255,255,255,0.04)',
                        border: `1.5px solid ${formData.nivelActividad === opt.value ? '#be185d' : 'rgba(255,255,255,0.08)'}`,
                      }}
                    >
                      <span className="text-xl shrink-0">{opt.emoji}</span>
                      <div className="min-w-0">
                        <p className="font-bold text-white text-sm">{opt.label}</p>
                        <p className="text-xs text-[rgba(255,255,255,0.4)] mt-0.5">{opt.desc}</p>
                      </div>
                      {formData.nivelActividad === opt.value && (
                        <span className="ml-auto text-pink-500 text-lg shrink-0">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* Step 4: Alergias */}
              {step === 4 && (
                <div>
                  <textarea
                    placeholder="Ej: intolerancia a la lactosa, alergia al maní, vegano... (opcional)"
                    value={formData.alergias || ''}
                    onChange={e => set('alergias', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3.5 rounded-xl text-white placeholder-[rgba(255,255,255,0.25)] text-sm resize-none focus:outline-none transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1.5px solid rgba(255,255,255,0.1)',
                    }}
                  />
                  <p className="text-xs text-[rgba(255,255,255,0.3)] mt-2">
                    ✓ Puedes continuar sin completar este campo
                  </p>
                </div>
              )}

              {/* Step 5: Disponibilidad */}
              {step === 5 && (
                <div className="space-y-2.5">
                  {HORARIOS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => set('disponibilidad', opt.value)}
                      className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-200"
                      style={{
                        background: formData.disponibilidad === opt.value
                          ? 'rgba(190,24,93,0.15)'
                          : 'rgba(255,255,255,0.04)',
                        border: `1.5px solid ${formData.disponibilidad === opt.value ? '#be185d' : 'rgba(255,255,255,0.08)'}`,
                      }}
                    >
                      <span className="text-2xl shrink-0">{opt.emoji}</span>
                      <div>
                        <p className="font-bold text-white text-sm">{opt.label}</p>
                        <p className="text-xs text-[rgba(255,255,255,0.4)]">{opt.desc}</p>
                      </div>
                      {formData.disponibilidad === opt.value && (
                        <span className="ml-auto text-pink-500 text-lg shrink-0">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={back}
                className="px-5 py-3.5 rounded-xl font-semibold text-[rgba(255,255,255,0.5)] text-sm transition-all hover:text-white"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                ← Atrás
              </button>
              <button
                onClick={next}
                disabled={!canContinue()}
                className="flex-1 py-3.5 rounded-xl font-bold text-white text-base btn-ripple transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{
                  background: canContinue()
                    ? 'linear-gradient(135deg, #be185d 0%, #9d174d 100%)'
                    : 'rgba(255,255,255,0.06)',
                  boxShadow: canContinue() ? '0 4px 20px rgba(190,24,93,0.35)' : 'none',
                  transform: canContinue() ? undefined : 'none',
                }}
              >
                {step === 5 ? '✓ Ver mi diagnóstico' : 'Continuar →'}
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-1.5 mt-4">
              {[1, 2, 3, 4, 5].map(i => (
                <div
                  key={i}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === step ? '20px' : '6px',
                    height: '6px',
                    background: i <= step ? '#be185d' : 'rgba(255,255,255,0.15)',
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
