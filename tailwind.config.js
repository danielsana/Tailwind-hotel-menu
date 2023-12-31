/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
        primary: '#FF6336',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      fontFamily: {
        body: ['Nunito']}
    },
  },
  plugins: [],
}

