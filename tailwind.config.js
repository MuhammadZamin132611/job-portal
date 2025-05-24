/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true, // Forces all Tailwind styles to be !important
  content: [
    "./src/**/*.{html,ts,scss}",
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