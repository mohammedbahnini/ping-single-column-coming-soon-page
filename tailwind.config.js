/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      'dark-blue' : 'rgba(21, 32, 42, 1)' , 
      'light-blue-1' : '#C2D3FF',
      'light-blue-2' : '#B8C7ED' , 
      'light-blue-3' : '#4C7BF3' ,
      'light-gray' : '#969696' , 
      'white' : 'white' , 
      'black' : 'black' 
    }
  },
  plugins: [],
}
