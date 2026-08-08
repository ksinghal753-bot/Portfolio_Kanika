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
        void: {
          950: '#030305',
          900: '#07070B',
          800: '#0C0C12',
          700: '#14141F',
          600: '#1F1F2E',
        },
        cyber: {
          purple: '#8B5CF6',
          neonPurple: '#A855F7',
          deepViolet: '#6D28D9',
          blue: '#3B82F6',
          neonBlue: '#60A5FA',
          cyan: '#06B6D4',
          accent: '#C084FC',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(139, 92, 246, 0.25)',
        'glow-md': '0 0 25px -2px rgba(139, 92, 246, 0.35)',
        'glow-lg': '0 0 40px -2px rgba(139, 92, 246, 0.45)',
        'glow-blue': '0 0 30px -3px rgba(59, 130, 246, 0.35)',
        'glow-combined': '0 0 35px -5px rgba(139, 92, 246, 0.4), 0 0 30px -5px rgba(59, 130, 246, 0.3)',
        'glass-edge': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'scanline': 'scanline 8s linear infinite',
        'laser-draw': 'laserDraw 2s ease-out forwards',
        'radar-spin': 'radarSpin 10s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        radarSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 45%, transparent 70%)',
        'cyber-gradient': 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(59, 130, 246, 0.15) 100%)',
      }
    },
  },
  plugins: [],
}
