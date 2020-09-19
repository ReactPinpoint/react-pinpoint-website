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
        purple: {
          100: '#EAE2F8',
          200: '#CFBCF2',
          200: '#A081D9',
          300: '#8662C7',
          400: '#724BB7',
          500: '#653CAD',
          600: '#512798',
          700: '#421987',
          800: '#34126F',
          900: '#240754',
        },
        warmgrey: {
          100: '#FAF9F7',
          200: '#E8E6E1',
          200: '#D3CEC4',
          300: '#BBB2A7',
          400: '#A39E93',
          500: '#857F72',
          600: '#625D52',
          700: '#504A40',
          800: '#423D33',
          900: '#27241D',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
