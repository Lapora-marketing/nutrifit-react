'use client'

import { useProfile } from '@/components/ProfileContext'

export function TrustBar() {
  const { currentProfile } = useProfile()
  if (!currentProfile) return null

  return (
    <div
      style={{
        padding: '1.5rem 0',
        background: 'var(--white)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          maxWidth: 680,
          margin: '0 auto',
          padding: '0 1.25rem',
        }}
      >
        {currentProfile.stats.map((stat, i, arr) => (
          <div key={i} style={{ display: 'contents' }}>
            <div style={{ textAlign: 'center' }}>
              <span
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 900,
                  color: 'var(--dark)',
                  display: 'block',
                  lineHeight: 1,
                }}
              >
                {stat.num}
              </span>
              <span
                style={{
                  fontSize: '.68rem',
                  fontWeight: 800,
                  color: 'var(--gray)',
                  textTransform: 'uppercase',
                  letterSpacing: '.05em',
                  display: 'block',
                  marginTop: '.25rem',
                }}
              >
                {stat.label}
              </span>
            </div>
            {i < arr.length - 1 && (
              <div style={{ width: 1, height: '2.5rem', background: 'var(--border)' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
