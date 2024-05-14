import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        "block-blue": "#164B99",
        "block-blue-light": "#0583DC",
        "block-yellow": "#FECC39",
      },
      fontFamily: {
        blockfont: ["Blockfont", "sans-serif"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
