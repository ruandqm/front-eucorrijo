/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#EE6123', //orange
      secondary: '#FFCF00', //yellow
      third: '#360568', //purple
      fourth: '#00916E', //green
      fifth: '#EAF2EF' //gray
    },
    extend: {},
  },
  plugins: [],
}
