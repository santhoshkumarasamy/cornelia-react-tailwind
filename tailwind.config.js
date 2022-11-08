/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'nunito' : 'Nunito Sans',
        'motter' : "'Angkor', cursive"
      },
      colors:{
        'primary-green' :"#0B4141",
        'primary-pink'  :"#FFCCBC"
      },
      backgroundImage:{
        "towardsinfinity" :"url('./assets/towardsInfinity.png')",
        "testimonials":"url('./assets/testimonials.png')"
      }
    },
  },
  plugins: [],
}