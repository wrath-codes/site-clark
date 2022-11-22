/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clark: "#55aab3",
        clarkHover: "#4c99a1",
        clarkGray: "#727276",
        clarkGrayHover: "#66666a",
        clarkGraySelect: "#5b5b5e",
        clarkHeader: "#444446"
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
