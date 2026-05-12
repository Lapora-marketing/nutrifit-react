import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: 'var(--ac)',
      },
      backgroundColor: {
        dark: '#080E1A',
        darker: '#040A13',
        card: 'rgba(255,255,255,0.04)',
      },
      borderColor: {
        subtle: 'rgba(255,255,255,0.08)',
      },
      textColor: {
        muted: 'rgba(255,255,255,0.55)',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg,#0c1830,#080E1A)',
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}

export default config
