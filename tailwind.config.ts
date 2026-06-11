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
          sand:    '#F5E6C8',
          amber:   '#C8860A',
          rust:    '#8B3A2A',
          bark:    '#3D2B1F',
          moss:    '#4A5E3A',
          sky:     '#7BBCD5',
          cream:   '#FAF3E0',
        },
      },
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        body:    ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
