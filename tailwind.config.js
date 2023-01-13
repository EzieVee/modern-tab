/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mpl': '425px',
      // mobile phone large
      'mp': '320px',
      // mobile phone
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }


      '-mpl': {max:'424px'},
      // mobile phone large
      '-mp': {max:'319px'},
      // mobile phone
      '-sm': {max:'639px'},
      // => @media (min-width: 640px) { ... }

      '-md':{max:'767px'},
      // => @media (min-width: 768px) { ... }

      '-lg': {max:'1023px'},
      // => @media (min-width: 1024px) { ... }

      '-xl': {max:'1279px'},
      // => @media (min-width: 1280px) { ... }

      '-2xl': {max:'1535px'},
      // => @media (min-width: 1536px) { ... }

      'combo': {
        min: '320px',
       max: '425px'
      },
      'combo2': {
        min: '320px',
       max: '768px'
      },
      'combo3': {
        min: '320px',
       max: '1024px'
      },
      // scrollable container a
      'combo4': {
        min: '1025px',
       max: '1439px'
      }
      

      




    }
    



   
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}