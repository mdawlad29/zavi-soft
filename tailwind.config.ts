import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        xl: "1.5rem",
      },
    },
    extend: {
      backgroundColor: {
        primary: "#09a4ff",
        secondary: "#20252F",
        "secondary-50": "#fafafa",
        neutral: "#fff",
      },
      colors: {
        primary: "#09a4ff",
        secondary: "#20252F",
        neutral: "#fff",
      },
      borderColor: {
        primary: "#09a4ff",
        secondary: "#20252F",
        neutral: "#fff",
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
