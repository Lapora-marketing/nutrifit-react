'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { PERFILES, type Perfil } from '@/lib/perfiles'

export interface ProfileContextType {
  currentProfile: Perfil | null
  setProfile: (id: 'rap' | 'kids' | 'fit') => void
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined)

// Light variants for each profile (for backgrounds in light theme)
const LIGHT_VARIANTS: Record<string, { light: string; mid: string; dark: string }> = {
  rap: { light: '#fce7f3', mid: '#fbcfe8', dark: '#9d1550' },
  kids: { light: '#e0f2fe', mid: '#bae6fd', dark: '#0284c7' },
  fit: { light: '#ffedd5', mid: '#fed7aa', dark: '#c2410c' },
}

function applyProfileTokens(profile: Perfil) {
  const root = document.documentElement
  const variant = LIGHT_VARIANTS[profile.id] || LIGHT_VARIANTS.rap
  root.style.setProperty('--ac', profile.color)
  root.style.setProperty('--ac-rgb', profile.colorRgb)
  root.style.setProperty('--ac-light', variant.light)
  root.style.setProperty('--ac-mid', variant.mid)
  root.style.setProperty('--ac-dark', variant.dark)
}

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [currentProfile, setCurrentProfile] = useState<Perfil | null>(PERFILES.rap)

  useEffect(() => {
    if (currentProfile) applyProfileTokens(currentProfile)
  }, [currentProfile])

  const setProfile = (id: 'rap' | 'kids' | 'fit') => {
    const profile = PERFILES[id]
    setCurrentProfile(profile)
  }

  return (
    <ProfileContext.Provider value={{ currentProfile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

export function useProfile() {
  const context = useContext(ProfileContext)
  if (!context) {
    throw new Error('useProfile must be used within ProfileProvider')
  }
  return context
}
