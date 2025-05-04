/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#111111', // Um preto ligeiramente mais suave que o preto puro
        primary: {
          DEFAULT: '#D4AF37', // Um tom de dourado clássico e moderno
          light: '#E0C56E',   // Um dourado mais claro para hover/highlights
          dark: '#B8860B',    // Um dourado mais escuro para sombras/variações
        },
        text: {
          light: '#F5F5F5', // Branco suave para texto principal
          medium: '#A0A0A0', // Cinza claro para texto secundário
          dark: '#333333',  // Para uso em fundos claros, se houver
        },
        border: '#333333', // Bordas sutis
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Fonte moderna e limpa
        serif: ['Merriweather', 'serif'], // Opcional para títulos ou ênfase
      },
    },
  },
  plugins: [],
};
