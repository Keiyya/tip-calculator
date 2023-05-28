/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(172, 67%, 45%)',
        darkCyan: 'hsl(183, 100%, 15%)',
        grayishCyan: 'hsl(184, 14%, 56%)',
        darkGrayishCyan: 'hsl(186, 14%, 43%)',
        lightCyan: 'hsl(185, 41%, 84%)',
        lightGrayishCyan: 'hsl(189, 41%, 97%)',
        white: ' hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
