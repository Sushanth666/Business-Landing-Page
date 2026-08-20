/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff5f2',
          100: '#ffe8e2',
          200: '#ffd2c5',
          300: '#ffb09c',
          400: '#ff8166',
          500: '#fa5430',
          600: '#ea3a15',
          700: '#c52a0a',
          800: '#9d240c',
          900: '#7e220e',
          950: '#440e04',
          primary: '#fa5430',
          dark: '#e03a16',
          light: '#fff1ee',
        },
        navy: {
          900: '#0b132b',
          800: '#1c2541',
          700: '#3a506b',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 12px 35px -8px rgba(15, 23, 42, 0.08)',
        'card-hover': '0 25px 50px -12px rgba(250, 84, 48, 0.15)',
        'floating': '0 20px 45px -10px rgba(0, 0, 0, 0.12)',
        'glow-brand': '0 10px 25px -5px rgba(250, 84, 48, 0.35)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
