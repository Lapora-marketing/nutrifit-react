'use client'

import { useState } from 'react'
import { saveUserPreferences, type UserPreferences } from '@/lib/userPreferences'
import { Button } from './atoms/Button'

interface FormularioOnboardingProps {
  onComplete: (prefs: UserPreferences) => void
}

export function FormularioOnboarding({ onComplete }: FormularioOnboardingProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<Partial<UserPreferences>>({})

  const handleInputChange = (field: keyof UserPreferences, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1)
    } else {
      // Validar que todos los campos estén completos
      if (
        formData.nombre &&
        formData.objetivo &&
        formData.nivelActividad &&
        formData.alergias !== undefined &&
        formData.disponibilidad
      ) {
        const preferences = formData as UserPreferences
        saveUserPreferences(preferences)
        onComplete(preferences)
      }
    }
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return !!formData.nombre?.trim()
      case 2:
        return !!formData.objetivo
      case 3:
        return !!formData.nivelActividad
      case 4:
        return formData.alergias !== undefined
      case 5:
        return !!formData.disponibilidad
      default:
        return false
    }
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#D4C5A9] to-[#E8DCC8] flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-3">
            <span className="text-sm font-semibold text-gray-700">Paso {step} de 5</span>
            <span className="text-sm text-gray-500">{Math.round((step / 5) * 100)}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#B8C650] transition-all duration-300"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Nombre */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-2">¿Cómo te llamas?</h2>
            <p className="text-gray-600 mb-6">Queremos personalizarte la mejor experiencia</p>
            <input
              type="text"
              placeholder="Tu nombre completo"
              value={formData.nombre || ''}
              onChange={e => handleInputChange('nombre', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8C650] mb-6"
              autoFocus
            />
          </div>
        )}

        {/* Step 2: Objetivo */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-2">¿Cuál es tu objetivo?</h2>
            <p className="text-gray-600 mb-6">Esto nos ayuda a personalizar tu plan</p>
            <div className="space-y-3">
              {[
                { value: 'bajar-peso', label: 'Bajar de peso' },
                { value: 'ganar-masa', label: 'Ganar masa muscular' },
                { value: 'mejorar-salud', label: 'Mejorar mi salud' },
                { value: 'otro', label: 'Otro objetivo' },
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => handleInputChange('objetivo', opt.value)}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all text-left font-medium ${
                    formData.objetivo === opt.value
                      ? 'border-[#B8C650] bg-[#F5F8E8]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Nivel de actividad */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-2">¿Cuál es tu nivel de actividad?</h2>
            <p className="text-gray-600 mb-6">Sé honesto para un mejor plan</p>
            <div className="space-y-3">
              {[
                { value: 'sedentario', label: 'Sedentario (poco movimiento)' },
                { value: 'leve', label: 'Leve (1-2 días de ejercicio)' },
                { value: 'moderado', label: 'Moderado (3-4 días de ejercicio)' },
                { value: 'intenso', label: 'Intenso (5+ días de ejercicio)' },
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => handleInputChange('nivelActividad', opt.value)}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all text-left font-medium ${
                    formData.nivelActividad === opt.value
                      ? 'border-[#B8C650] bg-[#F5F8E8]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Alergias */}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold mb-2">¿Tienes alergias o restricciones?</h2>
            <p className="text-gray-600 mb-6">Esto es importante para tu seguridad</p>
            <textarea
              placeholder="Ej: Alergia a frutos secos, intolerancia a lactosa, vegetariano/vegano, etc."
              value={formData.alergias || ''}
              onChange={e => handleInputChange('alergias', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8C650] mb-6 resize-none h-24"
              autoFocus
            />
            <p className="text-xs text-gray-500">Déjalo en blanco si no tienes ninguna restricción</p>
          </div>
        )}

        {/* Step 5: Disponibilidad */}
        {step === 5 && (
          <div>
            <h2 className="text-2xl font-bold mb-2">¿A qué hora prefieres entrenar?</h2>
            <p className="text-gray-600 mb-6">Para adaptar tu plan a tu rutina</p>
            <div className="space-y-3">
              {[
                { value: 'mañana', label: '🌅 Mañana (6am - 12pm)' },
                { value: 'tarde', label: '☀️ Tarde (12pm - 6pm)' },
                { value: 'noche', label: '🌙 Noche (6pm - 10pm)' },
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => handleInputChange('disponibilidad', opt.value)}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all text-left font-medium ${
                    formData.disponibilidad === opt.value
                      ? 'border-[#B8C650] bg-[#F5F8E8]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex gap-3 mt-8">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Atrás
            </button>
          )}
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            variant={canProceed() ? 'primary' : 'outline'}
            className="flex-1"
          >
            {step === 5 ? 'Comenzar' : 'Siguiente'}
          </Button>
        </div>

        {/* Step indicator dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[1, 2, 3, 4, 5].map(i => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i <= step ? 'bg-[#B8C650]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
