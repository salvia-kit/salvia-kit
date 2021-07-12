module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        custom: 'hsl(200, 64%, 22%)',
        'custom-hover': 'hsl(200, 64%, 15%)',
      },
      boxShadow: {
        custom: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
      },
      fontFamily: {
        body: ['Open Sans'],
        title: ['Raleway'],
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
