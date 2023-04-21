import { Typography, makeStyles } from '@material-ui/core'
import { FirstImg } from '../../../../app/assets/icons'
import Background from '../../../../app/assets/icons/mainPage/background.svg'
import { FIRST_BLOCK } from '../../../../app/utils/constants'

export const MAX_WIDTH_CONTAINER = 1200
const MAX_WIDTH_TEXT = 948

const FirstBlock = () => {
  const classes = useStyles()

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.textBlock}>
          <Typography variant='h3'>Российский разработчик</Typography>
          <Typography variant='h3' className={classes.textColor}>
            цифровых продуктов
          </Typography>
          <Typography variant='h3' className={classes.textBottom}>
            для строительных и промышленных предприятий
          </Typography>
          <Typography variant='h5' className={classes.textBold}>
            {FIRST_BLOCK.body}
          </Typography>
        </div>
        <FirstImg className={classes.imgStyle} />
      </div>
    </div>
  )
}

export default FirstBlock

const useStyles = makeStyles((theme) => ({
  background: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `linear-gradient(to top, transparent 30%, ${theme.palette.background.default} 70%), linear-gradient(to right, transparent 85%, ${theme.palette.background.default} 90%), linear-gradient(to left, transparent 85%, ${theme.palette.background.default} 90%), url(${Background})`,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    maxWidth: '100%',
    '@media only screen and (max-width: 700px)': {
      backgroundSize: '410px 350px',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    maxWidth: MAX_WIDTH_CONTAINER,
    marginTop: theme.spacing(32),
    '@media only screen and (max-width: 700px)': {
      marginTop: theme.spacing(16),
    },
  },
  textBlock: {
    maxWidth: MAX_WIDTH_TEXT,
    textAlign: 'center',
  },
  firstItem: {
    alignSelf: 'center',
  },
  textColor: {
    color: theme.palette.primary.main,
  },
  imgStyle: {
    marginTop: theme.spacing(26.5),
    maxWidth: '100%',
    width: '100%',
    '@media only screen and (max-width: 700px)': {
      height: '200px',
      marginTop: theme.spacing(12),
    },
  },
  textBottom: {
    marginBottom: theme.spacing(8),
  },
  textBold: {
    fontWeight: 400,
  },
}))
