'use client'

import { useProfile } from '@/components/ProfileContext'
import { useUser } from '@/components/UserContext'
import Image from 'next/image'

interface DolorItem {
  emoji: string
  quote: string
  context: string
}

// Optional emotional cover image per profile
const COVER_IMG: Record<'rap' | 'kids' | 'fit', string | null> = {
  rap: '/img/mamitas/closeup-sunset.jpeg',
  kids: null,
  fit: null,
}

const DOLORES: Record<'rap' | 'kids' | 'fit', DolorItem[]> = {
  rap: [
    {
      emoji: '💔',
      quote: 'Has llorado mirándote al espejo después de ducharte.',
      context: 'Y no entiendes por qué nadie habló de esto en los cursos de preparación al parto.',
    },
    {
      emoji: '📷',
      quote: 'Te escondes detrás del bebé en las fotos familiares.',
      context: 'Antes te encantaba salir en las fotos. Ahora ni te reconoces en ellas.',
    },
    {
      emoji: '💑',
      quote: 'Sientes que tu pareja ya no te mira igual — o tal vez eres tú quien no se mira igual.',
      context: 'Y eso a veces duele más que cualquier número en la báscula.',
    },
    {
      emoji: '🥱',
      quote: 'No tienes energía para jugar con tu hijo sin terminar agotada.',
      context: 'Te dijeron que el postparto duraba 40 días. Ya pasó más de un año.',
    },
    {
      emoji: '🤰',
      quote: 'La faja se convirtió en parte de tu cuerpo.',
      context: 'Sin ella te sientes desnuda. Con ella, casi no respiras.',
    },
    {
      emoji: '😞',
      quote: '"Es normal, ya pasará" — pero ya pasó demasiado tiempo.',
      context: 'Y empezaste a creer que así te tocaría quedar para siempre.',
    },
  ],
  kids: [
    {
      emoji: '🍕',
      quote: 'Tu hijo solo quiere comer comida ultraprocesada.',
      context: 'Y en la lonchera todo termina en chocolatinas y paquetes.',
    },
    {
      emoji: '😩',
      quote: 'Las comidas se volvieron una batalla diaria.',
      context: 'Lloran, gritan, se levantan de la mesa. Tú te rindes y le das lo que quiera.',
    },
    {
      emoji: '📉',
      quote: 'El pediatra dice "está bajo en hierro" pero no sabes qué cambiar.',
      context: 'Le diste vitaminas, suplementos, todo. Y los exámenes no mejoran.',
    },
    {
      emoji: '🏫',
      quote: 'En el colegio se queja de cansancio y le cuesta concentrarse.',
      context: 'Y tú sospechas que la alimentación tiene algo que ver — pero no sabes por dónde empezar.',
    },
    {
      emoji: '😟',
      quote: 'Te sientes la peor mamá del mundo cuando solo logras hacer pasta.',
      context: 'Sabes que debería comer mejor. Pero entre el trabajo y la rutina, ya no puedes.',
    },
    {
      emoji: '⚖️',
      quote: 'Tiene sobrepeso (o muy bajo peso) y nadie te da un plan claro.',
      context: 'Solo "que coma más verduras" o "que coma menos dulce". Pero ¿cómo?',
    },
  ],
  fit: [
    {
      emoji: '🪞',
      quote: 'Ves fotos tuyas de hace 5 años y no te reconoces.',
      context: 'No engordaste tanto. Pero algo cambió. Y no sabes qué.',
    },
    {
      emoji: '😤',
      quote: 'Haces dieta, no bajas. Tomas café, no aguantas. Vas al gym, no rinde.',
      context: 'Es como si tu cuerpo ya no respondiera como antes. Y nadie te explica por qué.',
    },
    {
      emoji: '💼',
      quote: 'El trabajo te consume y la energía se acabó hace meses.',
      context: 'A las 3pm ya estás muerto. Y a las 8pm sigues comiendo "algo dulce" sin saber por qué.',
    },
    {
      emoji: '🩺',
      quote: 'Los exámenes salen "normales" pero te sientes peor cada mes.',
      context: 'Te dicen que estás bien. Pero tú sabes que algo no anda. Y nadie investiga.',
    },
    {
      emoji: '🛌',
      quote: 'Duermes 8 horas y te despiertas más cansado que cuando te acostaste.',
      context: 'Y aún así, en la noche no logras dormirte. Algo no cuadra.',
    },
    {
      emoji: '🧠',
      quote: 'Sientes "niebla mental" cuando antes eras súper concentrado.',
      context: 'Te cuesta enfocarte. Olvidas cosas. Y eso te asusta más de lo que admites.',
    },
  ],
}

export function EspejoSection() {
  const { currentProfile } = useProfile()
  const { userPreferences } = useUser()

  if (!currentProfile) return null

  const dolores = DOLORES[currentProfile.id] || DOLORES.rap
  const greeting = userPreferences?.nombre ? `${userPreferences.nombre}, ` : ''
  const coverImg = COVER_IMG[currentProfile.id]

  return (
    <section
      id="espejo"
      className="section"
      style={{
        background: `linear-gradient(180deg, var(--bg) 0%, var(--ac-light) 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-4rem',
          right: '-4rem',
          width: '16rem',
          height: '16rem',
          borderRadius: '50%',
          background: `rgba(${currentProfile.colorRgb}, 0.08)`,
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-6rem',
          left: '-6rem',
          width: '20rem',
          height: '20rem',
          borderRadius: '50%',
          background: `rgba(${currentProfile.colorRgb}, 0.06)`,
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-tight" style={{ position: 'relative' }}>
        <div className="app-tag">💭 Espejo emocional</div>

        <h2 style={{ marginBottom: '.75rem' }}>
          {greeting}yo sé exactamente{' '}
          <span style={{ color: 'var(--ac)' }}>lo que estás sintiendo</span>
        </h2>

        <p style={{ fontWeight: 700, marginBottom: '1.5rem', color: 'var(--gray)' }}>
          Si te identificas con al menos 3 de estas, sigue leyendo. Esto fue diseñado para ti.
        </p>

        {/* Emotional cover image */}
        {coverImg && (
          <div
            className="anim-pop"
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 10',
              borderRadius: 'var(--r-xl)',
              overflow: 'hidden',
              marginBottom: '2rem',
              boxShadow: 'var(--shadow-hero)',
            }}
          >
            <Image
              src={coverImg}
              alt="Mamita y bebé al atardecer"
              fill
              sizes="(max-width: 768px) 100vw, 680px"
              style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            />
            {/* Bottom gradient with floating quote */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(15,23,42,.85) 100%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.5rem',
              }}
            >
              <div style={{ color: '#fff' }}>
                <p
                  style={{
                    fontSize: '1rem',
                    fontWeight: 800,
                    fontStyle: 'italic',
                    lineHeight: 1.4,
                    color: '#fff',
                    marginBottom: '.35rem',
                    textShadow: '0 2px 8px rgba(0,0,0,.4)',
                  }}
                >
                  "Quiero volver a sentirme yo misma…"
                </p>
                <p
                  style={{
                    fontSize: '.78rem',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,.85)',
                    margin: 0,
                    textShadow: '0 1px 4px rgba(0,0,0,.4)',
                  }}
                >
                  — Lo que todas piensan en silencio
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Mirror cards — 1 column mobile, 2 columns desktop */}
        <div className="desktop-grid-2" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {dolores.map((d, i) => (
            <div
              key={i}
              className="anim-fade-up"
              style={{
                background: 'var(--bg-elevated)',
                borderRadius: 'var(--r-lg)',
                borderLeft: `4px solid var(--ac)`,
                boxShadow: 'var(--shadow-card)',
                padding: '1.25rem 1.35rem',
                animationDelay: `${i * 80}ms`,
                opacity: 0,
                transition: 'transform .25s ease, box-shadow .25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateX(4px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-soft)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateX(0)'
                e.currentTarget.style.boxShadow = 'var(--shadow-card)'
              }}
            >
              <div style={{ display: 'flex', gap: '.85rem', alignItems: 'flex-start' }}>
                <span
                  style={{
                    fontSize: '1.6rem',
                    flexShrink: 0,
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,.1))',
                  }}
                >
                  {d.emoji}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: '1rem',
                      fontWeight: 800,
                      fontStyle: 'italic',
                      color: 'var(--dark)',
                      lineHeight: 1.4,
                      marginBottom: '.35rem',
                    }}
                  >
                    "{d.quote}"
                  </p>
                  <p
                    style={{
                      fontSize: '.85rem',
                      color: 'var(--gray)',
                      lineHeight: 1.5,
                      margin: 0,
                      fontWeight: 600,
                    }}
                  >
                    {d.context}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closure: hope + CTA */}
        <div
          className="anim-fade-up"
          style={{
            marginTop: '2rem',
            padding: '1.75rem 1.5rem',
            background: 'var(--dark)',
            color: '#fff',
            borderRadius: 'var(--r-xl)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            animationDelay: `${dolores.length * 80 + 100}ms`,
            opacity: 0,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-3rem',
              right: '-3rem',
              width: '10rem',
              height: '10rem',
              borderRadius: '50%',
              background: `rgba(${currentProfile.colorRgb}, 0.25)`,
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative' }}>
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '.75rem' }}>
              💗
            </span>
            <h3
              style={{
                fontSize: '1.25rem',
                color: '#fff',
                marginBottom: '.5rem',
                lineHeight: 1.3,
              }}
            >
              No estás sola. Y no, esto{' '}
              <span style={{ color: '#f9a8d4' }}>NO tiene que ser tu nueva normalidad.</span>
            </h3>
            <p
              style={{
                color: 'rgba(255,255,255,.7)',
                fontSize: '.9rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
              }}
            >
              Lo que sientes tiene nombre, tiene causa biológica y tiene solución médica real.
            </p>
            <a href="#programa" className="btn btn-rap btn-full">
              Ver el método que cambia esto →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
