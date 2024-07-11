/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        color:{
          1: "#050505",
          2: "#FF0909",
          3: "#F83333",
          4: "#FFFFFF",
          5:"#096B8F"
        },
        n:{
          1:"#FFFFFF",
          2:"#FF0909",
          3:"#096B8F",
        }
      },
      // fontFamily: {
       
      //   niagraa:["niagra","sans-serif"],
      // },
    },
  },
  plugins: [],
}