module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        custom: 'hsl(200, 64%, 22%)',
        'custom-hover': 'hsl(200, 64%, 15%)',
      },
      fontFamily: {
        body: ['Open Sans'],
        title: ['Raleway'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
