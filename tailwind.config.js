/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "2rem",
          md: "2.5rem",
          lg: "2rem",
          xl: "2rem",
          "2xl": "10rem",
        },
      },
      fontFamily: {
        display: ["Roboto", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}