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
        primaryColor: "var(--primary-color)",
        primaryColorOpacityForty: " var(--primary-color-opacity-40)",
        gradientColorBlue: "var(--gradient-color-blue)",
        gradientColorPurple: "var(--gradient-color-purple)",
        gradientColorBluePurple: "var(--main-linear-gradient)" // not in use
      },
      animation: {
        'logo-spin': 'rotateYanim 2s linear',
        'pulse2': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce2': 'bounce2 2s ease infinite',
        'navActive': 'navActive 0.2s ease-out forwards',
        'transitionIn': 'transitionIn 0.5s ease-in forwards',
        'transitionInNoRotate': 'transitionInNoRotate 0.5s linear',
        'transitionOut': 'transitionOut 0.5s linear forwards',
      },
      keyframes: {
        transitionIn: {
          from: {
            opacity: '0',
            transform: 'rotateX(-10deg)'
          },
          to: {
            opacity: '1',
            transform: 'rotateX(0deg)'
          }
        },
        transitionInNoRotate: {
          from: {
            opacity: '0',
           
          },
          to: {
            opacity: '1',
         
          }
        },
        transitionOut: {
          from: {
            opacity: '1',
            display: 'block'
          },
          to: {
            opacity: '0',
            display: 'none'
          }
        },
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
        },
        navActive: {
          'from': {
            // background: 'none',
            margin: '0px',
          },
          'to': {
            // background: 'rgb(59 130 246 / 0.4)', 
            margin: '8px'
          }
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
