import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { ProfileProvider, UserProvider } from '@/components'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nutrifit — Academia Médica de Nutrición',
  description: 'Programa médico-nutricional personalizado. Recupera tu cuerpo y tu energía con un sistema diseñado por especialistas.',
  keywords: 'nutrición, transformación corporal, mamá rap, kids, fit, nutricionista, Colombia',
  authors: [{ name: 'Nutrifit Academia' }],
  openGraph: {
    title: 'Nutrifit — Tu transformación empieza hoy',
    description: 'Sistema médico-nutricional con más de 200 pacientes transformadas.',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={nunito.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#be185d" />
      </head>
      <body className={nunito.className}>
        <UserProvider>
          <ProfileProvider>
            {children}
          </ProfileProvider>
        </UserProvider>
      </body>
    </html>
  )
}
