import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        circle: 'url("/icons/circles-bg.svg")',
      },
      backgroundColor:{
        'gray-gradient': 'background: linear-gradient(180deg, #F6F6F7 0%, #7E808F 100%)'
      },
      colors:{
        main: '#7214FF'
      }
    },
  },
  plugins: [],
}
export default config
