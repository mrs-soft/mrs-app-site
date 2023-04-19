import { CSSProperties } from '@material-ui/core/styles/withStyles'

import InterRegular from '../assets/fonts/Inter-Regular.ttf'
import InterLight from '../assets/fonts/Inter-Light.ttf'
import InterMedium from '../assets/fonts/Inter-Medium.ttf'
import InterBold from '../assets/fonts/Inter-Bold.ttf'

export const fontFace: CSSProperties['@font-face'] = [
  {
    fontFamily: 'Inter',
    fontDisplay: 'swap',
    fontWeight: 300,
    src: `
      local('Inter'),
      local('Inter-Light'),
      url(${InterLight}) format('truetype')
    `,
  },
  {
    fontFamily: 'Inter',
    fontDisplay: 'swap',
    fontWeight: 400,
    fontStyle: 'normal',
    src: `
      local('Inter'),
      local('Inter-Regular'),
      url(${InterRegular}) format('truetype')
    `,
  },
  {
    fontFamily: 'Inter',
    fontDisplay: 'swap',
    fontWeight: 500,
    src: `
      local('Inter'),
      local('Inter-Medium'),
      url(${InterMedium}) format('truetype')
    `,
  },
  {
    fontFamily: 'Inter',
    fontDisplay: 'swap',
    fontWeight: 600,
    src: `
      local('Inter'),
      local('Inter-Bold'),
      url(${InterBold}) format('truetype')
    `,
  },
]
