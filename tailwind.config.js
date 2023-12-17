/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: "#FAF7F3",
          nav: "#F8F5EF",
          point: "#DBA39A",
        },
        secondary: {
          menu: "#EBE4DB",
          fe: "#F1D3B3",
          be: "#E4E9BE",
          gray: "#8B8B8B",
        },
        black: {
          font: "#444444",
        },
      },
      padding: {
        1: ".0625rem",
        13: ".8125rem",
      },
      spacing: {
        "5p": "5%",
      },
    },
  },
  plugins: [],
};
