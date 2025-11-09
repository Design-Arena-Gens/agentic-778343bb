import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        canopy: {
          900: "#0a2a25",
          800: "#134033",
          700: "#1e5a44",
          600: "#267655"
        }
      },
      keyframes: {
        "cat-walk": {
          "0%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(110%)" }
        },
        "background-pan": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "100% 0" }
        },
        "firefly-flicker": {
          "0%, 100%": { opacity: "0.1", transform: "scale(0.8)" },
          "50%": { opacity: "0.8", transform: "scale(1.2)" }
        }
      },
      animation: {
        "cat-walk": "cat-walk 16s linear infinite",
        "background-pan": "background-pan 60s linear infinite",
        "firefly-flicker": "firefly-flicker 3s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
