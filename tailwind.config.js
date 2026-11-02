/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EBF1FF',
          100: '#D6E4FF',
          200: '#ADC8FF',
          300: '#84ABFF',
          400: '#5B8FFF',
          500: '#1565FF',
          600: '#1252CC',
          700: '#0E3F99',
          800: '#0A2D66',
          900: '#051A33',
        },
        navy: {
          DEFAULT: '#0A1B3D',
          light: '#1A2B5D',
        },
        bg: {
          DEFAULT: '#F5F7FB',
          soft: '#EEF2FA',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 12px rgba(10, 27, 61, 0.06)',
        card: '0 4px 24px rgba(10, 27, 61, 0.08)',
        hover: '0 12px 40px rgba(10, 27, 61, 0.12)',
        brand: '0 8px 30px rgba(21, 101, 255, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.6s ease-out both',
        float: 'float 4s ease-in-out infinite',
        'scale-in': 'scale-in 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};
