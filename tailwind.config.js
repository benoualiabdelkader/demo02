/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0d1b2a",
        royal: "#1d4ed8",
        sand: "#c89b4b",
        ivory: "#f6f3ee",
      },
      fontFamily: {
        arabic: ["Cairo", "sans-serif"],
        latin: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
