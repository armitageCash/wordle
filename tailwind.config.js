/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Configura Roboto como fuente sans-serif
      },
    },
  },
  variants: {
    extend: {
      textColor: ["dark"], // Habilita variantes de color de texto para modo oscuro
    },
  },
  plugins: [],
};
