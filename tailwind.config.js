/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pulseRing: {
          "0%": { transform: "scale(0.7)", opacity: "0.7" },
          "70%": { transform: "scale(1.5)", opacity: "0" },
          "100%": { transform: "scale(0.7)", opacity: "0" },
        },
      },
      animation: {
        pulseRing: "pulseRing 1s cubic-bezier(0.66, 0, 0, 1) infinite",
      },
    },
  },
  plugins: [],
};
