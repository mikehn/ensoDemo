/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  darkMode: 'selector',
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      main: '#fafafa',
      'a-purple-strong': '#4546F7',
      'a-purple-light': '#D6CFFE',
      'a-purple-border': '#231269'
    },
    extend: {
      screens: {
        short: { raw: '(max-height: 880px)' }
        // => @media (min-height: 800px) { ... }
      }
    }
  },
  plugins: [require('daisyui'), require('tailwindcss-animated')]
}
