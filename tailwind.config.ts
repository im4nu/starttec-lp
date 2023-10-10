import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        main: '#7214FF',
        black: '#060B27',
        'neutral-600': '#0E1330' ,
        // 'gray-300': '#8F9BB7',
      }
    },
  },
  plugins: [],
}
export default config
