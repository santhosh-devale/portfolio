/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: '#050d05', 2: '#071007', 3: '#0a160a', card: '#0d1f0d' },
        green: {
          primary: '#00ff88',
          bright: '#39ff6a',
          dim: '#00cc6a',
        },
        ink: { DEFAULT: '#e8f5e8', muted: '#7a9e7a', faint: '#3d5c3d' },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
