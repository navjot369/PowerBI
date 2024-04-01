import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg-image": "url('/Images/back-heroSec.jpg')",
        "resource-heroSec": "url('/Images/background1.jpg')",
        "program-background": "url('/Images/get_in_touch_wallpaper.jpg')",
        "sec4-bg": "url('/Images/background1.jpg')",
        "get-touch-wall": "url('/Images/get_in_touch_wallpaper.jpg')",
        "team-page": "url('/Images/team_background.svg')",
        "login-wall": "url('/Images/login_wall.jpg')",
        // 'login-wall' : "linear-gradient(140deg, #008080, #aaa 20%, #eee 40%, #aaa 50%, #007070)"
      },
    },
  },
  plugins: [],
};

export default config;
