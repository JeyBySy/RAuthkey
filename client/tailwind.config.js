/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'elephant': {
          '0': '#0e0e11',
          '50': '#f2f8f9',
          '100': '#deebef',
          '200': '#c1d8e0',
          '300': '#95bccb',
          '400': '#6398ad',
          '500': '#477b93',
          '600': '#3e667c',
          '700': '#375567',
          '800': '#334857',
          '900': '#293742',
          '950': '#1b2731',
        }
      },
    },
  },
  plugins: [],
}

