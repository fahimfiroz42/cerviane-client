/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "rgb(60, 101, 245)",
        "secondary": "rgb(248, 250, 255)",
        "light":"#E0E6F6",
        "dark": "#05264E",

      }
    },
  },
  plugins: [
    daisyui,
  ],
}

