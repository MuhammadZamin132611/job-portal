/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '600',
      'sm': '640px',
      'md': '960px',
      'lg': '1280px',
      'xl': '1920px',
    },
  },
  plugins: [],
}