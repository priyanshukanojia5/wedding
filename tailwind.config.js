/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#741C29',
          50: '#FDF2F4',
          100: '#FBE4E7',
          200: '#F5CBD1',
          300: '#ECA4AF',
          400: '#DF7082',
          500: '#C93C53',
          600: '#AC273F',
          700: '#741C29',
          800: '#5C1520',
          900: '#4A101B',
          950: '#2A0810',
        },
        burgundy: {
          DEFAULT: '#4A101B',
          dark: '#300810',
          deep: '#1E040A',
        },
        ivory: {
          DEFAULT: '#FFF9EB',
          50: '#FFFFFF',
          100: '#FFFDF7',
          200: '#FFF9EB',
          300: '#FDF2D8',
          400: '#F9E5BA',
        },
        gold: {
          DEFAULT: '#C5A15B',
          light: '#E5CB8C',
          lighter: '#F6E7BE',
          dark: '#9E7B35',
          deep: '#735721',
          accent: '#DFB15B',
        },
        champagne: {
          DEFAULT: '#E9D8B5',
          light: '#F4ECE0',
          dark: '#D5BE93',
        },
        charcoal: {
          DEFAULT: '#25201D',
          light: '#3C3530',
          dark: '#171311',
        },
      },
      fontFamily: {
        hindi: ['"Noto Serif Devanagari"', '"Tiro Devanagari Hindi"', 'serif'],
        hindiDisplay: ['"Tiro Devanagari Hindi"', '"Noto Serif Devanagari"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg, #4A101B 0%, #741C29 50%, #300810 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #9E7B35 0%, #E5CB8C 50%, #9E7B35 100%)',
        'ivory-card': 'linear-gradient(180deg, #FFFDF7 0%, #FFF9EB 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(197, 161, 91, 0.35)',
        'maroon-deep': '0 20px 40px -15px rgba(42, 8, 16, 0.6)',
        'card-royal': '0 15px 35px -10px rgba(74, 16, 27, 0.25), 0 0 0 1px rgba(197, 161, 91, 0.3)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'flicker': 'flicker 2s infinite alternate ease-in-out',
        'shimmer': 'shimmer 3s infinite linear',
        'spin-very-slow': 'spin 24s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        flicker: {
          '0%': { opacity: '0.85', transform: 'scale(0.98)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
          '100%': { opacity: '0.9', transform: 'scale(1.0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
