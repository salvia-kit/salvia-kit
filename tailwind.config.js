module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        body: 'hsl(200, 100%, 99%)',
        'body-dark': 'hsl(200, 29%, 12%)',
        custom: 'hsl(200, 64%, 22%)',
        'custom-hover': 'hsl(200, 64%, 15%)',
        dropdown: 'hsl(200, 29%, 15%)',
        react: '#26a69a',
      },
      boxShadow: {
        custom: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
      },
      fontFamily: {
        body: ['Open Sans'],
        title: ['Raleway'],
      },
      transitionProperty: {
        height: 'height',
      },
      textColor: {
        react: '#61DBFB',
        custom: 'hsl(200, 64%, 22%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
