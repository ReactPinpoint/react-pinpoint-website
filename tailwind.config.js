module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './pages/**/*.js', './components/**/*.js'],
  theme: {
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          100: '#DCEEFB',
          200: '#B6E0FE',
          200: '#84C5F4',
          300: '#62B0E8',
          400: '#4098D7',
          500: '#2680C2',
          600: '#186FAF',
          700: '#0F609B',
          800: '#0A558C',
          900: '#003E6B',
        },
        neutral: {
          100: '#F0F4F8',
          200: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#243B53',
          900: '#102A43',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
