const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'accent': {
          '600': '#2563EB', // Our primary blue
          '700': '#1D4ED8', // A darker shade for hover
        }
      }
    },
  },
  plugins: [],
}