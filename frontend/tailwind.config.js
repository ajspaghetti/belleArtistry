/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path according to your project structure
  ],
  theme: {
    extend: {
      fontSize: {
        'custom-large': '3rem', // Example custom font size
      },
      colors: {
        primary: '#fff',
        secondary: '#d6ccc2',
        bw: {
          gray: '#343434',
          black: '#000'
        },
        beige: {
          cool: '#f5ebe0',
          tan: '#e3d5ca',
          taupe: '#d6ccc2'
        }
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
        4: '4px',
        8: '8px',
      },
      borderColor: {
        primary: '#fff', // White border
      }
    },
  },
  plugins: [],
}
