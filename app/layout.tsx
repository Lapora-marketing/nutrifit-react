import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ProfileProvider, UserProvider } from '@/components'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nutrifit App — Tu plan de nutrición 100% personalizado',
  description: 'Academia Médica especializada en transformación corporal. Diagnóstico personalizado, plan de alimentación a tu medida y resultados garantizados.',
  keywords: 'nutrición, coaching, transformación corporal, nutricionista online, plan alimentario',
  authors: [{ name: 'Nutrifit' }],
  openGraph: {
    title: 'Nutrifit App — Tu plan de nutrición personalizado',
    description: 'Más de 2,847 transformaciones reales con nuestro programa médico-nutricional.',
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
    <html lang="es" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#080E1A" />
      </head>
      <body className={`${inter.className} bg-[#080E1A] text-white antialiased`}>
        <style>{`
          :root {
            --ac: #be185d;
            --ac-rgb: 190, 24, 93;
            --ac-ll: 245, 114, 175;
          }
        `}</style>
        <UserProvider>
          <ProfileProvider>
            {children}
          </ProfileProvider>
        </UserProvider>
      </body>
    </html>
  )
}
