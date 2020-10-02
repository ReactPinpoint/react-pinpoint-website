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
          300: '#84C5F4',
          400: '#62B0E8',
          500: '#4098D7',
          600: '#2680C2',
          700: '#186FAF',
          800: '#0F609B',
          900: '#0A558C',
          1000: '#003E6B',
        },
        neutral: {
          100: '#F0F4F8',
          200: '#D9E2EC',
          300: '#BCCCDC',
          400: '#9FB3C8',
          500: '#829AB1',
          600: '#627D98',
          700: '#486581',
          800: '#334E68',
          900: '#243B53',
          1000: '#102A43',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
