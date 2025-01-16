/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#2D5A27',
          orange: '#FF6B35',
          red: '#E63946'
        },
        secondary: {
          yellow: '#FFD700',
          'light-green': '#98C9A3',
          'light-orange': '#FFBE9D'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
};