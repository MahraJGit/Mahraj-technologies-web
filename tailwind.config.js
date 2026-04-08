/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        heading: "var(--color-heading)",
        text: "var(--color-text)",
        body: "var(--color-body)",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// Trigger tailwind rebuild
