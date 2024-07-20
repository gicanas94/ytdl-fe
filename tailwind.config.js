/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        primary: '#8141e0',
        primaryDark: '#251d32',
        white: '#ffffff',
      },
      fontFamily: {
        notoSans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
