import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#8B3DFF',
          violet: '#C26BFF',
          dark:   '#5A1B9A',
          bg:     '#07070f',
          card:   '#0f0f1c',
          border: 'rgba(139,61,255,0.2)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'blink': 'blink 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-14px)' },
        },
        glowPulse: {
          '0%,100%': { opacity: '0.6' },
          '50%':     { opacity: '1' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}
export default config
