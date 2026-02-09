/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        japandi: {
          light: "#d1c0ab",
          mid: "#ad9479",
          accent: "#7b6046",
          card: "#4f3520",
          dark: "#22110a",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
