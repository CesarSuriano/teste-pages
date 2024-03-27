/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  import: true,
  content: [
    "./src/**/*.{html,scss,ts}",
  ],
  theme: {
    fontFamily: {
      'poppins-bold': ['"poppins-bold"'],
      'poppins-semibold': ['"poppins-semibold"'],
      'poppins-regular': ['"poppins-regular"'],
      'poppins-light': ['"poppins-light"'],
    },
    colors: {
      ...colors,
      'primaryGreen' : '#2FD67A',
      'darkGreen': '#219656'
    },
    extend: {},
  },
  plugins: [],
}
