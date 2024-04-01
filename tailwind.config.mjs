/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      main: '#fafafa',
      'a-purple-strong': '#4546F7',
      'a-purple-light': '#D6CFFE'
    },
    extend: {}
  },
  plugins: [require('daisyui'), require('tailwindcss-animated')]
}
