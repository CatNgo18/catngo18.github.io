import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

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
        'background': {
          light: 'rgb(var(--color-background-light))',
          medium: 'rgb(var(--color-background-medium))',
          dark: 'rgb(var(--color-background-dark))',
        },
        'primary': 'rgb(var(--color-primary))',
        'secondary': 'rgb(var(--color-secondary))',
        'tertiary': 'rgb(var(--color-tertiary))',
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
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      animation: {
        circle: 'circle 5s infinite linear',
        mesh1: 'mesh1 20s infinite linear',
        mesh2: 'mesh2 20s infinite linear',
        mesh3: 'mesh3 20s infinite linear',
        mesh4: 'mesh4 20s infinite linear',
      },
      keyframes: {
        circle: {
          '0%': { 
            transform: 'rotate(0deg) translateY(1rem) rotate(0deg)',
          },
          '100%': { 
            transform: 'rotate(360deg) translateY(1rem) rotate(-360deg)',
          } 
        },
        mesh1: {
          '0%': {
            left: '0',
          },
          '50%': { 
            left: 'calc(100% - 100px)',
          },
          '100%': {
            left: '0',
          }
        },
        mesh2: {

        },
        mesh3: {

        },
        mesh4: {

        }
      }
    }
  },
  plugins: [require("tailwind-gradient-mask-image")],
};

export default withMT(config);
