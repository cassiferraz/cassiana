/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#110e0b',
        'bg-light': '#1a1613',
        accent: '#c9a87c',
        'accent-dark': '#b8860b',
        muted: '#8a7560',
        'muted-light': '#a69480',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
