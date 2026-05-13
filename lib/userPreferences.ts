export interface UserPreferences {
  nombre: string
  objetivo: 'bajar-peso' | 'ganar-masa' | 'mejorar-salud' | 'otro'
  nivelActividad: 'sedentario' | 'leve' | 'moderado' | 'intenso'
  alergias: string
  disponibilidad: 'mañana' | 'tarde' | 'noche'
}

const STORAGE_KEY = 'nutrifit-user-preferences'

export function saveUserPreferences(prefs: UserPreferences): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
}

export function getUserPreferences(): UserPreferences | null {
  if (typeof window === 'undefined') return null

  const stored = localStorage.getItem(STORAGE_KEY)
  return stored ? JSON.parse(stored) : null
}

export function hasCompletedOnboarding(): boolean {
  if (typeof window === 'undefined') return false
  return !!localStorage.getItem(STORAGE_KEY)
}

export function clearUserPreferences(): void {
  localStorage.removeItem(STORAGE_KEY)
}
