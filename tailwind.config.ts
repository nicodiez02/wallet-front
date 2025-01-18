import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#201F22",
        secondary: "#C1FD35",
        terciary: "#3A393E",
        error: "#DA0000",
        white: "#fff",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        "36": "36px",
        "27": "1.6875rem",
        "11": "0.7rem",
        "21.5": "1.34375rem",
        md: "14px",
        sm: "12px",
      },
      aspectRatio: {
        "3/6": "3 / 6",
        "9/4": "9 / 4",
      },
      fontFamily: {
        open: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "home-desktop": "url(/images/home.png)",
        "home-mobile": "url(/images/home_mobile.png)",
      },
      borderRadius: {
        "30": "1.875rem",
      },
      lineHeight: {
        "16": "4rem",
        "38": "2.4rem",
      },
      padding: {
        "45": "2.8125rem",
        "75": "4.6875rem",
        "50": "3.125rem",
        "18": "1.125rem",
      },
      spacing: {
        "360": "22.5rem",
        "190": "11.875rem",
        "418": "26.125rem",
        "13": "0.8rem",
        "20": "1.25rem",
        "25": "1.5625rem",
        "54": "3.375rem",
        "17": "1.0625rem",
        "44": "2.75rem",
        "180": "11.25rem",
        "972": "60.75rem",
        "30": "1.875rem",
        "76": "4.75rem",
        "114": "7.125rem",
        "146": "9.25rem",
        "100": "6.25rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
