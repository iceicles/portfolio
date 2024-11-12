import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'logo-spin': 'rotateYanim 2s linear infinite',
        'pulse2': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce2': 'bounce2 2s ease infinite'
      },
      keyframes: {
        rotateYanim: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        pulse2: {
          '0%': {
            opacity: '1'
          },
          '50%': {
            opacity: '.75'
          },
          '100%': {
            opacity: '1'
          }
        },
        bounce2: {
          '0%, 20%, 50%, 80%, 100%': {transform: 'translateY(0)'},
	        '40%': {transform: 'translateY(-30px)'},
	        '60%': {transform: 'translateY(-15px)'},
        }
      },
      screens: {
        'desktop-lg': '1970px',
        // => @media (min-width: 1970px) { ... }
      }
    },
  },
  plugins: [],
};
export default config;
