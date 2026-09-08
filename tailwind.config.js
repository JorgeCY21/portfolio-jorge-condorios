/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      colors: {
        copper: {
          50: '#fdf6ec',
          100: '#f8e7cc',
          200: '#f0cd94',
          300: '#e7ae5e',
          400: '#dd9339',
          500: '#c97821',
          600: '#a85f1a',
          700: '#84491a',
        },
      },
    },
  },
  plugins: [],
}