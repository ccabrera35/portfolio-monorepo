import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        "dark-gray": 'rgb(22, 24, 28)'
      },
      screens: {
        'max-lg': { 'max': '1007px' },
      },
      animation: {
        spinner: "spinner 1s linear infinite"
      },
      keyframes: {
        spinner: {
          "0%": { transform: "translateX(-50%) rotate(0deg)" },
          "100%": { transform: "translateX(-50%) rotate(360deg)" }
        }
      }
    }
  },
  plugins: []
};
export default config;
