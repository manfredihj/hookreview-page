
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#400099",
          green: "#A0F717",
          blue: "#4fb3de",
          pink: "#e71fb2",
        },
        neutral: {
          dark: "#111827",
          gray: "#6B7280",
          light: "#F9FAFB",
        },
      },
      borderRadius: {
        "2xl": "1rem"
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.08)"
      }
    },
  },
  plugins: [],
} satisfies Config;
