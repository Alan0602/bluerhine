import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#104c8c',
          royal: '#2799d4',
          gold: '#fa6e35',
          primary: '#104c8c',
          secondary: '#2799d4',
          accent: '#fa6e35',
          orange: '#fa6e35',
          black: '#253d4e',
          white: '#ffffff',
          grey: '#6b7a93',
          lightGrey: '#f4f6fa',
        },
      },
      fontFamily: {
        barlow: ['Barlow Condensed', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}

export default config
