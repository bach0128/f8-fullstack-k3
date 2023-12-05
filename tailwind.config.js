/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

const config = {
  theme: {
    extend: {},
  },
  plugins: [nextui()],
  darkMode: "class",
};

module.exports = {
  plugins: [
    nextui({
      themes: {
        light: {},
        dark: {
          colors: {
            primary: {
              DEFAULT: "#BEF264",
              foreground: "#000000",
              background: "blue",
            },
            focus: "#BEF264",
          },
        },
      },
    }),
  ],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
