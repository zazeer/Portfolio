/** @type {import('tailwindcss').Config} **/

import plugin from "tailwindcss/plugin";

export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    animation: {
      orbit: "orbit 6s linear infinite",
      gradient: "animatedgradient 10s ease infinite alternate",
    },

    keyframes: {
      animatedgradient: {
        "0%": {
          backgroundPosition: "0% 50%",
        },
        "50%": { backgroundPosition: "100% 50%" },
        "100%": { backgroundPosition: "0% 50%" },
      },

      orbit: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },

      "gradient-border": {
        "0%": { backgroundPosition: "300% 0%" },
        "50%": { backgroundPosition: "-300% 0%" },
        "100%": { backgroundPosition: "300% 0%" },
      },
    },
    backgroundSize: {
      "300%": "300%",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    boxShadow: {
      "white-glow":
        "10px 10px 15px rgba(247, 248, 251, 0.4), 10px 10px 25px rgba(0, 0, 0, 0.2)",
    },
  },
};
export const plugins = [
  require("@iconify/tailwind"),
  require("tailwind-scrollbar-hide"),
  require("@tailwindcss/typography"),
  plugin(function ({ addUtilities }) {
    addUtilities({
      ".border-gradient": {
        position: "relative",
        borderWidth: "4px",
        borderColor: "transparent",
        backgroundClip: "border-box",
        backgroundImage: "linear-gradient(to right, #00bcd4, #3b82f6, #22c55e)",
        backgroundSize: "300% 100%",
      },
      ".animate-border-gradient": {
        animation: "gradient-border 3s ease infinite",
      },
    });
  }),
 
