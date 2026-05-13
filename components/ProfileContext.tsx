'use client'

import React, { createContext, useContext, useState } from 'react'
import { PERFILES, type Perfil } from '@/lib/perfiles'

export interface ProfileContextType {
  currentProfile: Perfil | null
  setProfile: (id: 'rap' | 'kids' | 'fit') => void
  setProfileColors: () => void
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined)

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [currentProfile, setCurrentProfile] = useState<Perfil | null>(PERFILES.rap)

  const setProfile = (id: 'rap' | 'kids' | 'fit') => {
    const profile = PERFILES[id]
    setCurrentProfile(profile)
    setProfileColors()
  }

  const setProfileColors = () => {
    if (currentProfile) {
      document.documentElement.style.setProperty('--ac', currentProfile.color)
      document.documentElement.style.setProperty('--ac-rgb', currentProfile.colorRgb)
    }
  }

  return (
    <ProfileContext.Provider value={{ currentProfile, setProfile, setProfileColors }}>
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
