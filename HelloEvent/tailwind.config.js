/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false,
  content: [],
  theme: {
    extend: {},
  },
  plugins: [ require('flowbite/plugin')],
}

