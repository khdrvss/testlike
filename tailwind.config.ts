import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1B3A",
        royal: "#173B8F",
        silk: "#E7C777",
        oasis: "#12A4B0",
        cloud: "#F6F7FB"
      },
      boxShadow: {
        soft: "0 16px 40px rgba(11, 27, 58, 0.08)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      },
      backgroundImage: {
        "registan": "radial-gradient(circle at 1px 1px, rgba(231, 199, 119, 0.28) 1px, transparent 0)",
        "hero-gradient": "linear-gradient(135deg, rgba(23, 59, 143, 0.18), rgba(18, 164, 176, 0.18))"
      }
    }
  },
  plugins: []
};

export default config;
