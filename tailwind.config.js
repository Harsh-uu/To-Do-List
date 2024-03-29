/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  variants: {
    extend: {
        display: ["group-hover"],
    },
    extend: {
      backgroundImage:{
        'hero-pattern': "url('/src/assets/5566879.jpg)",
      }
    }
},
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        }
      },
      animation:{
        'wiggle':'wiggle 0.7s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

