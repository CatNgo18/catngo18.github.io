import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "noise": "url('/assets/noise.svg')",
      },
      colors: {
        'text': 'rgb(var(--color-text))',
        'background': 'rgb(var(--color-background))',
        'primary': 'rgb(var(--color-primary))',
        'secondary': 'rgb(var(--color-secondary))',
        'accent': 'rgb(var(--color-accent))',
      },
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        'shrikhand': ['var(--font-shrikhand'],
        'roboto-slab': ['var(--font-roboto-slab)'],
        'poppins': ['var(--font-poppins)'],
      }
    }
  },
  plugins: [require("tailwind-gradient-mask-image")],
};
export default config;
