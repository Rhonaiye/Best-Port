/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        softWhite: '#F7F7F7',
        slateGray: '#2E2E2E',
        pastelBlue: '#A9C9FF',
      },
      
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        libre: ['Libre Baskerville', 'serif'],
        prompt: ['Prompt', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

