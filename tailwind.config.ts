import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '425px',

      sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1700px',
    },
    extend: {
      maxWidth: {
        '9/10': '90%',
        '8/10': '80%',
      },

      fontFamily: {
        CoreRinho75: ['"Core-Rinho-75"'],
        CoreRinho65: ['"Core-Rinho-65"'],
        CoreRinho35: ['"Core-Rinho-35"'],
      },

      colors: {
        RoseRed: '#AB0A3D',
        NewGrey: '#53575A',
        Baige: '#FFEDF3',
      },
      
    },
  },
  plugins: [],
};
export default config;
