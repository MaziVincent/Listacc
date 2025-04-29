/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '200px',
      },
      colors:{
        'dropdown': '#262b35',
        'textColorOne': '#5758D6',
        'textColorTwo': '#868D98',
        'sectionthreecolor': '#F0F4FD'
      },
      fontFamily:{
        'Sora': ['Sora', 'sans-serif'],
        'BeVietnam': ["Be Vietnam Pro", 'sans-serif']
      }
    },
  },
  plugins: [],
}

