/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        bgImage: "url('/src/assets/images/bg-pattern-dark.png')"
      }
    },
  },
  plugins: [],
}