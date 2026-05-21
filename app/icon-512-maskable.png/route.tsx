import { ImageResponse } from 'next/og'

export const runtime = 'edge'

/**
 * 512x512 maskable icon for Android adaptive icons.
 * Safe zone in center 80%, decorative padding outside.
 */
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #be185d 0%, #9d1550 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: 220,
            fontWeight: 900,
            color: '#ffffff',
            fontFamily: 'system-ui, sans-serif',
            letterSpacing: '-0.05em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: 1,
          }}
        >
          N
        </div>
      </div>
    ),
    {
      width: 512,
      height: 512,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400',
      },
    }
  )
}
