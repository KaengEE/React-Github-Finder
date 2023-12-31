/** @type {import('tailwindcss').Config} */
export default {
  //테일윈드 css 설정
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], //데이지UI적용
  daisyui: {
    themes: ["light", "dark", "cupcake"], //테마적용
  },
};
