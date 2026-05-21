'use client'

import { useEffect, useState } from 'react'

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

const DISMISSED_KEY = 'nutrifit-install-dismissed'

export function PWAInstaller() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [visible, setVisible] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [installed, setInstalled] = useState(false)

  useEffect(() => {
    // 1. Register the service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .catch((err) => console.error('SW registration failed:', err))
    }

    // 2. Detect iOS (no beforeinstallprompt support — manual instructions)
    const ua = window.navigator.userAgent.toLowerCase()
    const ios = /iphone|ipad|ipod/.test(ua) && !/safari/.test(ua) ? false : /iphone|ipad|ipod/.test(ua)
    setIsIOS(ios)

    // 3. Check if already installed (display-mode: standalone)
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setInstalled(true)
      return
    }

    // 4. Check if user previously dismissed
    const dismissedAt = localStorage.getItem(DISMISSED_KEY)
    if (dismissedAt) {
      // Show again after 7 days
      const days = (Date.now() - parseInt(dismissedAt)) / (1000 * 60 * 60 * 24)
      if (days < 7) return
    }

    // 5. Listen for beforeinstallprompt (Android/Chrome/Edge)
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      // Show prompt after 8 seconds (let user explore first)
      setTimeout(() => setVisible(true), 8000)
    }
    window.addEventListener('beforeinstallprompt', handler)

    // 6. For iOS, show manual instructions after delay
    if (ios) {
      setTimeout(() => setVisible(true), 12000)
    }

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
        setInstalled(true)
      }
      setDeferredPrompt(null)
      setVisible(false)
    }
  }

  const handleDismiss = () => {
    localStorage.setItem(DISMISSED_KEY, Date.now().toString())
    setVisible(false)
  }

  if (installed || !visible) return null

  return (
    <div
      role="dialog"
      aria-label="Instalar Nutrifit como app"
      style={{
        position: 'fixed',
        bottom: '1rem',
        left: '1rem',
        right: '1rem',
        maxWidth: 420,
        margin: '0 auto',
        background: '#ffffff',
        borderRadius: '1.25rem',
        boxShadow: '0 12px 40px -8px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.05)',
        padding: '1rem 1.15rem',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        gap: '0.85rem',
        animation: 'slideUpFade 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        fontFamily: 'inherit',
      }}
    >
      <div
        style={{
          width: '3rem',
          height: '3rem',
          borderRadius: '0.85rem',
          background: 'linear-gradient(135deg, #be185d 0%, #9d1550 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.4rem',
          color: '#fff',
          fontWeight: 900,
          flexShrink: 0,
        }}
      >
        N
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            fontSize: '0.88rem',
            fontWeight: 900,
            color: '#0f172a',
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {isIOS ? 'Instala Nutrifit en tu iPhone' : 'Instala Nutrifit como app'}
        </p>
        <p
          style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            color: '#64748b',
            margin: '0.15rem 0 0',
            lineHeight: 1.3,
          }}
        >
          {isIOS
            ? 'Toca Compartir → "Añadir a inicio"'
            : 'Funciona offline y sin abrir el navegador'}
        </p>
      </div>

      <div style={{ display: 'flex', gap: '0.4rem', flexShrink: 0 }}>
        {!isIOS && deferredPrompt && (
          <button
            onClick={handleInstall}
            style={{
              background: '#be185d',
              color: '#fff',
              fontWeight: 900,
              fontSize: '0.78rem',
              padding: '0.55rem 0.9rem',
              borderRadius: '0.7rem',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              boxShadow: '0 4px 12px rgba(190, 24, 93, 0.35)',
              whiteSpace: 'nowrap',
            }}
          >
            Instalar
          </button>
        )}
        <button
          onClick={handleDismiss}
          aria-label="Cerrar"
          style={{
            background: '#f1f5f9',
            color: '#64748b',
            fontWeight: 900,
            fontSize: '1rem',
            width: '2rem',
            height: '2rem',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
          }}
        >
          ×
        </button>
      </div>

      <style jsx>{`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
