/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      light: "#FFF1D8",
      dark: "#675D50",
      brown: "#A9907E",
      green: "#ABC4AA",
      beige: "#F3DEBA",

    },

    extend: {

    },
  },
  plugins: [],
}
