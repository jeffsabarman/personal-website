/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        // orange: "#FF7F3E",
        // "blue-light": "#80C4E9",
        orange: "#F6995C",
        "light-orange": "#EF9C66",
        "dark-blue": "#295F98",
        "light-blue": "#80C4E9",
        default: "#41444B",
      }
    },
    // fontFamily: {
    //   display: ["Poppins"],
    //   sans: ["Poppins"],
    // },
    fontFamily: {
      sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
    },
    // colors: {
    //   white: "#ffffff",
    //   // orange: "#FF7F3E",
    //   // "blue-light": "#80C4E9",
    //   orange: "#F6995C",
    //   "light-orange": "#EF9C66",
    //   "dark-blue": "#295F98",
    //   "light-blue": "#80C4E9",
    //   default: "#41444B",
    // },
    fontSize: {
      sm: "1.2rem",
      base: "1.8rem",
      lg: "2rem",
      xl: "2.4rem",
      "2xl": "4.8rem",
      "3xl": "7.2rem",
    },
  },
  plugins: [],
};
