import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nutrifit — Academia Médica',
    short_name: 'Nutrifit',
    description:
      'Tu plan nutricional personalizado con acompañamiento médico diario. Track de hábitos, hidratación, mood y exámenes.',
    start_url: '/app.html',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#f8fafc',
    theme_color: '#be185d',
    categories: ['health', 'medical', 'lifestyle', 'fitness'],
    lang: 'es-CO',
    dir: 'ltr',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    shortcuts: [
      {
        name: 'Tracker de hidratación',
        short_name: 'Agua',
        description: 'Marca tus vasos de agua del día',
        url: '/app.html#hidratacion',
      },
      {
        name: 'Chat con el médico',
        short_name: 'Médico',
        description: 'Habla con tu nutriólogo',
        url: '/app.html#medico',
      },
      {
        name: 'Mis hábitos',
        short_name: 'Hábitos',
        description: 'Track diario',
        url: '/app.html',
      },
    ],
  }
}
