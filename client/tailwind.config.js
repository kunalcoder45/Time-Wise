/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        RozhaOne: ['Rozha One', 'serif'],
        Mono: ['Space Mono', 'monospace'],
        heading: ['Bricolage Grotesque'],
      },
      colors: {
        customPurple: '#DDD6FE',
        customGreen: '#A7F3D0',
        customYellow: '#FDE68A',
        customBlue: '#E0F2FE',
        customBrown: '#78350f',
        customDarkBlue: '#182d67',
        customLightBlue: '#0c4a6e',
        customPurpleText: '#4c1d95',
        customGreenText: '#064e3b',
        customRed: '#F93827',
      },
    },
  },
  plugins: [],
}