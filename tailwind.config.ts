import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem", // 기본 패딩
          sm: "1.5rem", // sm 브레이크포인트에서 패딩
          md: "2.5rem", // md 브레이크포인트에서 패딩
          lg: "3rem", // lg 브레이크포인트에서 패딩
          xl: "4rem", // xl 브레이크포인트에서 패딩
          "2xl": "5rem", // 2xl 브레이크포인트에서 패딩
        },
      },
      colors: {
        primary: "#333236",
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
  },
  plugins: [],
};

export default config;
