/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        success: '#0f9447', // Add your success color here
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"], // Forces dark theme
  },
}
