import { Typography, makeStyles } from '@material-ui/core'
import { A101Img, CapitalImg, GlavstroiImg, MosingproektImg, PolusImg, TatneftImg } from '../../../../app/assets/icons'
// import Background from '../../../../app/assets/icons/mainPage/ourPartners/background2.svg'

const OurPartnersBlock = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Typography variant='h4'>Нам</Typography>
        <Typography variant='h4' className={classes.textColor}>
          &nbsp;доверяют
        </Typography>
      </div>
      <div className={classes.cardContainer}>
        <div className={classes.animation}>
          <TatneftImg />
        </div>
        <div className={classes.animation}>
          <MosingproektImg />
        </div>
        <div className={classes.animation}>
          <PolusImg />
        </div>
        <div className={classes.animation}>
          <GlavstroiImg />
        </div>
        <div className={classes.animation}>
          <A101Img />
        </div>
        <div className={classes.animation}>
          <CapitalImg />
        </div>
        <div className={classes.animation}>
          <TatneftImg />
        </div>
        <div className={classes.animation}>
          <MosingproektImg />
        </div>
        <div className={classes.animation}>
          <PolusImg />
        </div>
        <div className={classes.animation}>
          <GlavstroiImg />
        </div>
        <div className={classes.animation}>
          <A101Img />
        </div>
        <div className={classes.animation}>
          <CapitalImg />
        </div>
      </div>
    </div>
  )
}

export default OurPartnersBlock

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    padding: theme.spacing(32, 0, 32),
    // backgroundImage: `linear-gradient(to top, transparent 50%, ${theme.palette.background.default} 90%), linear-gradient(to right, transparent 85%, ${theme.palette.background.default} 90%), linear-gradient(to left, transparent 85%, ${theme.palette.background.default} 90%), url(${Background})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'bottom',
    maxWidth: '100%',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(16),
    flexDirection: 'row',
  },
  iconTop: {
    marginTop: theme.spacing(10),
  },
  textColor: {
    color: theme.palette.primary.main,
  },
  cardContainer: {
    display: 'flex',
    height: 124,
    width: 960,
    overflow: 'hidden',
    position: 'relative',
    '-webkit-mask-image': `linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)`,
    maskImage: `linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)`,
    '@media only screen and (max-width: 1200px)': {
      width: 700,
    },
    '@media only screen and (max-width: 700px)': {
      width: 400,
    },
  },
  animation: {
    display: 'flex',
    width: '250px',
    height: '100%',
    position: 'relative',
    animation: '20s linear infinite $example',
    '-webkit-animation': `20s linear infinite $example`,
  },
  '@keyframes example': {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(calc(-250px * 6))' },
  },
  '@-webkit-keyframes example': {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(calc(-250px * 6))' },
  },
}))
