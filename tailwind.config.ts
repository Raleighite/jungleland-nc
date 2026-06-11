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
        jungle: {
          sand:   '#F5E6C8',
          amber:  '#C8860A',
          rust:   '#8B3A2A',
          bark:   '#3D2B1F',
          moss:   '#4A5E3A',
          sky:    '#7BBCD5',
          cream:  '#FAF3E0',
          gold:   '#D4A840',
          teal:   '#3A8A86',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Lato', 'system-ui', 'sans-serif'],
      },
      dropShadow: {
        'sign': '0 24px 48px rgba(61,43,31,0.55)',
      },
    },
  },
  plugins: [],
}
export default config
