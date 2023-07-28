/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  // plugins: [
  //   plugin(function ({ addVariant }) {
  //     addVariant("optional", "&:optional");
  //     addVariant("hocus", ["&:hover", "&:focus"]);
  //     addVariant("inverted-colors", "@media(inverted-colors: inverted)");
  //   }),
  // ],

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
  ],

  theme: {
    screens: {
      // screensizes smaller than 320px will be the "base"
      sm: "320px",
      // => @media (min-width: 320px)

      md: "768px",
      // => @media (min-width: 768px)

      lg: "1240px",
      // => @media (min-width: 1240px)

      xl: "1920px",
      // => @media (min-width: 1920px)
    },

    extend: {
      fontFamily: {
        albertsans: ["Albert Sans", "sans-serif"],
      },

      colors: {
        "test-pink": "pink",
        "test-blue": "lightblue",
        "test-yellow": "lightyellow",
        "test-green": "lightgreen",

        "bg-base": "#FAF8F5",

        "grey-50": "#FAF8F5",
        "grey-100": "#DFDEDD",
        "grey-300": "#8B8A89",
        "grey-500": "#7C7A79",

        "p-y-base": "#FEC286",
        "p-y-100": "#FEE9C3",
        "p-y-300": "#FEDAA4",
        "p-y-500": "#FEC286",
        "p-y-700": "#93532A",
        "p-y-900": "#4D2D00",
        "p-g-base": "#2F6A45",
        "p-g-100": "#E5F2D4",
        "p-g-300": "#A4D6AC",
        "p-g-500": "#2F6A45",
        "p-g-700": "#125031",
        "p-g-900": "#133F26",
      },

      footerLogo: {
        "footer-logo": "url('/bg-soundwave.png')",
      },

      backgroundImage: {
        "wave-pattern": "url('/bg-soundwave.png')",
      },

      width: {
        "icon-sm": "16px",
        "icon-md": "20px",
        "icon-lg": "24px",
      },
    },
    plugins: [],
  },
};
