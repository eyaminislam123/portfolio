/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cinema: {
          black: 'var(--cinema-black)',
          dark: 'var(--cinema-dark)',
          gray: 'var(--cinema-gray)',
          muted: 'var(--cinema-muted)',
          light: 'var(--cinema-light)',
          accent: 'var(--cinema-accent)',
          gold: 'var(--cinema-gold)',
        },
        primary: 'var(--text-primary)',
        inverted: 'var(--text-inverted)',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
