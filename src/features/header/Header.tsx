import { Typography, makeStyles } from '@material-ui/core'
import { LogoIcon, MenuIcon } from '../../app/assets/icons'
import { MAX_WIDTH_CONTAINER } from '../MainPage/components/firstBlock/FirstBlock'
import { LINKS } from '../../app/utils/constants'
import { To } from '../../app/router/to'
import { Link } from 'react-router-dom'

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.header}>
      <div className={classes.leftBlock}>
        <LogoIcon className={classes.icon} />
        <Typography variant='subtitle1'>МРС</Typography>
      </div>
      <div className={classes.rigthBlock}>
        <Typography variant='body1' component={Link} to={To.platform} className={classes.text}>
          {LINKS.mrsPlatrform}
        </Typography>
        <Typography variant='body1' className={classes.text}>
          {LINKS.stroyControl}
        </Typography>
        <Typography variant='body1' component={Link} to={To.about} className={classes.text}>
          О нас
        </Typography>
        {/* <Typography variant='body1'>{LINKS.partners}</Typography> */}
      </div>
      <MenuIcon className={classes.menuIcon} />
    </div>
  )
}

export default Header

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 72,
    width: '100%',
    maxWidth: MAX_WIDTH_CONTAINER,
    '@media only screen and (max-width: 965px)': {
      marginRight: theme.spacing(10),
      marginLeft: theme.spacing(10),
      width: '92%',
    },
  },
  leftBlock: {
    display: 'flex',
    flexDirection: 'row',
    color: theme.palette.text.primary,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  rigthBlock: {
    display: 'none',
    '@media only screen and (min-width: 700px)': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: theme.spacing(10),
      color: theme.palette.text.secondary,
    },
  },
  text: {
    color: theme.palette.text.secondary,
  },
  menuIcon: {
    display: 'none',
    '@media only screen and (max-width: 700px)': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
}))
