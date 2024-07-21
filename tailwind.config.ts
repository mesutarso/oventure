import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
    colors: {
      primary: "#00B7E8",
      secondary: "#21dfb7",
      tertiary: "#1E264D",
      yellow: "#FFD100",
      blueDark: "#012e57",
      blueLight: "#0468b1",
      pink: "#F5167E",
      orange: "#DC6738",
      accent: "#3D37F1",
      violet: "#5D00BA",
      dark: "#2c211c",
      white: "#FFFFFF",
      black: "#000000"
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
