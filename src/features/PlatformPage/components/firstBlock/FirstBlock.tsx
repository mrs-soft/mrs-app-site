import { Button, Typography, makeStyles } from '@material-ui/core'
import Background from '../../../../app/assets/icons/mainPage/background.svg'
import { PlatformImg } from '../../../../app/assets/icons'
import { BUTTONS } from '../../../../app/utils/constants'

export const MAX_WIDTH_CONTAINER = 1200
const MAX_WIDTH_TEXT = 948

const FirstBlock = () => {
  const classes = useStyles()

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.textBlock}>
          <Typography variant='h3'>МРС Платформа. Цифровизация ваших </Typography>
          <Typography variant='h3' className={classes.textColor}>
            уникальных процессов
          </Typography>
          <Typography variant='h5' className={classes.textBold}>
            Создайте вашу эко-систему бизнес-приложений на единой облачной платформе с современными мобильным клиентами
          </Typography>
          <Button variant='contained'>{BUTTONS.moreIntegration}</Button>
        </div>
        <PlatformImg className={classes.imgStyle} />
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
    maxHeight: 1220,
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
    marginBottom: theme.spacing(8),
  },
  imgStyle: {
    marginTop: theme.spacing(10),
    maxWidth: '100%',
    width: '100%',
    '@media only screen and (max-width: 700px)': {
      height: '200px',
      marginTop: theme.spacing(12),
    },
    '@media only screen and (max-width: 965px)': {
      marginTop: theme.spacing(12),
      height: '70%',
    },
  },
  textBottom: {
    marginBottom: theme.spacing(8),
  },
  textBold: {
    fontWeight: 400,
    marginBottom: theme.spacing(14),
  },
}))
