import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0a1628",
          dark: "#111827",
          accent: "#2563eb",
          "accent-dark": "#1d4ed8",
        },
      },
    },
  },
  plugins: [],
};

export default config;
