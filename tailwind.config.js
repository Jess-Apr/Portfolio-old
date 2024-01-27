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
          lightGray: "#F0EFEC",
          title: "#9e5e54",
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
        "3p": "3%",
        "5p": "5%",
        "8p": "8%",
        39: "39px",
      },
      listStyleType: {
        circle: "circle",
      },
      keyframes: {
        dropdown: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        dragup: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        rotateArrowUp: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(-180deg)" },
        },
        rotateArrowDown: {
          "0%": { transform: "rotate(-180deg)" },
          "100%": { transform: "rotate(0)" },
        },
        showMenu: {
          "0%": { transform: "opacity(0)" },
          "100%": { transform: "opacity(100%)" },
        },
        hideMenu: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        dropdown: "dropdown 0.5s ease-in-out",
        dragup: "dragup 0.5s ease-in-out",
        rotateArrowUp: "rotateArrowUp 0.5s ease-in-out",
        rotateArrowDown: "rotateArrowDown 0.5s ease-in-out",
        showMenu: "showMenu 0.5s ease-in-out",
        hideMenu: "hideMenu 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
