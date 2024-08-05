/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      firaMono: ['"Fira Mono"', "sans-serif"],
      bricolage:["Bricolage Grotesque", "sans-serif"]
      // Add more custom font families as needed
    },},
  },
  plugins: [],
}