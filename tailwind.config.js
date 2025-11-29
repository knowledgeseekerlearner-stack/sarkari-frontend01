/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A73E8",
        secondary: "#FF7A21",
        success: "#22C55E",
        background: "#F2F7FF",
      },
    },
  },
  plugins: [],
};
