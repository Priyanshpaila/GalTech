import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F8FAFC",
        ink: "#111827",
        muted: "#6B7280",
        brand: "#0057FF",
        sky: "#0A84FF",
        mint: "#00C2A8",
        navy: "#0B1220"
      },
      boxShadow: {
        enterprise: "0 20px 50px -24px rgba(15, 23, 42, 0.22)",
        floating: "0 16px 36px -18px rgba(0, 87, 255, 0.34)"
      },
      fontFamily: {
        display: ["var(--font-outfit)", "var(--font-jakarta)", "sans-serif"],
        bebas: ["var(--font-bebas)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"]
      },
      borderRadius: {
        card: "24px",
        button: "14px"
      }
    }
  },
  plugins: []
};

export default config;
