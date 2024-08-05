import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#112211",
        secondary: "",
        accent: "",
        black: "#1B1B1B",
        gray: {
          100: "#FAFAFA",
          200: "#EEE",
          300: "#DDD",
          400: "#CBC9CF",
          500: "#ADAEB8",
          600: "#A4A1AA",
          700: "#79747E",
          800: "#4B4B4B",
        },
        green: {
          100: "#F1EFFD",
          200: "#00AC07",
          300: "#0B3B2D",
        },
        yellow: {
          100: "#FFC23D",
        },
        orange: {
          100: "#FFF4E8",
          200: "#FF7C1D",
        },
        red: {
          100: "#FF472E",
        },
        blue: {
          100: "#E5F3FF",
          200: "#2EB4FF",
          300: "#0085FF",
        },
      },
      fontSize: {
        "3xl": ["2rem", { lineHeight: "2.625rem" }], // 32px / 42px
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px / 32px
        xl: ["1.25rem", { lineHeight: "2rem" }], // 20px / 32px
        "2lg": ["1.125rem", { lineHeight: "1.625rem" }], // 18px / 26px
        lg: ["1rem", { lineHeight: "1.625rem" }], // 16px / 26px
        md: ["0.875rem", { lineHeight: "1.5rem" }], // 14px / 24px
        sm: ["0.8125rem", { lineHeight: "1.375rem" }], // 13px / 22px
        xs: ["0.75rem", { lineHeight: "1.125rem" }], // 12px / 18px
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      fontFamily: {
        pretendard: ["var(--font-[pretendard)", "sans-serif"],
      },
    },
    screens: {
      md: "768px",
      xl: "1280px",
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({
      addComponents,
      theme,
    }: {
      addComponents: Function;
      theme: Function;
    }) {
      const screens = theme("screens") as Record<string, string>;

      addComponents({
        ".container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          maxWidth: "none",
          [`@media (min-width: ${screens.md})`]: {
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          },
          [`@media (min-width: ${screens.xl})`]: {
            paddingLeft: "2.5rem",
            paddingRight: "2.5rem",
            maxWidth: "1280px",
          },
        },
      });
    },
  ],
};

export default config;
