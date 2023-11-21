import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mellow: "#E8E9A1",
        coral: "#F76C6C",
        "bluey-light": "#A8D0E6",
        bluey: "#374785",
        "bluey-dark": "#24305E",
      },
      fontFamily: {
        voga: "var(--font-voga-medium)",
        inter: "var(--font-inter)",
      },
      letterSpacing: {
        loose: ".7em",
      },
      padding: {
        content: "2.5vw 6vw",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      "acid",
      "coffee",
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
export default config;
