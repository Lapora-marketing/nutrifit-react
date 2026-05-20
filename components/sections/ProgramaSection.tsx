'use client'

import { useState } from 'react'
import { useProfile } from '@/components/ProfileContext'

interface PhaseDetail {
  duracion: string
  examenes: string[]
  resultadoEspecifico: string
}

// Extra detail per phase index (collapsed by default — expand reveals it)
const PHASE_DETAILS_RAP: PhaseDetail[] = [
  {
    duracion: 'Semanas 1–4',
    examenes: ['Hemograma', 'TSH + T4', 'Ferritina', 'Vit D'],
    resultadoEspecifico: 'Cierre parcial de diástasis · Energía estable · Mejora de digestión',
  },
  {
    duracion: 'Semanas 5–8',
    examenes: ['Control TSH', 'Glicemia', 'Eco abdominal (opcional)'],
    resultadoEspecifico: 'Recomposición corporal · Suelo pélvico activado · Pérdida de grasa visceral',
  },
  {
    duracion: 'Semanas 9–12+',
    examenes: ['Control final', 'Composición corporal con bioimpedancia'],
    resultadoEspecifico: 'Fuerza funcional plena · Diástasis cerrada · Plan de mantenimiento personalizado',
  },
]

export function ProgramaSection() {
  const { currentProfile } = useProfile()
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0) // First card expanded by default

  if (!currentProfile) return null

  const toggle = (i: number) =>
    setExpandedIdx(prev => (prev === i ? null : i))

  return (
    <section
      id="programa"
      className="section"
      style={{ background: 'var(--bg)' }}
    >
      <div className="container-tight">
        <div className="app-tag">🎯 Sistema {currentProfile.label}</div>

        <h2 style={{ marginBottom: '.75rem' }}>
          El método que{' '}
          <span style={{ color: 'var(--ac)' }}>realmente funciona</span>
        </h2>

        <p style={{ marginBottom: '1.75rem', fontWeight: 700 }}>
          {currentProfile.progSub}{' '}
          <span style={{ color: 'var(--gray-light)', fontSize: '.85rem' }}>
            (toca cualquier fase para ver el detalle)
          </span>
        </p>

        {/* Expandable phase cards */}
        <div style={{ display: 'grid', gap: '.85rem' }}>
          {currentProfile.programa.map((prog, i) => (
            <ExpandablePhase
              key={i}
              index={i}
              prog={prog}
              detail={PHASE_DETAILS_RAP[i]}
              isExpanded={expandedIdx === i}
              onToggle={() => toggle(i)}
              accentColor={currentProfile.color}
              accentLight="var(--ac-light)"
            />
          ))}
        </div>

        {/* Hint que el doctor viene a continuación */}
        <div
          className="anim-fade-up"
          style={{
            marginTop: '1.5rem',
            textAlign: 'center',
            fontSize: '.78rem',
            fontWeight: 700,
            color: 'var(--gray)',
            animationDelay: `${currentProfile.programa.length * 120 + 100}ms`,
            opacity: 0,
          }}
        >
          Diseñado por{' '}
          <a
            href="#medico"
            style={{ color: 'var(--ac)', fontWeight: 900, textDecoration: 'underline' }}
          >
            {currentProfile.medico}
          </a>
          {' '}— conoce al equipo médico ↓
        </div>
      </div>
    </section>
  )
}

// ===== Expandable phase card =====
interface ExpandablePhaseProps {
  index: number
  prog: { icon: string; title: string; description: string }
  detail?: PhaseDetail
  isExpanded: boolean
  onToggle: () => void
  accentColor: string
  accentLight: string
}

function ExpandablePhase({
  index,
  prog,
  detail,
  isExpanded,
  onToggle,
  accentColor,
  accentLight,
}: ExpandablePhaseProps) {
  return (
    <div
      className={`app-card ${index % 2 === 0 ? 'anim-slide-left' : 'anim-slide-right'}`}
      style={{
        position: 'relative',
        padding: '1.35rem 1.35rem 1rem',
        overflow: 'hidden',
        cursor: 'pointer',
        animationDelay: `${index * 120}ms`,
        transition: 'border-color .25s ease, box-shadow .25s ease',
        borderColor: isExpanded ? accentColor : 'var(--border)',
        boxShadow: isExpanded ? `0 8px 24px -4px rgba(0,0,0,.08)` : 'var(--shadow-card)',
      }}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onToggle()
        }
      }}
    >
      {/* Big bg number */}
      <span
        style={{
          position: 'absolute',
          top: '-10px',
          right: '12px',
          fontSize: '5.5rem',
          fontWeight: 900,
          color: accentLight,
          lineHeight: 1,
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.5,
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* HEADER (always visible) */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '.85rem' }}>
          <span style={{ fontSize: '2rem', flexShrink: 0 }}>{prog.icon}</span>

          <div style={{ flex: 1, minWidth: 0 }}>
            <span
              style={{
                fontSize: '.6rem',
                fontWeight: 900,
                color: accentColor,
                textTransform: 'uppercase',
                letterSpacing: '.08em',
                display: 'block',
              }}
            >
              Fase {index + 1} del Sistema
            </span>
            <h3 style={{ fontSize: '1.05rem', marginTop: '.15rem' }}>{prog.title}</h3>
          </div>

          {/* Expand chevron */}
          <span
            aria-hidden
            style={{
              width: '1.75rem',
              height: '1.75rem',
              borderRadius: '.5rem',
              background: isExpanded ? accentColor : 'var(--bg-soft)',
              color: isExpanded ? '#fff' : 'var(--gray)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '.85rem',
              flexShrink: 0,
              transition: 'all .25s ease',
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            ▾
          </span>
        </div>

        <p
          style={{
            fontSize: '.88rem',
            marginTop: '.75rem',
            marginBottom: 0,
            lineHeight: 1.5,
            color: 'var(--gray)',
          }}
        >
          {prog.description}
        </p>
      </div>

      {/* EXPANDABLE CONTENT (hidden by default) */}
      <div
        style={{
          maxHeight: isExpanded ? '500px' : '0',
          opacity: isExpanded ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height .45s cubic-bezier(0.22, 1, 0.36, 1), opacity .35s ease, margin-top .3s ease',
          marginTop: isExpanded ? '1rem' : '0',
        }}
      >
        {detail && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {/* Duration */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '.5rem',
                fontSize: '.78rem',
                fontWeight: 800,
                color: 'var(--dark)',
                background: 'var(--bg-soft)',
                padding: '.55rem .85rem',
                borderRadius: '.65rem',
                width: 'fit-content',
              }}
            >
              <span>⏱️</span>
              <span>{detail.duracion}</span>
            </div>

            {/* Exams in this phase */}
            <div>
              <p
                style={{
                  fontSize: '.62rem',
                  fontWeight: 900,
                  color: 'var(--gray)',
                  textTransform: 'uppercase',
                  letterSpacing: '.08em',
                  marginBottom: '.5rem',
                }}
              >
                🩺 Exámenes que evaluamos
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
                {detail.examenes.map((ex, j) => (
                  <span
                    key={j}
                    style={{
                      fontSize: '.7rem',
                      fontWeight: 800,
                      padding: '.3rem .6rem',
                      borderRadius: '999px',
                      background: '#e0f2fe',
                      color: '#0369a1',
                      border: '1px solid #bae6fd',
                    }}
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>

            {/* Result */}
            <div
              style={{
                padding: '.85rem 1rem',
                background: 'var(--green-light)',
                border: '1px solid #a7f3d0',
                borderRadius: '.85rem',
                display: 'flex',
                gap: '.6rem',
                alignItems: 'flex-start',
              }}
            >
              <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>✓</span>
              <div>
                <p
                  style={{
                    fontSize: '.62rem',
                    fontWeight: 900,
                    color: 'var(--green)',
                    textTransform: 'uppercase',
                    letterSpacing: '.06em',
                    marginBottom: '.15rem',
                  }}
                >
                  Resultado medible
                </p>
                <p style={{ fontSize: '.78rem', fontWeight: 700, color: 'var(--dark)', margin: 0, lineHeight: 1.45 }}>
                  {detail.resultadoEspecifico}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tap hint when collapsed */}
      {!isExpanded && (
        <p
          style={{
            position: 'relative',
            zIndex: 1,
            marginTop: '.75rem',
            fontSize: '.7rem',
            fontWeight: 800,
            color: accentColor,
            display: 'flex',
            alignItems: 'center',
            gap: '.35rem',
          }}
        >
          <span>Ver detalle</span>
          <span style={{ fontSize: '.6rem' }}>→</span>
        </p>
      )}
    </div>
  )
}
