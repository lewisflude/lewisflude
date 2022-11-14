/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        soehneBuch: ["var(--font-soehne-buch)", ...fontFamily.sans],
        soehneBuchKursiv: [
          "var(--font-soehne-buch-kursiv)",
          ...fontFamily.sans,
        ],
        soehneFett: ["var(--font-soehne-fett)", ...fontFamily.sans],
        soehneHalbfett: ["var(--font-soehne-halbfett)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
