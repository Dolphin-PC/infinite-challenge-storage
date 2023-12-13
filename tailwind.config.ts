import type { Config } from "tailwindcss";
import { tailwind_theme } from "./src/app/(front-end)/style/tailwind.theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  ...tailwind_theme,
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  //       "gradient-conic":
  //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  //     },
  //     colors: {
  //       primary: "#3a2128",
  //     },
  //   },
  // },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};
export default config;
