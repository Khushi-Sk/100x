/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      "neutral-50":"#f9f9f9",
      "neutral-100":"#f4f4f4",
      "neutral-200":"#e4e4e4",
      "neutral-300":"#d3d3d3",
      "neutral-400":"#a2a2a2",
      "neutral-500":"#737373",
      "neutral-600":"#525252",
      "neutral-700":"#404040",
      "neutral-800":"#262626",
      "neutral-900":"#171717",
      "neutral-950":"#0a0a0a",
      "neutral-1000":"#000000",
      "stroke":"#ffffff",
      "twitter-blue":"#1d9bf0",
      "twitter-blue-hover":"#1871ca",
      "twitter-blue-disabled":"#1e5d87",
      "blue-wash":"#030f17",
      "blue-wash-dark": "#75BEFF33",
      "button-stroke":"#546a7a",
      "searchbar-fill":"#212327",
      "card-fill":"#16181c",
      "success-green":"#00be74",
      "red-error":"#8b141a"
  },
  backgroundImage: {
    "100x": "url('../../../100x-login-bg.png')"
  },
  fontFamily:{
    "px-regular":"Inter",
  },
  fontSize:{
    base: "1rem",
    "5xl":"1.5rem",
    inherit:"inherit",
  },
  boxShadow: {
    'innerColor': '0 0 0px 1000px #343159 inset',
},
},
  },
  plugins: [],
}

