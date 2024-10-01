/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'primary': '#0B7077',
        'secondary': '#FD661F',
      },
      fontFamily: {
        'raleway': 'Raleway',
        'inter': 'Inter',
        'picoblack': 'PicoBlackAI',
      }
    },
  },
  plugins: [],
}

