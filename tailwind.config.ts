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
        espresso: "#241B14",
        cream: {
          DEFAULT: "#EFE6D5",
          light: "#F6EFE8",
        },
        copper: {
          DEFAULT: "#B86F3C",
          hover: "#C67C46",
        },
        coffee: "#57402E",
      },
    },
  },
  plugins: [],
};

export default config;