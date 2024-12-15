import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        principal: "#201F22",
        secondary: "#C1FD35",
        terciary: "#3A393E",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        "36": "36px",
        "27": "1.6875rem",
      },
      fontFamily: {
        open: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        "30": "1.875rem",
      },
      padding: {
        "75": "4.6875rem",
        "50": "3.125rem",
      },
      spacing: {
        "190": "11.875rem",
        "418": "26.125rem",
        "13": "0.8rem",
        "30": "1.875rem",
        "76": "4.75rem",
        "146": "9.25rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
