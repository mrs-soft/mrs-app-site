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
      fontSize: `clamp(0.5rem, 2.5rem, 3rem)`,
      lineHeight: `3.5rem`,
      fontWeight: 700,
      '@media (max-width:420px)': {
        fontSize: '2rem',
        lineHeight: `2.5rem`,
      },
    },
    h4: {
      fontSize: `clamp(0.5rem, 2rem, 2rem)`,
      lineHeight: '2.5rem',
      fontWeight: 700,
      '@media (max-width:420px)': {
        fontSize: '1.5rem',
        lineHeight: `2rem`,
      },
    },
    h5: {
      fontSize: `clamp(0.5rem, 1.5rem, 1.5rem)`,
      lineHeight: '2rem',
      fontWeight: 700,
      '@media (max-width:420px)': {
        fontSize: '1rem',
        lineHeight: `1.5rem`,
      },
    },
    subtitle1: {
      fontSize: `clamp(0.5rem, 1rem, 1rem)`,
      lineHeight: '1.5rem',
      fontWeight: 600,
      letterSpacing: '-0.013rem',
    },
    body1: {
      fontSize: `clamp(0.3rem, 1rem, 1rem)`,
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
          boxSizing: 'border-box',
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
    MuiLink: {
      root: {
        textDecoration: 'none',
      },
    },
    MuiTypography: {
      root: {
        textDecoration: 'none',
      },
    },
  },
})
