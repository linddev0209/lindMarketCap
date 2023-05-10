/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'light-blue1': '#00FFF2F3',
        'light-blue2': '#6DE2FF'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
