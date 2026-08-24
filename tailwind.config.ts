import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#E9E6E0",
        stone: "#DFDCD4",
        card: "#F1EFEA",
        ink: "#1C1C1A",
        mute: "#6F6D66",
        rule: "#CFCCC3",
        accent: "#A93B26",
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-sans)", "Space Grotesk", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(28,28,26,0.06), 0 4px 14px rgba(28,28,26,0.06)",
        lift: "0 2px 4px rgba(28,28,26,0.08), 0 14px 30px rgba(28,28,26,0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
