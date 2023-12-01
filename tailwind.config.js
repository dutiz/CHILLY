// eslint-disable-next-line no-undef
const config = require('tailwindcss/defaultTheme')

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        sans: ['var(--font-cormorant-infant)', ...config.fontFamily.serif],
      },
      colors: {
        gray: {
          ...config.colors.gray,
          200: '#F4F4F4',
          300: '#FFF8F5',
          500: '#575B62',
          600: '#555555',
          700: '#1F242C',
          800: '#343942',
          900: '#292E36',
        },
        yellow: {
          ...config.colors.yellow,
          400: '#E1B168',
        },
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('tailwind-bootstrap-grid')({
      gridGutterWidth: '32px',
      containerMaxWidths: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',
      },
    }),
    // eslint-disable-next-line no-undef
    require('tailwindcss-debug-screens'),
  ],
}
