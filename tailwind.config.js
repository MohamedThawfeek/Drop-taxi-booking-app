/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "420px",
        xss: "320px",
        mobile: "375px",
      },
      colors: {
        // Navbar - Premium white with purple accents
        "navbar-background": "#ffffff",
        "navbar-text": "#1e1b4b",
        "navbar-button-color": "#7c3aed",
        "navbar-button-text": "#ffffff",
        "navbar-active-text": "#7c3aed",
        
        // Hero Section - Vibrant purple highlights
        "hero-title": "#ffffff",
        "hero-title-highlight": "#a78bfa",
        "hero-button-text": "#ffffff",
        "hero-button-color": "#7c3aed",
        
        // Form - Purple header with elegant design
        "form-header-background": "#6d28d9",
        "form-header-text": "#ffffff",
        "form-background": "#ffffff",
        "form-text": "#334155",
        "form-button-color": "#7c3aed",
        "form-button-text": "#ffffff",
        "form-input-background": "#faf5ff",
        "form-input-border": "#c084fc",
        
        // Cars Section - Soft purple-tinted background
        "cars-background": "#faf5ff",
        "cars-text": "#1e1b4b",
        "cars-button-color": "#7c3aed",
        "cars-button-text": "#ffffff",
        "cars-badge-color": "#ede9fe",
        "cars-badge-text": "#6d28d9",
        "cars-content-background": "#ffffff",
        
        // About Section - Light purple background
        "about-background": "#faf5ff",
        "about-icon-background": "#f3e8ff",
        "about-icon": "#7c3aed",
        "about-title": "#4c1d95",
        
        // Cities Section - Clean white with purple accents
        "cities-background": "#ffffff",
        "cities-text": "#1e1b4b",
        "cities-description": "#64748b",
        "cities-button-color": "#7c3aed",
        "cities-button-text": "#ffffff",
        "cities-button-background1": "#faf5ff",
        "cities-button-text1": "#334155",
        "cities-location-icon": "#7c3aed",
        
        // Footer - Dark purple professional footer
        "footer-background": "#4c1d95",
        "footer-text": "#faf5ff",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
