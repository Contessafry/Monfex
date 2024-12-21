import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#083400",
        "primary-darker": "#072800",
        secondary: "#9C7644",
        "secondary-darker": "#906E41",
        accent: "#4CAF4F",
        neutral: "#CFC5C1",
        "neutral-darker": "#CFC5C1",
        grayT: "#6C778B",
        blueT: "#1E293B",
        "blue-dark": "#1B2327",
      },
      fontFamily: {
        markazi: ["var(--font-markazi-text)", "serif"],
        radley: ["var(--font-radley)", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
