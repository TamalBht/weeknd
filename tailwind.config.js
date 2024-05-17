/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        1: "#050505",
        2: "#FF0909"
      }
    },
  },
  plugins: [],
}