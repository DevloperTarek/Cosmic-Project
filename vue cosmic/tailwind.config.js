/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm':'320px',
      'md':'768px',
      'lg':'1024px',
      'xl':'992px',
      '2xl':'1120px',
    },
    container:{
      center:true,
    },
    extend: {
      colors:{
        'primary':'#fc035e',
        'text-gray':'#6d6e6a',
      },
      fontFamily:{
        'Poppins':"'Poppins', sans-serif",
        'Roboto' :"'Roboto', sans-serif",
      }
    }
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}