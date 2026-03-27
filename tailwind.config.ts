import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark:   "#2B2D42",
        slate:  "#8D99AE",
        light:  "#EDF2F4",
        yellow: "#FFCC00",
        pink:   "#E91664",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
