/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
  },
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#ffffff'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      margin: {
        '10': '10px',
        '15': '15px',
        '20': '20px',
        '25': '25px',
        '30': '30px',
        '35': '35px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        // Colors you want to add go here
        rose: colors.rose,
        cyan: colors.cyan,
        purple: colors.purple,
        blue: colors.blue,
        white: colors.white,
        pink: colors.pink,
        orange: colors.orange,
        green: colors.green,
        black: colors.black,
        gray: colors.gray
      },
      border: ['focus'],
      bg:{
        'blue': '#1fb6ff'
      }
    },
    posts:{
      30:'33.33333333333333%'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [

  ],
}
