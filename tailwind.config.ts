import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: "#fafae1",
        sunflower: "#ffd31f",
        tangerine: "#ffbe4e",
        salmon: "#ffa97e",
        coral: "#ff94ae",
        coffee: "#4f3130",
      },
    },
  },
  plugins: [],
} satisfies Config;
