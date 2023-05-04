/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      ...require('tailwindcss/colors'),
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
