import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      fontFamily:{
        'google-sans': ['Google Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require('preline/plugin'),]
}
export default config
