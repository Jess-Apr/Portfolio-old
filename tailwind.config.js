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
          lightGray: "#F3F1ED",
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
        skillmenuup: {
          "0%": { transform: "translateY(39%)" },
          "100%": { transform: "translateY(0)" },
        },
        skillmenudown: {
          "0%": { transform: "translateY(-39%)" },
          "100%": { transform: "translateY(0)" },
        },
        projectmenuup: {
          "0%": { transform: "translateY(70%)" },
          "100%": { transform: "translateY(0)" },
        },
        projectmenudown: {
          "0%": { transform: "translateY(-75%)" },
          "100%": { transform: "translateY(0)" },
        },
        menudown: {
          "0%": { transform: "translateY(-32%)" },
          "100%": { transform: "translateY(-15%)" },
        },
        borderon: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        rotatearrowup: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(-180deg)" },
        },
        rotatearrowdown: {
          "0%": { transform: "rotate(-180deg)" },
          "100%": { transform: "rotate(0)" },
        },
      },
      animation: {
        dropdown: "dropdown 0.5s ease-in-out",
        dragup: "dragup 0.5s ease-in-out",
        skillmenuup: "skillmenuup 0.5s ease-in-out",
        skillmenudown: "skillmenudown 0.5s ease-in-out",
        projectmenuup: "projectmenuup 0.5s ease-in-out",
        projectmenudown: "projectmenudown 0.5s ease-in-out",
        menudown: "menudown 0.5s ease-in-out",
        borderon: "borderon 0.3s ease-in-out",
        rotatearrowup: "rotatearrowup 0.5s ease-in-out",
        rotatearrowdown: "rotatearrowdown 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
