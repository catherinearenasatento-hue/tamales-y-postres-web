/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#fff8f1',
          100: '#ffefdb',
          200: '#ffdbb0',
          300: '#ffc17e',
          400: '#ff9d46',
          500: '#ff7b1a',
          600: '#f06006',
          700: '#c84707',
          800: '#9e370e',
          900: '#7f2f0f',
        },
        cream: '#faf6f0'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        blob: "blob 7s infinite",
        'fade-in': "fadeIn 0.3s ease-out forwards",
        'fade-in-down': "fadeInDown 0.3s ease-out forwards",
        'scale-up': "scaleUp 0.3s ease-out forwards",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInDown: {
          "0%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        scaleUp: {
          "0%": {
            opacity: 0,
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        }
      },
    },
  },
  plugins: [],
}
