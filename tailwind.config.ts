import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        hand: ["var(--font-dancing)", "cursive"],
      },
      colors: {
        /* Soft cinematic feminine design system */
        primary: {
          DEFAULT: "#6B4FA0",
          600: "#6B4FA0",
          700: "#5a4090",
          800: "#4a3860",
        },
        accent: {
          DEFAULT: "#C084FC",
          400: "#C084FC",
          500: "#A66DEC",
        },
        highlight: "#D4855A",
        body: {
          DEFAULT: "#5a4a72",
          deep: "#4a3860",
        },
        cardbg: "#fffaf6",
        cardborder: "#e8d8f0",
        memorybg: "#f9f0ff",
        memoryborder: "#e0cff5",
        letterbg: "#fff9f0",
        tintCool: "#fdf4ff",
        tintWarm: "#fff4f0",

        /* Legacy aliases kept so older class usages stay valid */
        ivory: "#fffaf6",
        blush: {
          DEFAULT: "#fce8f3",
          100: "#fff3f6",
          200: "#fce8f3",
          300: "#f5d0e3",
        },
        lavender: {
          DEFAULT: "#e8d8f0",
          100: "#f3e6f8",
          200: "#e8d8f0",
          300: "#dbc1ea",
        },
        mauve: {
          DEFAULT: "#C084FC",
          400: "#C084FC",
          500: "#A66DEC",
        },
        plum: {
          DEFAULT: "#6B4FA0",
          600: "#6B4FA0",
          700: "#5a4090",
        },
        gold: {
          DEFAULT: "#D4855A",
          300: "#E8A380",
          400: "#D4855A",
        },
        midnight: "#4a3860",
        cream: "#fffaf6",
        rosegold: "#D4855A",
        warmwhite: "#fffaf6",
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(160deg, #fdf4ff 0%, #fce8f3 50%, #fff3ec 100%)",
        "gradient-page":
          "linear-gradient(160deg, #fdf4ff 0%, #fce8f3 40%, #fff3ec 100%)",
        "gradient-finale":
          "linear-gradient(180deg, #4a3860 0%, #6B4FA0 40%, #C084FC 70%, #fce8f3 90%, #fff9f0 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glow: {
          "0%, 100%": {
            boxShadow:
              "0 0 20px rgba(244, 114, 182, 0.4), 0 0 40px rgba(196, 181, 253, 0.2)",
          },
          "50%": {
            boxShadow:
              "0 0 40px rgba(244, 114, 182, 0.7), 0 0 80px rgba(196, 181, 253, 0.4)",
          },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "heart-beat": {
          "0%, 100%": { transform: "scale(1)" },
          "10%, 30%": { transform: "scale(1.1)" },
          "20%": { transform: "scale(0.95)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        glow: "glow 3s ease-in-out infinite",
        twinkle: "twinkle 2s ease-in-out infinite",
        gradient: "gradient 8s ease infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "heart-beat": "heart-beat 1.5s ease-in-out infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
