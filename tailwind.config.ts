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
          navy: '#1B2F5E',
          royal: '#2C4A8A',
          gold: '#D4A843',
          primary: '#1B2F5E',
          secondary: '#2C4A8A',
          accent: '#D4A843',
          orange: '#1B2F5E', // Temporary mapping to Navy to remove orange theme
          black: '#111827',
          white: '#FFFFFF',
          grey: '#6B7A93',
          lightGrey: '#F4F6FA',
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
