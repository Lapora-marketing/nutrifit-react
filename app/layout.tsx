import type { Metadata } from 'next'
import { ProfileProvider } from '@/components'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nutrifit App - Academia Médica de Nutrición',
  description: 'Programa de nutrición y transformación corporal personalizado según tu perfil. Acceso completo a app, consultas médicas y planes alimentarios.',
  keywords: 'nutrición, coaching, transformación corporal, nutricionista online',
  authors: [{ name: 'Nutrifit' }],
  openGraph: {
    title: 'Nutrifit App',
    description: 'Programa de nutrición personalizado para ti',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-[#080E1A] text-white antialiased">
        <style>{`
          :root {
            --ac: #be185d;
            --ac-rgb: 190, 24, 93;
            --ac-ll: 245, 114, 175;
          }
        `}</style>
        <ProfileProvider>
          {children}
        </ProfileProvider>
      </body>
    </html>
  )
}
