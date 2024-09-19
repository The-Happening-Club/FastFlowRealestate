import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue: {
          default: "#4C66FF",
          light: "#D0D7FF",
        },
        red: {
          error: "#F86C6A",
          light: "#FFE6E4",
        },
        green: {
          success: "#D3F3E3",
          default: "#D3F3E3",
          dark: "#6B9B93",
        },
        yellow: {
          moderate: "#FFFCE4",
          dark: "#DCC75B",
        },
      },
    },
  },
  gridTemplateColums: {
    app: "250px 1fr",
  },
  plugins: [],
};
export default config;
