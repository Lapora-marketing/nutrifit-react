import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    // ===== IDENTITY =====
    name: 'Nutrifit — Academia Médica',
    short_name: 'Nutrifit',
    id: '/?source=pwa',
    description:
      'Tu plan nutricional personalizado con acompañamiento médico diario. Track de hábitos, hidratación, mood y exámenes.',

    // ===== LAUNCH =====
    start_url: '/app.html',
    scope: '/',
    display: 'standalone',
    display_override: ['standalone', 'minimal-ui'],
    orientation: 'portrait',

    // ===== STYLING =====
    background_color: '#f8fafc',
    theme_color: '#be185d',
    categories: ['health', 'medical', 'lifestyle', 'fitness'],
    lang: 'es-CO',
    dir: 'ltr',

    // ===== ICONS (PNG required by PWABuilder) =====
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-192-maskable.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],

    // ===== SCREENSHOTS (PWABuilder requirement) =====
    screenshots: [
      {
        src: '/screenshot-mobile.png',
        sizes: '430x932',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Tu día en Nutrifit — hábitos, hidratación y guía médica',
      },
    ],

    // ===== SHORTCUTS (long-press from home icon) =====
    shortcuts: [
      {
        name: 'Tracker de hidratación',
        short_name: 'Agua',
        description: 'Marca tus vasos de agua del día',
        url: '/app.html#hidratacion',
        icons: [{ src: '/icon-192.png', sizes: '192x192' }],
      },
      {
        name: 'Chat con el médico',
        short_name: 'Médico',
        description: 'Habla con tu nutriólogo',
        url: '/app.html#medico',
        icons: [{ src: '/icon-192.png', sizes: '192x192' }],
      },
      {
        name: 'Mis hábitos del día',
        short_name: 'Hábitos',
        description: 'Track diario de comidas, mood y movimiento',
        url: '/app.html',
        icons: [{ src: '/icon-192.png', sizes: '192x192' }],
      },
    ],

    // ===== ADVANCED FEATURES (PWABuilder boosts score) =====
    prefer_related_applications: false,
    related_applications: [],

    // Cast as any to add fields not yet in Next.js types
    ...({
      // Launch in a single window mode (focus existing instance)
      launch_handler: {
        client_mode: ['focus-existing', 'auto'],
      },

      // OS share menu integration — users can share content TO Nutrifit
      share_target: {
        action: '/app.html',
        method: 'GET',
        params: {
          title: 'title',
          text: 'text',
          url: 'url',
        },
      },

      // Handle custom protocol links: web+nutrifit://abrir-examen?id=123
      protocol_handlers: [
        {
          protocol: 'web+nutrifit',
          url: '/app.html?action=%s',
        },
      ],

      // Let users "Open with Nutrifit" from file manager (PDFs, images)
      file_handlers: [
        {
          action: '/app.html#examenes',
          accept: {
            'application/pdf': ['.pdf'],
            'image/jpeg': ['.jpg', '.jpeg'],
            'image/png': ['.png'],
          },
          icons: [{ src: '/icon-192.png', sizes: '192x192', type: 'image/png' }],
        },
      ],

      // Edge sidebar support (when app is open in side panel)
      edge_side_panel: {
        preferred_width: 480,
      },

      // Window controls overlay (replaces title bar with custom UI)
      window_controls_overlay: {
        visible: true,
      },

      // Handle links pointing to nutrifit-react-n1go.vercel.app
      handle_links: 'preferred',
    } as Record<string, unknown>),
  }
}
