export type Objetivo =
  | 'bajar-peso'
  | 'ganar-masa'
  | 'mejorar-salud'
  | 'controlar-ansiedad'
  | 'salud-digestiva'

export type TiempoPostparto =
  | 'menos-3'
  | '3-6'
  | '6-12'
  | 'mas-1-ano'
  | 'embarazada'

export type Disponibilidad =
  | 'madrugada'
  | 'mañana'
  | 'tarde'
  | 'noche'
  | 'flexible'
  | 'no-entreno'

export interface UserPreferences {
  // Q1: identity
  nombre: string
  edad: string

  // Q2: goals (multi-select)
  objetivos: Objetivo[]

  // Q3: body metrics
  peso: string // kg
  estatura: string // cm

  // Q4: postpartum time
  tiempoPostparto: TiempoPostparto

  // Q5: training availability
  disponibilidad: Disponibilidad
}

const STORAGE_KEY = 'nutrifit-user-preferences'
const SCHEMA_VERSION = 2 // bumped when form structure changed

interface StoredPrefs extends UserPreferences {
  _v?: number
}

export function saveUserPreferences(prefs: UserPreferences): void {
  const payload: StoredPrefs = { ...prefs, _v: SCHEMA_VERSION }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
}

export function getUserPreferences(): UserPreferences | null {
  if (typeof window === 'undefined') return null

  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) return null

  try {
    const data = JSON.parse(stored) as StoredPrefs
    // Reject old schema versions — user must re-fill the new form
    if (data._v !== SCHEMA_VERSION) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }
    return data
  } catch {
    localStorage.removeItem(STORAGE_KEY)
    return null
  }
}

export function hasCompletedOnboarding(): boolean {
  return !!getUserPreferences()
}

export function clearUserPreferences(): void {
  localStorage.removeItem(STORAGE_KEY)
}
