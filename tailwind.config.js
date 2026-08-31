/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#090a0f',
        surface: '#11131a',
        'surface-light': '#181b24',
        'surface-hover': '#212634',
        accent: {
          purple: '#8b5cf6',
          violet: '#7c3aed',
          cyan: '#06b6d4',
          rose: '#f43f5e',
          amber: '#f59e0b',
          emerald: '#10b981',
        },
        border: 'rgba(255, 255, 255, 0.08)',
        'border-light': 'rgba(255, 255, 255, 0.15)',
        'border-glow': 'rgba(139, 92, 246, 0.3)',
      },
      fontFamily: {
        sans: ['"Outfit"', '"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      aspectRatio: {
        'reel': '9 / 16',
        'cinema': '21 / 9',
        'video': '16 / 9',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'blur(24px)' },
          '50%': { opacity: '0.9', filter: 'blur(32px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        'neon-purple': '0 0 25px -5px rgba(139, 92, 246, 0.5)',
        'neon-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.5)',
        'neon-rose': '0 0 25px -5px rgba(244, 63, 94, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
}
