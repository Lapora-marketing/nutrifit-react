'use client'

import { useState } from 'react'
import {
  saveUserPreferences,
  type UserPreferences,
  type Objetivo,
  type TiempoPostparto,
  type Disponibilidad,
} from '@/lib/userPreferences'

interface FormularioOnboardingProps {
  onComplete: (prefs: UserPreferences) => void
}

const OBJETIVOS: { value: Objetivo; label: string; emoji: string; bg: string }[] = [
  { value: 'bajar-peso', label: 'Bajar de peso', emoji: '🔥', bg: '#fee2e2' },
  { value: 'ganar-masa', label: 'Ganar masa muscular', emoji: '💪', bg: '#fef3c7' },
  { value: 'mejorar-salud', label: 'Mejorar mi salud general', emoji: '❤️', bg: '#fce7f3' },
  { value: 'controlar-ansiedad', label: 'Controlar mi ansiedad por comer', emoji: '🧘', bg: '#e0e7ff' },
  { value: 'salud-digestiva', label: 'Mejorar mi salud digestiva', emoji: '🌿', bg: '#d1fae5' },
]

const TIEMPO_POSTPARTO: { value: TiempoPostparto; label: string; emoji: string; desc: string }[] = [
  { value: 'menos-3', label: 'Menos de 3 meses', emoji: '👶', desc: 'Postparto inmediato' },
  { value: '3-6', label: '3 - 6 meses', emoji: '🍼', desc: 'Apenas voy recuperándome' },
  { value: '6-12', label: '6 - 12 meses', emoji: '🌱', desc: 'Mi cuerpo no termina de volver' },
  { value: 'mas-1-ano', label: 'Más de 1 año', emoji: '⏰', desc: 'Ya pasó tiempo y algo no cambia' },
  { value: 'embarazada', label: 'Estoy embarazada', emoji: '🤰', desc: 'Quiero prepararme desde ya' },
]

const DISPONIBILIDAD: { value: Disponibilidad; label: string; emoji: string; desc: string }[] = [
  { value: 'madrugada', label: 'Madrugada', emoji: '🌌', desc: '4am – 6am' },
  { value: 'mañana', label: 'Mañana', emoji: '🌅', desc: '6am – 12pm' },
  { value: 'tarde', label: 'Tarde', emoji: '☀️', desc: '12pm – 6pm' },
  { value: 'noche', label: 'Noche', emoji: '🌙', desc: '6pm – 10pm' },
  { value: 'flexible', label: 'Flexible', emoji: '🔄', desc: 'Varía cada día' },
  { value: 'no-entreno', label: 'No entreno (todavía)', emoji: '🛌', desc: 'Empecemos por ahí' },
]

const QUESTIONS = [
  '¿Cómo te llamas y cuántos años tienes?',
  '¿Cuáles son tus objetivos?',
  '¿Cuál es tu peso y estatura actual?',
  '¿Hace cuánto tuviste a tu bebé?',
  '¿A qué hora prefieres entrenar?',
]

export function FormularioOnboarding({ onComplete }: FormularioOnboardingProps) {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<Partial<UserPreferences>>({ objetivos: [] })

  const set = <K extends keyof UserPreferences>(field: K, value: UserPreferences[K]) =>
    setData(p => ({ ...p, [field]: value }))

  const toggleObjetivo = (value: Objetivo) => {
    setData(p => {
      const current = p.objetivos || []
      const next = current.includes(value)
        ? current.filter(o => o !== value)
        : [...current, value]
      return { ...p, objetivos: next }
    })
  }

  const next = () => {
    if (step === 0) { setStep(1); return }
    if (step < 5) { setStep(step + 1); return }
    if (
      data.nombre &&
      data.edad &&
      data.objetivos &&
      data.objetivos.length > 0 &&
      data.peso &&
      data.estatura &&
      data.tiempoPostparto &&
      data.disponibilidad
    ) {
      const prefs = data as UserPreferences
      saveUserPreferences(prefs)
      onComplete(prefs)
    }
  }

  const back = () => setStep(s => Math.max(0, s - 1))

  const canContinue = () => {
    if (step === 0) return true
    if (step === 1) return !!data.nombre?.trim() && !!data.edad?.trim()
    if (step === 2) return (data.objetivos?.length || 0) > 0
    if (step === 3) return !!data.peso?.trim() && !!data.estatura?.trim()
    if (step === 4) return !!data.tiempoPostparto
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
          <div key={step} className="anim-fade-up">
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
              <h3 style={{ fontSize: '1.1rem', marginTop: '.35rem', marginBottom: '1.15rem', lineHeight: 1.3 }}>
                {QUESTIONS[step - 1]}
              </h3>

              {/* Step 1: Nombre + Edad */}
              {step === 1 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.85rem' }}>
                  <div>
                    <label style={labelStyle}>Nombre</label>
                    <input
                      type="text"
                      placeholder="Ej: Sofía"
                      value={data.nombre || ''}
                      onChange={e => set('nombre', e.target.value)}
                      autoFocus
                      style={inputStyle(!!data.nombre)}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Edad</label>
                    <input
                      type="number"
                      min={13}
                      max={100}
                      placeholder="Ej: 32"
                      value={data.edad || ''}
                      onChange={e => set('edad', e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && canContinue() && next()}
                      style={inputStyle(!!data.edad)}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Objetivos (multi-select) */}
              {step === 2 && (
                <>
                  <p
                    style={{
                      fontSize: '.78rem',
                      fontWeight: 700,
                      color: 'var(--gray)',
                      marginTop: '-.6rem',
                      marginBottom: '1rem',
                    }}
                  >
                    💡 Puedes seleccionar varios
                  </p>
                  {OBJETIVOS.map(opt => {
                    const isSelected = (data.objetivos || []).includes(opt.value)
                    return (
                      <QuizOption
                        key={opt.value}
                        emoji={opt.emoji}
                        label={opt.label}
                        selected={isSelected}
                        onClick={() => toggleObjetivo(opt.value)}
                        multiSelect
                      />
                    )
                  })}
                </>
              )}

              {/* Step 3: Peso + Estatura */}
              {step === 3 && (
                <div style={{ display: 'flex', gap: '.75rem' }}>
                  <div style={{ flex: 1 }}>
                    <label style={labelStyle}>Peso (kg)</label>
                    <input
                      type="number"
                      min={30}
                      max={250}
                      step={0.1}
                      placeholder="Ej: 68"
                      value={data.peso || ''}
                      onChange={e => set('peso', e.target.value)}
                      autoFocus
                      style={inputStyle(!!data.peso)}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={labelStyle}>Estatura (cm)</label>
                    <input
                      type="number"
                      min={120}
                      max={220}
                      placeholder="Ej: 165"
                      value={data.estatura || ''}
                      onChange={e => set('estatura', e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && canContinue() && next()}
                      style={inputStyle(!!data.estatura)}
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Tiempo postparto */}
              {step === 4 &&
                TIEMPO_POSTPARTO.map(opt => (
                  <QuizOption
                    key={opt.value}
                    emoji={opt.emoji}
                    label={opt.label}
                    desc={opt.desc}
                    selected={data.tiempoPostparto === opt.value}
                    onClick={() => set('tiempoPostparto', opt.value)}
                  />
                ))}

              {/* Step 5: Disponibilidad */}
              {step === 5 &&
                DISPONIBILIDAD.map(opt => (
                  <QuizOption
                    key={opt.value}
                    emoji={opt.emoji}
                    label={opt.label}
                    desc={opt.desc}
                    selected={data.disponibilidad === opt.value}
                    onClick={() => set('disponibilidad', opt.value)}
                  />
                ))}
            </div>

            {/* Nav buttons */}
            <div style={{ display: 'flex', gap: '.6rem', marginTop: '1rem' }}>
              <button
                onClick={back}
                className="btn"
                style={{
                  flex: '0 0 auto',
                  background: 'var(--bg-elevated)',
                  color: 'var(--gray)',
                  border: '1.5px solid var(--border-strong)',
                  padding: '.85rem 1rem',
                }}
              >
                ←
              </button>
              <button
                onClick={next}
                disabled={!canContinue()}
                className="btn btn-rap"
                style={{
                  flex: 1,
                  opacity: canContinue() ? 1 : 0.4,
                  cursor: canContinue() ? 'pointer' : 'not-allowed',
                }}
              >
                {step === 5 ? 'Ver mi diagnóstico →' : 'Continuar →'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ===== Sub-components & styles =====

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '.7rem',
  fontWeight: 900,
  color: 'var(--gray)',
  textTransform: 'uppercase',
  letterSpacing: '.06em',
  marginBottom: '.45rem',
}

const inputStyle = (filled: boolean): React.CSSProperties => ({
  width: '100%',
  padding: '.85rem 1rem',
  border: `2px solid ${filled ? 'var(--ac)' : 'var(--border-strong)'}`,
  borderRadius: '.85rem',
  fontSize: '1rem',
  fontWeight: 700,
  fontFamily: 'inherit',
  color: 'var(--dark)',
  outline: 'none',
  background: 'var(--bg-elevated)',
  transition: 'border-color .2s',
})

interface QuizOptionProps {
  emoji: string
  label: string
  desc?: string
  selected: boolean
  onClick: () => void
  multiSelect?: boolean
}

function QuizOption({ emoji, label, desc, selected, onClick, multiSelect }: QuizOptionProps) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '.85rem',
        padding: '.85rem 1rem',
        border: `2px solid ${selected ? 'var(--ac)' : 'var(--border-strong)'}`,
        borderRadius: '.85rem',
        background: selected ? 'var(--ac-light)' : 'var(--bg-elevated)',
        cursor: 'pointer',
        marginBottom: '.55rem',
        transition: 'all .2s cubic-bezier(0.22, 1, 0.36, 1)',
        fontFamily: 'inherit',
        textAlign: 'left',
        transform: selected ? 'scale(1.01)' : 'scale(1)',
      }}
    >
      <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{emoji}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            fontSize: '.88rem',
            fontWeight: 900,
            color: 'var(--dark)',
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {label}
        </p>
        {desc && (
          <p style={{ fontSize: '.72rem', fontWeight: 700, color: 'var(--gray)', margin: '.15rem 0 0' }}>
            {desc}
          </p>
        )}
      </div>
      {/* Selection indicator: square checkbox for multi, circle for single */}
      <div
        style={{
          flexShrink: 0,
          width: '1.4rem',
          height: '1.4rem',
          borderRadius: multiSelect ? '.35rem' : '50%',
          border: `2px solid ${selected ? 'var(--ac)' : 'var(--border-strong)'}`,
          background: selected ? 'var(--ac)' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontWeight: 900,
          fontSize: '.85rem',
          transition: 'all .2s',
        }}
      >
        {selected && '✓'}
      </div>
    </button>
  )
}
