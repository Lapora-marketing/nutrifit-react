'use client'

import { useState } from 'react'
import { useProfile } from '@/components/ProfileContext'
import { EXAMENES_POSPARTO } from '@/lib/examenes'

const CATEGORY_LABELS: Record<string, string> = {
  sangre: '🩸 Sangre',
  hormonal: '🦋 Hormonal',
  metabolico: '🍯 Metabólico',
  cardio: '🫀 Cardiovascular',
  imagen: '🔬 Imagen',
  pelvico: '🌸 Pélvico',
}

export function ExamenesSection() {
  const { currentProfile } = useProfile()
  const [filter, setFilter] = useState<'all' | 'required' | 'recommended'>('all')
  const [modalOpen, setModalOpen] = useState(false)

  if (!currentProfile) return null

  const examenes = EXAMENES_POSPARTO[currentProfile.id] || EXAMENES_POSPARTO.rap
  const requiredCount = examenes.filter(e => e.required).length
  const filteredExamenes = examenes.filter(e => {
    if (filter === 'required') return e.required
    if (filter === 'recommended') return !e.required
    return true
  })

  const waMessage =
    'Hola, quiero información sobre los exámenes médicos para el programa Nutrifit. ¿Tienen convenios con laboratorios?'
  const waUrl = `https://wa.me/573001234567?text=${encodeURIComponent(waMessage)}`

  return (
    <section
      id="examenes"
      className="section"
      style={{ background: 'var(--bg-elevated)' }}
    >
      <div className="container-tight">
        <div className="app-tag" style={{ background: 'var(--kids-light)', color: 'var(--kids)' }}>
          🩺 Diagnóstico médico real
        </div>

        <h2 style={{ marginBottom: '.75rem' }}>
          Para que tu plan funcione de verdad,{' '}
          <span style={{ color: 'var(--ac)' }}>necesitamos ver qué pasa adentro</span>
        </h2>

        <p style={{ fontWeight: 700, marginBottom: '1.25rem' }}>
          El <strong style={{ color: 'var(--dark)' }}>73%</strong> de las personas que no logran resultados tienen algún
          desequilibrio hormonal o nutricional sin diagnosticar. Estos exámenes nos dan el mapa real de tu cuerpo.
        </p>

        {/* Filter chips */}
        <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {[
            { id: 'all', label: `Todos (${examenes.length})` },
            { id: 'required', label: `Requeridos (${requiredCount})` },
            { id: 'recommended', label: `Recomendados (${examenes.length - requiredCount})` },
          ].map(chip => (
            <button
              key={chip.id}
              onClick={() => setFilter(chip.id as typeof filter)}
              style={{
                padding: '.45rem .9rem',
                borderRadius: 999,
                border: filter === chip.id ? `2px solid var(--ac)` : '2px solid var(--border-strong)',
                background: filter === chip.id ? 'var(--ac)' : 'var(--bg-elevated)',
                color: filter === chip.id ? '#fff' : 'var(--dark)',
                fontSize: '.78rem',
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all .2s',
                fontFamily: 'inherit',
              }}
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Exam grid */}
        <div style={{ display: 'grid', gap: '.85rem' }}>
          {filteredExamenes.map((exam, i) => (
            <div
              key={exam.id}
              className="anim-fade-up"
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-strong)',
                borderRadius: 'var(--r-lg)',
                padding: '1.1rem 1.25rem',
                display: 'flex',
                gap: '.9rem',
                alignItems: 'flex-start',
                boxShadow: 'var(--shadow-card)',
                animationDelay: `${i * 60}ms`,
                opacity: 0,
                transition: 'all .25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--ac)'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-soft)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-strong)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'var(--shadow-card)'
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '2.75rem',
                  height: '2.75rem',
                  borderRadius: '50%',
                  background: 'var(--kids-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  flexShrink: 0,
                }}
              >
                {exam.emoji}
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '.5rem',
                    marginBottom: '.3rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <h4
                    style={{
                      fontSize: '.92rem',
                      fontWeight: 900,
                      color: 'var(--dark)',
                      margin: 0,
                    }}
                  >
                    {exam.name}
                  </h4>
                  {exam.required ? (
                    <span
                      style={{
                        fontSize: '.62rem',
                        fontWeight: 900,
                        padding: '.15rem .55rem',
                        borderRadius: 999,
                        background: 'var(--ac-light)',
                        color: 'var(--ac)',
                        textTransform: 'uppercase',
                        letterSpacing: '.05em',
                      }}
                    >
                      Requerido
                    </span>
                  ) : (
                    <span
                      style={{
                        fontSize: '.62rem',
                        fontWeight: 900,
                        padding: '.15rem .55rem',
                        borderRadius: 999,
                        background: 'var(--bg-soft)',
                        color: 'var(--gray)',
                        textTransform: 'uppercase',
                        letterSpacing: '.05em',
                      }}
                    >
                      Recomendado
                    </span>
                  )}
                  <span
                    style={{
                      fontSize: '.62rem',
                      fontWeight: 800,
                      color: 'var(--gray-light)',
                      marginLeft: 'auto',
                    }}
                  >
                    {CATEGORY_LABELS[exam.category] || exam.category}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: '.82rem',
                    color: 'var(--gray)',
                    margin: 0,
                    lineHeight: 1.4,
                    fontWeight: 600,
                  }}
                >
                  {exam.why}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div
          className="app-card"
          style={{
            marginTop: '1.75rem',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, var(--kids-light) 0%, var(--bg-soft) 100%)',
            border: '1px solid rgba(14,165,233,.25)',
          }}
        >
          <div style={{ display: 'flex', gap: '.85rem', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '2rem', flexShrink: 0 }}>📋</span>
            <div>
              <h4 style={{ fontSize: '1rem', marginBottom: '.35rem' }}>
                ¿No tienes estos exámenes recientes?
              </h4>
              <p style={{ fontSize: '.85rem', margin: 0, fontWeight: 700 }}>
                Tenemos convenio con laboratorios aliados.{' '}
                <strong style={{ color: 'var(--dark)' }}>30% de descuento</strong> para nuestras pacientes.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
            <button
              onClick={() => setModalOpen(true)}
              className="btn btn-rap btn-full"
            >
              📤 Subir mis exámenes
            </button>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-full">
              💬 Ayúdame a programarlos
            </a>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15,23,42,.6)',
            backdropFilter: 'blur(8px)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
            animation: 'fadeIn .25s ease',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            className="anim-pop"
            style={{
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--r-xl)',
              padding: '1.75rem',
              maxWidth: 420,
              width: '100%',
              boxShadow: 'var(--shadow-hero)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '1rem',
                  background: 'var(--ac-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.75rem',
                  margin: '0 auto .75rem',
                }}
              >
                📤
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '.4rem' }}>Sube tus exámenes</h3>
              <p style={{ fontSize: '.85rem', fontWeight: 700, margin: 0 }}>
                PDF, JPG o PNG · Máximo 10MB por archivo
              </p>
            </div>

            <label
              htmlFor="examen-upload"
              style={{
                display: 'block',
                padding: '2rem 1rem',
                border: '2px dashed var(--border-strong)',
                borderRadius: 'var(--r-lg)',
                textAlign: 'center',
                cursor: 'pointer',
                marginBottom: '1rem',
                transition: 'all .2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--ac)'
                e.currentTarget.style.background = 'var(--ac-light)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-strong)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '.5rem' }}>📎</span>
              <p style={{ fontSize: '.9rem', fontWeight: 800, color: 'var(--dark)', margin: 0 }}>
                Toca para seleccionar archivos
              </p>
              <p style={{ fontSize: '.75rem', color: 'var(--gray)', margin: '.25rem 0 0' }}>
                O envíalos por WhatsApp directamente
              </p>
              <input
                id="examen-upload"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                multiple
                style={{ display: 'none' }}
                onChange={e => {
                  const files = e.target.files
                  if (files && files.length > 0) {
                    alert(
                      `Recibimos ${files.length} archivo(s). Para procesarlos, te contactaremos por WhatsApp en menos de 24 horas.`
                    )
                    setModalOpen(false)
                  }
                }}
              />
            </label>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa btn-full"
              style={{ marginBottom: '.5rem' }}
            >
              💬 Enviar por WhatsApp
            </a>
            <button
              onClick={() => setModalOpen(false)}
              className="btn btn-outline btn-full"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
