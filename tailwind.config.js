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
        sans: ["var(--font-poppins)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        "bebas-neue": ["var(--font-bebas-neue)", "cursive"],
      },
    },
  },
  plugins: [],
};

// Trigger tailwind rebuild
