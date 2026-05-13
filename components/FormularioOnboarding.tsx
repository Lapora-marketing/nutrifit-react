'use client'

import { useState } from 'react'
import { saveUserPreferences, type UserPreferences } from '@/lib/userPreferences'

interface FormularioOnboardingProps {
  onComplete: (prefs: UserPreferences) => void
}

const OBJETIVOS = [
  { value: 'bajar-peso', label: 'Bajar de peso', emoji: '🔥' },
  { value: 'ganar-masa', label: 'Ganar masa muscular', emoji: '💪' },
  { value: 'mejorar-salud', label: 'Mejorar mi salud', emoji: '❤️' },
  { value: 'otro', label: 'Otro objetivo', emoji: '🎯' },
]
const ACTIVIDADES = [
  { value: 'sedentario', label: 'Sedentario', emoji: '🪑' },
  { value: 'leve', label: 'Leve (1-2 días)', emoji: '🚶' },
  { value: 'moderado', label: 'Moderado (3-4 días)', emoji: '🏃' },
  { value: 'intenso', label: 'Intenso (5+ días)', emoji: '⚡' },
]
const HORARIOS = [
  { value: 'mañana', label: 'Mañana (6am – 12pm)', emoji: '🌅' },
  { value: 'tarde', label: 'Tarde (12pm – 6pm)', emoji: '☀️' },
  { value: 'noche', label: 'Noche (6pm – 10pm)', emoji: '🌙' },
]
const QUESTIONS = [
  '¿Cómo te llamas?',
  '¿Cuál es tu objetivo principal?',
  '¿Cuál es tu nivel de actividad?',
  '¿Tienes alergias o restricciones?',
  '¿A qué hora prefieres entrenar?',
]

export function FormularioOnboarding({ onComplete }: FormularioOnboardingProps) {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<Partial<UserPreferences>>({})

  const set = (field: keyof UserPreferences, value: string) => setData(p => ({ ...p, [field]: value }))

  const next = () => {
    if (step === 0) { setStep(1); return }
    if (step < 5) { setStep(step + 1); return }
    if (data.nombre && data.objetivo && data.nivelActividad && data.disponibilidad) {
      const prefs = { ...data, alergias: data.alergias || '' } as UserPreferences
      saveUserPreferences(prefs)
      onComplete(prefs)
    }
  }

  const back = () => setStep(s => Math.max(0, s - 1))

  const canContinue = () => {
    if (step === 0) return true
    if (step === 1) return !!data.nombre?.trim()
    if (step === 2) return !!data.objetivo
    if (step === 3) return !!data.nivelActividad
    if (step === 4) return true
    if (step === 5) return !!data.disponibilidad
    return false
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem 1.25rem',
      }}
    >
      <div style={{ width: '100%', maxWidth: 480 }}>

        {/* INTRO */}
        {step === 0 && (
          <div className="animate-popIn" style={{ textAlign: 'center' }}>
            <div className="tag" style={{ margin: '0 auto 1rem' }}>🎯 Tu diagnóstico personalizado</div>

            <h1 style={{ marginBottom: '.6rem' }}>
              Tu plan de nutrición <em className="hi">100% personalizado</em>
            </h1>

            <p style={{ marginTop: '.6rem', marginBottom: '1.5rem', fontWeight: 700 }}>
              Responde 5 preguntas rápidas y obtén tu diagnóstico nutricional gratuito
            </p>

            {/* Stars + social proof */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '.6rem',
                marginBottom: '1.5rem',
              }}
            >
              <span className="stars" style={{ fontSize: '1rem' }}>★★★★★</span>
              <p style={{ fontSize: '.82rem', fontWeight: 700, margin: 0 }}>
                +200 personas ya lo completaron
              </p>
            </div>

            {/* What you'll get */}
            <div className="card" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              <p
                style={{
                  fontSize: '.7rem',
                  fontWeight: 900,
                  color: 'var(--ac)',
                  textTransform: 'uppercase',
                  letterSpacing: '.06em',
                  marginBottom: '.85rem',
                }}
              >
                ✨ Vas a obtener:
              </p>
              {[
                { ico: '🎯', text: 'Diagnóstico nutricional personalizado' },
                { ico: '📋', text: 'Plan de alimentación para tu objetivo' },
                { ico: '⚡', text: 'Rutina adaptada a tu ritmo de vida' },
              ].map((it, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '.7rem',
                    alignItems: 'center',
                    marginBottom: '.5rem',
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>{it.ico}</span>
                  <span style={{ fontSize: '.88rem', fontWeight: 800, color: 'var(--dark)' }}>
                    {it.text}
                  </span>
                </div>
              ))}
            </div>

            <button onClick={next} className="btn btn-rap btn-xl btn-full">
              Comenzar mi diagnóstico →
            </button>
            <p style={{ fontSize: '.78rem', fontWeight: 700, marginTop: '.6rem' }}>
              Gratis · Solo toma 2 minutos
            </p>
          </div>
        )}

        {/* QUIZ STEPS */}
        {step >= 1 && (
          <div className="animate-fadeUp">
            {/* Progress dots */}
            <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1.5rem' }}>
              {[1, 2, 3, 4, 5].map(n => (
                <div
                  key={n}
                  style={{
                    flex: 1,
                    height: 5,
                    borderRadius: 5,
                    background: n <= step ? 'var(--ac)' : 'var(--border)',
                    transition: 'background .35s',
                  }}
                />
              ))}
            </div>

            <div className="card" style={{ padding: '1.75rem 1.5rem' }}>
              <div
                style={{
                  fontSize: '.72rem',
                  fontWeight: 900,
                  color: 'var(--ac)',
                  textTransform: 'uppercase',
                  letterSpacing: '.06em',
                  marginBottom: '.5rem',
                }}
              >
                Pregunta {step} de 5
              </div>
              <div
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 900,
                  color: 'var(--dark)',
                  marginBottom: '1.25rem',
                  lineHeight: 1.3,
                }}
              >
                {QUESTIONS[step - 1]}
              </div>

              {/* Step 1: Nombre */}
              {step === 1 && (
                <input
                  type="text"
                  placeholder="Tu nombre o apodo..."
                  value={data.nombre || ''}
                  onChange={e => set('nombre', e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && canContinue() && next()}
                  autoFocus
                  style={{
                    width: '100%',
                    padding: '.9rem 1.1rem',
                    border: `2px solid ${data.nombre ? 'var(--ac)' : 'var(--border)'}`,
                    borderRadius: 'var(--radius)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    fontFamily: 'inherit',
                    color: 'var(--dark)',
                    outline: 'none',
                    transition: 'all .2s',
                  }}
                />
              )}

              {/* Step 2: Objetivo */}
              {step === 2 && OBJETIVOS.map(opt => (
                <QuizOption
                  key={opt.value}
                  emoji={opt.emoji}
                  label={opt.label}
                  selected={data.objetivo === opt.value}
                  onClick={() => set('objetivo', opt.value)}
                />
              ))}

              {/* Step 3: Actividad */}
              {step === 3 && ACTIVIDADES.map(opt => (
                <QuizOption
                  key={opt.value}
                  emoji={opt.emoji}
                  label={opt.label}
                  selected={data.nivelActividad === opt.value}
                  onClick={() => set('nivelActividad', opt.value)}
                />
              ))}

              {/* Step 4: Alergias */}
              {step === 4 && (
                <div>
                  <textarea
                    placeholder="Ej: intolerancia a la lactosa, alergia al maní, vegano... (opcional)"
                    value={data.alergias || ''}
                    onChange={e => set('alergias', e.target.value)}
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '.9rem 1.1rem',
                      border: '2px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      fontSize: '.92rem',
                      fontFamily: 'inherit',
                      fontWeight: 700,
                      color: 'var(--dark)',
                      outline: 'none',
                      resize: 'none',
                    }}
                  />
                  <p style={{ fontSize: '.78rem', marginTop: '.5rem' }}>
                    ✓ Puedes continuar sin completar este campo
                  </p>
                </div>
              )}

              {/* Step 5: Disponibilidad */}
              {step === 5 && HORARIOS.map(opt => (
                <QuizOption
                  key={opt.value}
                  emoji={opt.emoji}
                  label={opt.label}
                  selected={data.disponibilidad === opt.value}
                  onClick={() => set('disponibilidad', opt.value)}
                />
              ))}
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '.7rem', marginTop: '1rem' }}>
              <button
                onClick={back}
                className="btn btn-ghost"
                style={{ flexShrink: 0 }}
              >
                ← Atrás
              </button>
              <button
                onClick={next}
                disabled={!canContinue()}
                className="btn btn-rap btn-full"
                style={{ opacity: canContinue() ? 1 : 0.5, cursor: canContinue() ? 'pointer' : 'not-allowed', flex: 1 }}
              >
                {step === 5 ? '✓ Ver mi plan' : 'Continuar →'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function QuizOption({
  emoji,
  label,
  selected,
  onClick,
}: {
  emoji: string
  label: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '.9rem',
        padding: '.9rem 1.1rem',
        border: `2px solid ${selected ? 'var(--ac)' : 'var(--border)'}`,
        borderRadius: 'var(--radius)',
        cursor: 'pointer',
        transition: 'all .2s',
        marginBottom: '.65rem',
        background: selected ? 'var(--ac-light)' : 'var(--white)',
        width: '100%',
        fontFamily: 'inherit',
        textAlign: 'left',
      }}
    >
      <span style={{ fontSize: '1.35rem', flexShrink: 0 }}>{emoji}</span>
      <span style={{ fontSize: '.88rem', fontWeight: 800, color: 'var(--dark)', lineHeight: 1.3 }}>
        {label}
      </span>
      {selected && (
        <span style={{ marginLeft: 'auto', color: 'var(--ac)', fontSize: '1.1rem', fontWeight: 900 }}>
          ✓
        </span>
      )}
    </button>
  )
}
