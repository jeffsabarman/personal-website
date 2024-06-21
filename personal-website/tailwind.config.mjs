/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    // fontFamily: {
    //   display: ["Poppins"],
    //   sans: ["Poppins"],
    // },
    fontFamily: {
      sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      white: "#ffffff",
      orange: "#FF7F3E",
      "blue-light": "#80C4E9",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#D9D9D9",
      "gray-light": "#d3dce6",
    },
    fontSize: {
      sm: "1.8rem",
      base: "2.4rem",
      xl: "2.8rem",
      "2xl": "4.8rem",
      "3xl": "7.2rem",
    },
  },
  plugins: [],
};
