/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1000px',
      xl: '1200px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        cblue: '#03a9f4',
        csemib: '#191919',
        cgray: '#9c9c9c',
        clgray: '#bfbfbf',
        bred: '#FB4934',
        bpurple: '#4934fb',
        bgray: '#b9b9b9',
        blgray: '#fbfbfb',
        pgreen: '#9bcab8',
        psec: '#ca9bad',
        pgray: '#eaeaea',
        pdark: '#676767',
      },
      maxWidth: {
        site: '1170px',
      },
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
        almarai: ['Almarai', 'sans-serif'],
      },
      boxShadow: {
        nav: '0px 0px 2px #bfbfbf',
        card: '0px 2px 4px #d2d2d2',
        personal: '0px 4px 10px #bdbdbd',
        project: '0px 3px 6px #bfbfbf',
        'project-hover': '0px 3px 28px #bfbfbf',
      },
    },
  },
  plugins: [],
}
