'use client'

import { useProfile } from '@/components/ProfileContext'

export function PlanesSection() {
  const { currentProfile } = useProfile()

  if (!currentProfile) return null

  const planes = [
    {
      name: 'Acceso App',
      price: '$80k',
      sub: '/ mes',
      desc: 'Acceso completo a la app',
      features: ['App NutriFit completa', 'Lab de hábitos y medidas', 'NutriBot IA 24/7', 'Planes alimentarios'],
      featured: false,
    },
    {
      name: `Programa Completo`,
      badge: currentProfile.label,
      price: '$490k',
      sub: 'total 3 meses',
      desc: 'Solo 4 cupos disponibles',
      features: ['App NutriFit activada', '4 sesiones de consulta', 'Plan alimentario personalizado', 'Acceso a clases grabadas', 'Grupo privado', 'Reporte mensual'],
      featured: true,
    },
    {
      name: 'Solo Consulta',
      price: '$120k',
      sub: 'consulta individual',
      desc: '',
      features: ['Consulta 1:1 con médico', 'Diagnóstico corporal', 'Plan inicial', 'Seguimiento WhatsApp'],
      featured: false,
    },
  ]

  return (
    <section
      id="planes"
      className="py-16 md:py-24 px-5 sm:px-8"
      style={{ background: '#040A13' }}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section header */}
        <div className="max-w-2xl mb-10 md:mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: currentProfile.color }}
          >
            Inversión
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight">
            Planes diseñados para{' '}
            <span style={{ color: currentProfile.color }}>cada etapa</span>
          </h2>

          <p className="text-base md:text-lg text-[rgba(255,255,255,0.55)] leading-relaxed">
            Sin contratos anuales ni letra pequeña. Elige el que va con tu momento de vida.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-8">
          {planes.map((plan, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-5 md:p-6 border flex flex-col transition-all duration-300 hover-lift"
              style={{
                background: plan.featured
                  ? `linear-gradient(160deg, rgba(${currentProfile.colorRgb}, 0.16), rgba(${currentProfile.colorRgb}, 0.04))`
                  : 'rgba(255,255,255,0.03)',
                borderColor: plan.featured
                  ? currentProfile.color
                  : 'rgba(255,255,255,0.08)',
              }}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white whitespace-nowrap"
                  style={{
                    background: `linear-gradient(90deg, ${currentProfile.color}, rgba(${currentProfile.colorRgb}, 0.7))`,
                    boxShadow: `0 2px 12px rgba(${currentProfile.colorRgb}, 0.4)`,
                  }}
                >
                  ⭐ Recomendado
                </div>
              )}

              {/* Plan header */}
              <div className="mb-5">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-bold text-sm md:text-base text-white leading-snug">
                    {plan.name}
                  </h3>
                  {plan.badge && (
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-bold shrink-0"
                      style={{
                        background: `rgba(${currentProfile.colorRgb}, 0.15)`,
                        color: currentProfile.color,
                      }}
                    >
                      {plan.badge}
                    </span>
                  )}
                </div>
                {plan.desc && (
                  <p className="text-xs text-[rgba(255,255,255,0.35)]">{plan.desc}</p>
                )}
              </div>

              {/* Price */}
              <div className="mb-5">
                <div className="text-2xl md:text-3xl font-black" style={{ color: currentProfile.color }}>
                  {plan.price}
                </div>
                <div className="text-xs text-[rgba(255,255,255,0.35)] mt-0.5">{plan.sub}</div>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-[rgba(255,255,255,0.65)]">
                    <span className="text-[#10b981] font-bold text-xs mt-0.5 shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className="w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 btn-ripple"
                style={
                  plan.featured
                    ? {
                        background: `linear-gradient(135deg, ${currentProfile.color}, rgba(${currentProfile.colorRgb}, 0.75))`,
                        color: '#fff',
                        boxShadow: `0 4px 16px rgba(${currentProfile.colorRgb}, 0.35)`,
                      }
                    : {
                        background: 'transparent',
                        border: `1.5px solid rgba(${currentProfile.colorRgb}, 0.35)`,
                        color: currentProfile.color,
                      }
                }
              >
                {plan.featured ? 'Quiero este programa' : 'Más información'}
              </button>
            </div>
          ))}
        </div>

        {/* Garantía */}
        <div
          className="rounded-2xl p-5 md:p-6 border flex items-start gap-4"
          style={{
            background: 'rgba(16,185,129,0.06)',
            borderColor: 'rgba(16,185,129,0.2)',
          }}
        >
          <span className="text-2xl shrink-0">🛡️</span>
          <div>
            <h3 className="font-bold text-sm md:text-base mb-1" style={{ color: '#10b981' }}>
              Compromiso de resultados
            </h3>
            <p className="text-sm text-[rgba(255,255,255,0.55)] leading-relaxed">
              Si en las primeras 4 semanas no hay resultados medibles, revisamos el protocolo sin costo adicional. Trabajamos con métricas claras desde el día 1.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
