import type { Metadata, Viewport } from 'next'
import { Nunito } from 'next/font/google'
import { ProfileProvider, UserProvider, PWAInstaller } from '@/components'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'Nutrifit — Academia Médica de Nutrición',
  description:
    'Programa médico-nutricional personalizado. Recupera tu cuerpo y tu energía con un sistema diseñado por especialistas.',
  applicationName: 'Nutrifit',
  appleWebApp: {
    capable: true,
    title: 'Nutrifit',
    statusBarStyle: 'black-translucent',
    startupImage: ['/apple-icon'],
  },
  formatDetection: {
    telephone: false,
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: 'Nutrifit — Tu transformación empieza hoy',
    description:
      'Sistema médico-nutricional con más de 500 pacientes transformadas.',
    type: 'website',
    siteName: 'Nutrifit',
  },
  robots: { index: true, follow: true },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Nutrifit',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning className={nunito.variable}>
      <body className={nunito.className}>
        <UserProvider>
          <ProfileProvider>
            {children}
            <PWAInstaller />
          </ProfileProvider>
        </UserProvider>
      </body>
    </html>
  )
}
