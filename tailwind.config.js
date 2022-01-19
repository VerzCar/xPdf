module.exports = {
  //mode: 'jit',
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  separator: ':',
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple ColorDef Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto ColorDef Emoji"',
      ],
      serif: [
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '2rem',
        lg: '3rem',
        xl: '5rem',
        '2xl': '4rem'
      }
    },
    extend: {
      colors: {
        indigo: {
          50: '#e6dcff',
          100: '#dcafff',
          200: '#be82ff',
          300: '#e0cec7',
          400: '#a055f5',
          500: '#a100ff',
          600: '#7500c0',
          700: '#460073',
          800: '#000000',
          900: '#000000',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
