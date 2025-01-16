export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    fontFamily: { // Corrected from fontfamily to fontFamily
      sans: ['Josefin Sans', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
  },
};
export const plugins = [];
export const mode = 'jit';
