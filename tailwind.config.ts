import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#FFF5F8",
          100: "#FFE9F0",
          200: "#FBD3E1",
          300: "#F7AEC7",
          400: "#F182A9",
          500: "#E8598A",
          600: "#D63E74",
          700: "#B42A5C",
        },
        cream: "#FFF9F3",
        gold: { DEFAULT: "#C9A227", light: "#E7C873", dark: "#9A7B1A" },
        cocoa: "#4A2C35",
      },
      fontFamily: {
        display: ["'Quicksand'", "'Segoe UI'", "system-ui", "sans-serif"],
        body: ["'Nunito'", "'Segoe UI'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        bead: "0 8px 30px -8px rgba(232, 89, 138, 0.35)",
        soft: "0 10px 40px -12px rgba(74, 44, 53, 0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "bead-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 5s ease-in-out infinite",
        "bead-spin": "bead-spin 12s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
