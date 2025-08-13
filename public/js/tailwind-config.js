document.addEventListener("DOMContentLoaded", function () {
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          sans: [getCssVarColor("--font-sans") || "Montserrat, sans-serif"],
          serif: [getCssVarColor("--font-serif") || "Merriweather, serif"],
        },
      },
    },
  };
});
