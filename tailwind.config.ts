import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Headspace Color Tokens mapped with GALTECH Brand Colors
        "page-cream": "#F9F6F0",
        "pure-white": "#FFFFFF",
        "charcoal-ink": "#2D2C2B",
        "graphite": "#44423F",
        "slate-custom": "#4B4C4D",
        "stone": "#63605D",
        "driftwood": "#C6C1B9",
        "linen": "#E2DED9",
        "ash": "#D0D0D0",
        "soft-black": "#000000",
        "brand-orange": "#DC2626", // GALTECH Crimson Red dot accent
        "brand-red": "#C9182B",
        "mindful-blue": "#1D4ED8", // GALTECH Royal Blue primary CTA
        "sunbeam-yellow": "#FFCE00", // Headspace signature yellow banner & highlights
        "deep-indigo": "#1E1B4B",
        "twilight-violet": "#281466",
        "plum": "#5F2B89",
        "mauve": "#8144A8",
        "celeste": "#00A4FF",
        // Legacy fallbacks
        canvas: "#F9F6F0",
        ink: "#2D2C2B",
        muted: "#44423F",
        brand: "#1D4ED8",
        sky: "#00A4FF",
        mint: "#00C2A8",
        navy: "#1E1B4B"
      },
      boxShadow: {
        subtle: "rgba(65, 61, 69, 0.2) 0px 2px 0px 0px",
        sticker: "rgba(45, 44, 43, 0.25) 0px 3px 0px 0px",
        card: "0 1px 3px rgba(0,0,0,0.04), 0 10px 30px -10px rgba(0,0,0,0.06)"
      },
      fontFamily: {
        display: ["var(--font-outfit)", "var(--font-jakarta)", "sans-serif"],
        bebas: ["var(--font-bebas)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
        sans: ["var(--font-jakarta)", "var(--font-inter)", "sans-serif"]
      },
      borderRadius: {
        cards: "24px",
        pills: "800px",
        small: "8px",
        inputs: "8px",
        buttons: "800px",
        featured: "32px"
      }
    }
  },
  plugins: []
};

export default config;

