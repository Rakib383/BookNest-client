/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        charm: "Charm, serif",
      },
    },
    colors: {
      primaryColor: "#ce7852",
      secondaryColor: "#52b788",
    },
  },
  plugins: [daisyui, require("flowbite/plugin")],
};
