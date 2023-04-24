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
      '@media (max-width: 645px)': {
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
      '@media (max-width: 645px)': {
        fontSize: '1rem',
        lineHeight: '1.5rem',
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
        underline: 'none',
      },
    },
    MuiTypography: {
      root: {
        textDecoration: 'none',
      },
    },
    MuiButton: {
      contained: {
        backgroundColor: 'rgba(249, 115, 22, 1)',
        color: '#FFFFFF',
        height: 52,
        padding: '14px 20px',
        boxShadow: 'none',
      },
    },
    MuiFormLabel: {
      root: {
        color: '#111827',
        marginRight: 0,
        marginBottom: '8px',
        '&$focused': {
          color: '#111827',
          borderColor: '#E5E7EB',
        },
      },
      asterisk: {
        color: 'rgba(249, 115, 22, 1)',
      },
    },
    MuiFormControlLabel: {
      root: {
        color: '#111827',
        marginRight: 0,
        '&$focused': {
          color: '#111827',
          borderColor: '#E5E7EB',
        },
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: '#E5E7EB !important',
      },
    },
    MuiCheckbox: {
      root: {
        '&$checked': {
          color: 'rgba(249, 115, 22, 1) !important',
        },
      },
    },
    MuiAccordion: {
      root: {
        boxShadow: 'none',
        '&:after': {
          border: '1px solid red',
          backgroundColor: 'red',
        },
      },
    },
  },
})
