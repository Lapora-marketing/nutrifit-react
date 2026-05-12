'use client'

import { useProfile } from '@/components/ProfileContext'
import { Button, Badge } from '@/components/atoms'

export function PlanesSection() {
  const { currentProfile } = useProfile()

  if (!currentProfile) return null

  const planes = [
    { name: 'Acceso App', price: '$80k', sub: '/ mes · acceso completo a la app', features: ['App NutriFit completa', 'Lab de hábitos y medidas', 'NutriBot IA 24/7', 'Planes alimentarios'] },
    { name: `Programa Completo · ${currentProfile.label}`, price: '$490k', sub: 'total 3 meses · 4 cupos', features: ['App NutriFit activada', '4 sesiones de consulta', 'Plan alimentario personalizado', 'Acceso a clases grabadas', 'Grupo privado', 'Reporte mensual'], featured: true },
    { name: 'Solo Consulta', price: '$120k', sub: 'consulta individual', features: ['Consulta 1:1 con médico', 'Diagnóstico corporal', 'Plan inicial', 'Seguimiento WhatsApp'] },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 md:px-10" style={{ background: '#040A13' }}>
      <div className="max-w-5xl w-full">
        <div className="text-sm font-bold letter-spacing-0.8px text-transform-uppercase mb-3" style={{ color: currentProfile.color }}>
          Inversión
        </div>

        <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
          Planes diseñados para cada programa
        </h2>

        <p className="text-lg text-[rgba(255,255,255,0.6)] mb-8 leading-relaxed">
          Sin contratos anuales ni letra pequeña. Elige el que va con tu momento de vida.
        </p>

        <div className="w-14 h-1 rounded-full mb-12" style={{ background: `linear-gradient(90deg, ${currentProfile.color}, ${currentProfile.color}00)` }} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {planes.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-8 border transition-all duration-400 ${
                plan.featured ? 'scale-105' : ''
              }`}
              style={{
                background: plan.featured
                  ? `linear-gradient(160deg, rgba(${currentProfile.colorRgb}, 0.18), rgba(${currentProfile.colorRgb}, 0.04))`
                  : 'rgba(255,255,255,0.04)',
                borderColor: plan.featured ? currentProfile.color : 'rgba(255,255,255,0.09)',
              }}
            >
              {plan.featured && (
                <Badge variant="featured" className="absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                  ⭐ Recomendado
                </Badge>
              )}

              <h3 className="text-lg font-bold mb-2 text-[rgba(255,255,255,0.8)]">{plan.name}</h3>
              <div className="text-3xl font-black mb-1" style={{ color: currentProfile.color }}>
                {plan.price}
              </div>
              <div className="text-sm text-[rgba(255,255,255,0.35)] mb-6">{plan.sub}</div>

              <ul className="mb-6 space-y-2.5">
                {plan.features.map((feature, j) => (
                  <li key={j} className="text-sm text-[rgba(255,255,255,0.7)] flex items-start gap-2">
                    <span className="text-[#10b981] font-bold mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant={plan.featured ? 'primary' : 'outline'} className="w-full">
                {plan.featured ? 'Quiero este programa' : 'Información'}
              </Button>
            </div>
          ))}
        </div>

        {/* Garantía */}
        <div className="rounded-3xl p-8 border flex items-start gap-6" style={{ background: 'rgba(16,185,129,0.07)', borderColor: 'rgba(16,185,129,0.22)' }}>
          <div className="text-4xl flex-shrink-0">🛡️</div>
          <div>
            <h3 className="text-lg font-bold mb-2" style={{ color: '#10b981' }}>
              Compromiso de resultados
            </h3>
            <p className="text-sm text-[rgba(255,255,255,0.6)] leading-relaxed">
              Si en las primeras 4 semanas no hay resultados medibles, revisamos el protocolo sin costo adicional. Trabajamos con métricas claras desde el día 1.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
