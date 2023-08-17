/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      orange:"#FFA500",
      darkblue:"#164B60",
      "lightBlue":"#1B6B93",
      lightCream:"#E1ECC8",
    },
  },
  plugins: [],
}