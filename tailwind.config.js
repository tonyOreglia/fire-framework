/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [getCssVarColor("--font-sans") || "Montserrat, sans-serif"],
        serif: [getCssVarColor("--font-serif") || "Merriweather, serif"],
      },
    },
  },
  content: [
    "./public/**/*.{html,js}",
    "./public/**/*.html",
    "./public/js/**/*.js",
    "./public/partials/**/*.html",
  ],
  plugins: [],
};
