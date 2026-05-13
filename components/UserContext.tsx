'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { type UserPreferences, getUserPreferences } from '@/lib/userPreferences'

interface UserContextType {
  userPreferences: UserPreferences | null
  setUserPreferences: (prefs: UserPreferences) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userPreferences, setUserPreferences] = useState<UserPreferences | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Cargar preferencias del localStorage al montar
    const prefs = getUserPreferences()
    setUserPreferences(prefs)
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <div className="bg-white w-screen h-screen" /> // Blank screen while loading
  }

  return (
    <UserContext.Provider value={{ userPreferences, setUserPreferences }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within UserProvider')
  }
  return context
}
