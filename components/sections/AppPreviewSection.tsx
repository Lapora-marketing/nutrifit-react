'use client'

import { useProfile } from '@/components/ProfileContext'

const HABITS = [
  { icon: '💧', bg: '#dbeafe', label: 'Agua', value: '0/8', color: '#0ea5e9' },
  { icon: '😴', bg: '#f3e8ff', label: 'Sueño', value: '— hrs', color: '#a855f7' },
  { icon: '🧠', bg: '#fef3c7', label: 'Ánimo', value: 'Registrar', color: '#eab308' },
  { icon: '💩', bg: '#ffedd5', label: 'Digestión', value: 'Registrar', color: '#ea580c' },
  { icon: '⚖️', bg: '#d1fae5', label: 'Peso', value: '— kg', color: '#10b981' },
  { icon: '🧘‍♀️', bg: '#ccfbf1', label: 'Respiración', value: 'Ejercitar', color: '#0d9488' },
  { icon: '📏', bg: '#fce7f3', label: 'Abdomen', value: '— cm', color: '#be185d' },
  { icon: '🦵', bg: '#f3e8ff', label: 'Muslos', value: '— cm', color: '#a855f7' },
  { icon: '💪', bg: '#fef3c7', label: 'Brazos', value: '— cm', color: '#f59e0b' },
]

export function AppPreviewSection() {
  const { currentProfile } = useProfile()
  if (!currentProfile) return null

  return (
    <section
      id="app"
      className="section"
      style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}
    >
      <div className="container-tight">
        <div className="app-tag">📱 Vive la app</div>

        <h2 style={{ marginBottom: '0.75rem' }}>
          Tu Laboratorio diario
        </h2>
        <p style={{ marginBottom: '2rem', fontWeight: 700, fontSize: '1rem' }}>
          Mide tus hábitos, registra tu progreso y obtén feedback médico real.{' '}
          <span style={{ color: 'var(--dark)', fontWeight: 900 }}>9 widgets esenciales.</span>
        </p>

        {/* Hábitos grid 3x3 (replica del app) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.65rem',
            marginBottom: '2rem',
          }}
        >
          {HABITS.map((h, i) => (
            <div key={i} className="habit-card">
              <div className="habit-icon" style={{ background: h.bg }}>
                {h.icon}
              </div>
              <span style={{ fontSize: '.78rem', fontWeight: 900, color: 'var(--dark)' }}>
                {h.label}
              </span>
              <span
                style={{
                  fontSize: '.6rem',
                  fontWeight: 900,
                  color: h.color,
                }}
              >
                {h.value}
              </span>
            </div>
          ))}
        </div>

        {/* App features mini-cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.75rem',
          }}
          className="app-features-grid"
        >
          {[
            { icon: '🤖', label: 'NutriBot IA', desc: 'Asistente 24/7' },
            { icon: '🍽️', label: 'Recetas', desc: 'Plan semanal' },
            { icon: '🎓', label: 'Academia', desc: 'Clases en vivo' },
            { icon: '📊', label: 'Métricas', desc: 'Gráficos diarios' },
          ].map((f, i) => (
            <div
              key={i}
              className="app-card-flat"
              style={{
                padding: '1rem',
                display: 'flex',
                gap: '.75rem',
                alignItems: 'center',
              }}
            >
              <div
                className="habit-icon"
                style={{
                  background: 'var(--ac-light)',
                }}
              >
                {f.icon}
              </div>
              <div style={{ minWidth: 0 }}>
                <p style={{ fontSize: '.85rem', fontWeight: 900, color: 'var(--dark)', margin: 0 }}>
                  {f.label}
                </p>
                <p style={{ fontSize: '.7rem', color: 'var(--gray-light)', margin: 0, fontWeight: 700 }}>
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
