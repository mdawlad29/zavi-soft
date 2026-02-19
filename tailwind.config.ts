import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      
    },
    extend: {
      backgroundColor: {
        primary: "#4A69E2",
        secondary: "#232321",
        neutral: "#FAFAFA",
      },
      colors: {
        primary: "#4A69E2",
        secondary: "#232321",
        neutral: "#FAFAFA",
      },
      borderColor: {
        primary: "#4A69E2",
        secondary: "#232321",
        neutral: "#FAFAFA",
      },
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1420px",
        "2xl": "1536px",
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
} satisfies Config;
