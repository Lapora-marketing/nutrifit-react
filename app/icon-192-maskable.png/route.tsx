import { ImageResponse } from 'next/og'

export const runtime = 'edge'

/**
 * Maskable icon — Android uses this for adaptive icons (circular, squircle, etc.)
 * The icon needs a "safe zone" — the actual content must be in the center 80%
 * (radius ~40% from center), the outer 20% can be cropped.
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
        {/* Letter sized smaller so it fits in the safe zone */}
        <div
          style={{
            fontSize: 80,
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
      width: 192,
      height: 192,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400',
      },
    }
  )
}
