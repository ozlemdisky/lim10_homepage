/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#201A3C",
          50: "#6857B6",
          100: "#5D4BAE",
          200: "#4E3F91",
          300: "#3E3375",
          400: "#2F2658",
          500: "#201A3C",
          600: "#0B0915",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
