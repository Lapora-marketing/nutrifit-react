'use client'

import { useState } from 'react'
import { saveUserPreferences, type UserPreferences } from '@/lib/userPreferences'

interface FormularioOnboardingProps {
  onComplete: (prefs: UserPreferences) => void
}

const OBJETIVOS = [
  { value: 'bajar-peso', label: 'Bajar de peso', emoji: '🔥', bg: '#fee2e2' },
  { value: 'ganar-masa', label: 'Ganar masa muscular', emoji: '💪', bg: '#fef3c7' },
  { value: 'mejorar-salud', label: 'Mejorar mi salud', emoji: '❤️', bg: '#fce7f3' },
  { value: 'otro', label: 'Otro objetivo', emoji: '🎯', bg: '#e0f2fe' },
]
const ACTIVIDADES = [
  { value: 'sedentario', label: 'Sedentario', emoji: '🪑', bg: '#f1f5f9' },
  { value: 'leve', label: 'Leve (1-2 días)', emoji: '🚶', bg: '#dbeafe' },
  { value: 'moderado', label: 'Moderado (3-4 días)', emoji: '🏃', bg: '#d1fae5' },
  { value: 'intenso', label: 'Intenso (5+ días)', emoji: '⚡', bg: '#fef3c7' },
]
const HORARIOS = [
  { value: 'mañana', label: 'Mañana (6am – 12pm)', emoji: '🌅', bg: '#fef3c7' },
  { value: 'tarde', label: 'Tarde (12pm – 6pm)', emoji: '☀️', bg: '#ffedd5' },
  { value: 'noche', label: 'Noche (6pm – 10pm)', emoji: '🌙', bg: '#e0e7ff' },
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

  const set = (field: keyof UserPreferences, value: string) =>
    setData(p => ({ ...p, [field]: value }))

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
      <div style={{ width: '100%', maxWidth: 460 }}>
        {/* INTRO */}
        {step === 0 && (
          <div className="anim-pop" style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '4rem',
                height: '4rem',
                borderRadius: '1rem',
                background: 'var(--dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 1.25rem',
                boxShadow: 'var(--shadow-soft)',
              }}
            >
              🥗
            </div>

            <h1 style={{ marginBottom: '.4rem', fontSize: '1.65rem' }}>
              Tu plan <span style={{ color: 'var(--ac)' }}>100% personalizado</span>
            </h1>

            <p style={{ marginBottom: '1.5rem', fontWeight: 700, fontSize: '.9rem' }}>
              Responde 5 preguntas rápidas y obtén tu diagnóstico nutricional gratuito.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '.6rem',
                marginBottom: '1.5rem',
              }}
            >
              <span style={{ color: 'var(--amber)', fontSize: '1rem', letterSpacing: '-.04em' }}>★★★★★</span>
              <p style={{ fontSize: '.78rem', fontWeight: 800, margin: 0 }}>
                +500 personas ya lo completaron
              </p>
            </div>

            <div className="app-card" style={{ padding: '1.15rem', textAlign: 'left', marginBottom: '1.5rem' }}>
              <p
                style={{
                  fontSize: '.65rem',
                  fontWeight: 900,
                  color: 'var(--ac)',
                  textTransform: 'uppercase',
                  letterSpacing: '.08em',
                  marginBottom: '.75rem',
                }}
              >
                ✨ Vas a obtener
              </p>
              {[
                { ico: '🎯', text: 'Diagnóstico nutricional personalizado' },
                { ico: '📋', text: 'Plan de alimentación para tu objetivo' },
                { ico: '⚡', text: 'Rutina adaptada a tu ritmo de vida' },
              ].map((it, i) => (
                <div key={i} style={{ display: 'flex', gap: '.6rem', alignItems: 'center', marginBottom: '.5rem' }}>
                  <span style={{ fontSize: '1rem' }}>{it.ico}</span>
                  <span style={{ fontSize: '.85rem', fontWeight: 800, color: 'var(--dark)' }}>
                    {it.text}
                  </span>
                </div>
              ))}
            </div>

            <button onClick={next} className="btn btn-rap btn-xl btn-full">
              Comenzar diagnóstico →
            </button>
            <p style={{ fontSize: '.75rem', fontWeight: 700, marginTop: '.65rem' }}>
              Gratis · Solo 2 minutos
            </p>
          </div>
        )}

        {/* QUIZ */}
        {step >= 1 && (
          <div className="anim-fade-up">
            {/* Progress */}
            <div style={{ display: 'flex', gap: '.4rem', marginBottom: '1.25rem' }}>
              {[1, 2, 3, 4, 5].map(n => (
                <div
                  key={n}
                  style={{
                    flex: 1,
                    height: 5,
                    borderRadius: 5,
                    background: n <= step ? 'var(--ac)' : 'var(--border-strong)',
                    transition: 'background .35s',
                  }}
                />
              ))}
            </div>

            <div className="app-card" style={{ padding: '1.5rem' }}>
              <span
                style={{
                  fontSize: '.62rem',
                  fontWeight: 900,
                  color: 'var(--ac)',
                  textTransform: 'uppercase',
                  letterSpacing: '.08em',
                }}
              >
                Pregunta {step} de 5
              </span>
              <h3 style={{ fontSize: '1.1rem', marginTop: '.35rem', marginBottom: '1.15rem' }}>
                {QUESTIONS[step - 1]}
              </h3>

              {/* Step 1 */}
              {step === 1 && (
                <input
                  type="text"
                  placeholder="Tu nombre..."
                  value={data.nombre || ''}
                  onChange={e => set('nombre', e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && canContinue() && next()}
                  autoFocus
                  style={{
                    width: '100%',
                    padding: '.9rem 1.1rem',
                    border: `2px solid ${data.nombre ? 'var(--ac)' : 'var(--border-strong)'}`,
                    borderRadius: '.85rem',
                    fontSize: '1rem',
                    fontWeight: 700,
                    fontFamily: 'inherit',
                    color: 'var(--dark)',
                    outline: 'none',
                    transition: 'border .2s',
                  }}
                />
              )}

              {step === 2 && OBJETIVOS.map(opt => (
                <QuizOption key={opt.value} {...opt} selected={data.objetivo === opt.value} onClick={() => set('objetivo', opt.value)} />
              ))}
              {step === 3 && ACTIVIDADES.map(opt => (
                <QuizOption key={opt.value} {...opt} selected={data.nivelActividad === opt.value} onClick={() => set('nivelActividad', opt.value)} />
              ))}
              {step === 4 && (
                <div>
                  <textarea
                    placeholder="Ej: lactosa, vegano... (opcional)"
                    value={data.alergias || ''}
                    onChange={e => set('alergias', e.target.value)}
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '.9rem 1.1rem',
                      border: '2px solid var(--border-strong)',
                      borderRadius: '.85rem',
                      fontSize: '.95rem',
                      fontFamily: 'inherit',
                      fontWeight: 700,
                      color: 'var(--dark)',
                      outline: 'none',
                      resize: 'none',
                    }}
                  />
                  <p style={{ fontSize: '.72rem', marginTop: '.5rem' }}>
                    ✓ Opcional — puedes saltar
                  </p>
                </div>
              )}
              {step === 5 && HORARIOS.map(opt => (
                <QuizOption key={opt.value} {...opt} selected={data.disponibilidad === opt.value} onClick={() => set('disponibilidad', opt.value)} />
              ))}
            </div>

            <div style={{ display: 'flex', gap: '.7rem', marginTop: '1rem' }}>
              <button onClick={back} className="btn btn-outline" style={{ padding: '.85rem 1.25rem', fontSize: '.85rem' }}>
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
  bg,
  selected,
  onClick,
}: {
  emoji: string
  label: string
  bg: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '.85rem',
        padding: '.85rem 1rem',
        border: `2px solid ${selected ? 'var(--ac)' : 'var(--border-strong)'}`,
        borderRadius: '.85rem',
        marginBottom: '.55rem',
        background: selected ? 'var(--ac-light)' : 'var(--bg-elevated)',
        width: '100%',
        fontFamily: 'inherit',
        textAlign: 'left',
        transition: 'all .2s',
        cursor: 'pointer',
      }}
    >
      <div className="habit-icon" style={{ background: bg, width: '2.25rem', height: '2.25rem' }}>
        {emoji}
      </div>
      <span style={{ fontSize: '.88rem', fontWeight: 800, color: 'var(--dark)', flex: 1 }}>
        {label}
      </span>
      {selected && (
        <span style={{ color: 'var(--ac)', fontSize: '1.1rem', fontWeight: 900 }}>✓</span>
      )}
    </button>
  )
}
