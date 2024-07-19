import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': { max: "639px" },
      sm: '640px',
      'sm-max': { max: "767px" },
      'sm-lg': { min: '640px', max: '1023px' },
      md: '768px',
      'md-max': { max: '1023px' },
      lg: '1024px',
      'lg-max': { max: '1279px' },
      'lg-xl': { min: '1024px', max: '1280px' },
      xl: '1280px',
      '2xl': '1440px'
    },
    fontFamily: {
      dm_sans: 'var(--font-dm_sans)',
      poppins: 'var(--font-poppins)'
    },
    backgroundImage: {
      "home-desktop": 'url(/assets/home-desktop.png)',
      "home-mobile": 'url(/assets/home-mobile.png)',
      dividertOne: "linear-gradient(90deg, #10496F 0%, rgba(72, 123, 114, 0) 100%)",
      dividerTwo: "linear-gradient(270deg, #10496F 0%, rgba(72, 123, 114, 0) 100%)"
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10496F',
        },
        blueColor: {
          backgroundSection: "#F3F7FA",
          backgroundFooter: "#D8E0E5",
          buttonColor: "#009BFF",
          mandalaColor: '#B3DEFB',
        },
        titleColor: "#02243A",
        fontColor: "#525A58",
      },
    },
  },
  plugins: [],
};
export default config;
