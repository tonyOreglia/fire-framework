# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure
- Multi-page static website for "The FIRE Method" journaling practice
- Three main pages: index.html (home), fire-method.html (methodology details), and journaling-tutorial.html (implementation guide)
- Uses HTML, CSS with Tailwind CSS for styling (DaisyUI removed)
- Custom Tailwind configuration with branded colors and typography
- Minimal JavaScript for HTML includes

## Design System
- Centralized Color System:
  - CSS variables defined in `/css/styles.css`
  - Tailwind configuration matching CSS variables
  - Base UI Colors:
    - Primary: Vibrant blue color family (primary-50 to primary-950)
      - primary-600: #4a5ff4 (main brand color)
    - Accent: Bright blue color family (accent-50 to accent-950)
      - accent-600: #0284c7 (secondary brand color)
  - FIRE Element Autumn Colors:
    - Flow: Deep Terracotta (#B85C38)
    - Index: Golden Amber (#DEAB41)
    - Reflect: Warm Brown (#5C3D2E)
    - Extract: Moss Green (#58641D)
  - Each FIRE element has its own color variables:
    - Base color (--fire-flow-color, etc.)
    - Light background color (--fire-flow-light, etc.)
  - Neutral grays for text and backgrounds
- Typography:
  - Sans-serif: Montserrat (primary font for most content)
  - Serif: Merriweather (for headings and highlighted text)
  - Use the "serif" class to apply Merriweather
  - Use bg-gradient-to-r with bg-clip-text for gradient text effects
- Components:
  - Card-based design with consistent border and shadow styling
  - Interactive hover effects using group-hover classes
  - Decorative elements with blur effects (blur-3xl)
  - Structured sections with proper spacing
  - Professional iconography (SVG icons)
  
## Color System Management
- When updating colors:
  1. Modify the CSS variables in `/css/styles.css`
  2. Update the matching Tailwind configuration in each HTML file
  3. For future improvements, consider implementing a build system that can generate the Tailwind config from the CSS variables

## Build Commands
- No build system in place (static HTML)
- To serve locally: `python -m http.server` or `npx serve`

## Code Style Guidelines
- HTML: 
  - Use 2-space indentation
  - Use self-closing tags for void elements
  - Use semantic HTML5 elements
- CSS:
  - Follow Tailwind CSS class naming conventions
  - Group related utility classes together
  - Maintain consistent spacing (py-24 for sections, gap-8 for grids, etc.)
- JavaScript:
  - Use modern ES6+ syntax
  - Keep functions small and focused
  - Use arrow functions when appropriate

## File Organization
- HTML files in root directory
- JavaScript in `/js` directory
- Partial HTML components in `/partials` directory
  - header.html: Site navigation
  - footer.html: Site footer with links and copyright
- Assets in `/assets` directory (if added)

## Content Guidelines
- Professional tone throughout
- Evidence-based language with specific data points when possible
- Structured information hierarchy
- Consistent naming for methodology components:
  - Flow Component
  - Index System
  - Reflect Process
  - Extract Protocol