/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./vueform.config.js",
    "./node_modules/@vueform/vueform/themes/tailwind/**/*.vue",
    "./node_modules/@vueform/vueform/themes/tailwind/**/*.js",
    "./node_modules/@vueform/builder/**/*.js",
    "./node_modules/@vueform/builder/**/*.css",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [
    require("@vueform/vueform/tailwind"),
    require("@vueform/builder/tailwind"),
  ],
};
