import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        linen: "#F7F1E8",
        ivory: "#FFFDF8",
        sage: "#66795F",
        moss: "#43563E",
        wood: "#B89568",
        gold: "#C9A46A",
        clay: "#D8C7AF",
        ink: "#2F332A"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(70, 67, 54, 0.10)",
        calm: "0 10px 28px rgba(79, 91, 72, 0.10)"
      },
      borderRadius: {
        soft: "22px"
      }
    }
  },
  plugins: []
};

export default config;
