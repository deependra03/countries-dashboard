import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', //
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#1DA1F2",
        red: "#FF0000",
        yellow: "#fde047",
        green: "#22c55e",
        orange: "#f97316",
        purple: "#8b5cf6",
        pink: "#ec4899",
        brown: "#a85507",
        grey: "#6b7280",
        cyan: "#06b6d4",
        magenta: "#d946ef",
        teal: "#14b8a6",
        maroon: "#7e3e22",
        navy: "#1e3a8a",
        olive: "#556b2f",
        silver: "#c0c0c0",
        gold: "#ffd700",
        indigo: "#6366f1",
        accent: "#1DA1F2",
        placeholder: "#F3F4F6",
        primary: "#3E4DE6",
        secondary: "#CAA53B",
        tertiary: "#000000",
        dark: "#000000",
        light: "#FFFFFF",
        background: "var(--background)",
        foreground: "var(--foreground)",
    },
    },
  },
  plugins: [],
};
export default config;
