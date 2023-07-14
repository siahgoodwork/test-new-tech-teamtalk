/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "p-y-base":"#FEC286",
        "p-y-100":"#FEE9C3",
        "p-y-300":"#FEDAA4",
        "p-y-500":"#FEC286",
        "p-y-700":"#93532A",
        "p-y-900":"#4D2D00",
        "p-g-base":"#2F6A45",
        "p-g-100":"#E5F2D4",
        "p-g-300": "#A4D6AC",
        "p-g-500":"#2F6A45",
        "p-g-700":"#125031",
        "p-g-900":"#133F26",
      },
      width:{
        "icon-sm":"16px",
        "icon-md":"20px",
        "icon-lg":"24px"
      }
    },
  },
  plugins: [],
};
