/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./templates/*.{html,js}"],
  theme: {
    colors: {
      1: '#007db6',
      2:'#292929',
    },
    fontFamily: {
      sans: 'Inter, sans-serif',
    },
    extend: {},
  },
  plugins: [],
}