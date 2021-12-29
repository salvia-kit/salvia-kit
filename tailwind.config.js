module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        light: 'hsl(200, 100%, 99%)',
        dark: 'hsl(200, 29%, 12%)',
      },
      boxShadow: {
        custom: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
      },
      fontFamily: {
        body: ['Open Sans'],
        title: ['Raleway'],
      },
      textColor: {
        custom: '#14445c',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
