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
      light: "#F4EEE0",
      dark: "#393646",
      brown: "#6D5D6E",
      green: "#ABC4AA",
      beige: "#F3DEBA",
      hoverMenu: "#4F4557"

    },

    extend: {

    },
  },
  plugins: [require("tailwind-scrollbar")],
}
