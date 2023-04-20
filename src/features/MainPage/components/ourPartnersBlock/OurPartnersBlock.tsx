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
        <TatneftImg />
        <MosingproektImg />
        <PolusImg />
        <GlavstroiImg />
        <A101Img />
        <CapitalImg />
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
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1260,
    justifyContent: 'center',
  },
}))
