/**
 * FIRE Method - Tailwind Configuration
 * Dynamically generates Tailwind configuration from CSS variables
 */

document.addEventListener("DOMContentLoaded", function() {
  // Function to get CSS variable value
  function getCssVarColor(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  // Generate the primary and accent color objects
  let primaryColors = {};
  let accentColors = {};
  let grayColors = {};
  
  // Primary colors
  [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].forEach(weight => {
    primaryColors[weight] = getCssVarColor(`--primary-${weight}`);
  });
  
  // Accent colors
  [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].forEach(weight => {
    accentColors[weight] = getCssVarColor(`--accent-${weight}`);
  });
  
  // Gray colors
  [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].forEach(weight => {
    grayColors[weight] = getCssVarColor(`--gray-${weight}`);
  });

  // Set Tailwind configuration
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: primaryColors,
          accent: accentColors,
          gray: grayColors,
          // Fire element colors
          "fire-flow": {
            DEFAULT: getCssVarColor("--fire-flow-color"),
            light: getCssVarColor("--fire-flow-light")
          },
          "fire-index": {
            DEFAULT: getCssVarColor("--fire-index-color"),
            light: getCssVarColor("--fire-index-light")
          },
          "fire-reflect": {
            DEFAULT: getCssVarColor("--fire-reflect-color"),
            light: getCssVarColor("--fire-reflect-light")
          },
          "fire-extract": {
            DEFAULT: getCssVarColor("--fire-extract-color"),
            light: getCssVarColor("--fire-extract-light")
          }
        },
        fontFamily: {
          sans: [getCssVarColor("--font-sans") || "Montserrat, sans-serif"],
          serif: [getCssVarColor("--font-serif") || "Merriweather, serif"]
        }
      }
    }
  };
});