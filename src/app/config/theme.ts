import { createTheme } from '@material-ui/core/styles'

import { fontFace } from './font'

export const uiTheme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: 'rgba(249, 115, 22, 1)',
    },
    background: {
      default: '#F9FAFB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#111827',
      secondary: 'rgba(107, 114, 128, 1)',
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif', 'Roboto', 'Helvetica Neue', 'Arial'].join(','),
    h3: {
      fontSize: '3rem',
      lineHeight: '3.5rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '2rem',
      lineHeight: '2.5rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: 600,
      letterSpacing: '-0.013rem',
    },
    body1: {
      fontSize: '1rempx',
      lineHeight: '1.5rem',
      fontWeight: 400,
      letterSpacing: '-0.013rem',
    },
    button: {
      textTransform: 'none',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': fontFace,
        '*, *::before, *::after': {
          boxSizing: 'inherit',
          margin: 0,
          padding: 0,
        },
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#E5E7EB',
        height: 1,
      },
    },
  },
})
