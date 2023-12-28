import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg-image' : "url('/Images/back-heroSec.jpg')",
        'sec4-bg' : "url('/Images/background1.jpg')"
      },
    },
  },
  plugins: [],
}
export default config
