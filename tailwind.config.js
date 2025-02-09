/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollMargin: {
        44: "44px",
      },
      screens: {
        widescreen: {
          raw: "(min-aspect-ratio: 3/2)",
        },
        tallscreen: {
          raw: "(min-aspect-ratio: 1/2)",
        },
      },
    },
  },
  plugins: [],
};
