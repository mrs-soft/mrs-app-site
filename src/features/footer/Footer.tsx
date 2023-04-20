import { Divider, Typography, makeStyles } from '@material-ui/core'
import { LogoIcon } from '../../app/assets/icons'
import { MAX_WIDTH_CONTAINER } from '../MainPage/components/firstBlock/FirstBlock'
import { FOOTER_BLOCK, LINKS } from '../../app/utils/constants'
import { To } from '../../app/router/to'
import { Link } from 'react-router-dom'

const MAX_HEIGHT_CONTAINER = 432

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.topBlock}>
        <div className={classes.leftBlock}>
          <LogoIcon className={classes.icon} />
          <Typography variant='subtitle1'>МРС</Typography>
        </div>
        <div className={classes.rightBlock}>
          <Typography variant='subtitle1' className={classes.otherColor}>
            {FOOTER_BLOCK.products}
          </Typography>
          <Typography variant='body1'>{LINKS.mrsPlatrform}</Typography>
          <Typography variant='body1'>{LINKS.stroyControl}</Typography>
        </div>
        <div className={classes.rightBlock}>
          <Typography variant='subtitle1' className={classes.otherColor}>
            {FOOTER_BLOCK.company}
          </Typography>
          <Typography variant='body1'>{LINKS.aboutUs}</Typography>
          {/* <Typography variant='body1'>{LINKS.partners}</Typography> */}
        </div>
        <div className={classes.rightBlock}>
          <Typography variant='subtitle1' className={classes.otherColor}>
            {FOOTER_BLOCK.resources}
          </Typography>
          <Typography variant='body1'>{FOOTER_BLOCK.pkStroyControl}</Typography>
          <Typography variant='body1'>{FOOTER_BLOCK.documentsMrs}</Typography>
        </div>
      </div>
      <Divider className={classes.divider} />
      <div className={classes.bottomBlock}>
        <Typography variant='body1'>{FOOTER_BLOCK.ooo}</Typography>
        <Divider className={classes.dividerVertical} orientation='vertical' />
        <Typography variant='body1' component={Link} to={To.privacy} className={classes.linkColor}>
          {FOOTER_BLOCK.privacyPolicy}
        </Typography>
      </div>
    </div>
  )
}

export default Footer

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    padding: theme.spacing(32, 0, 32),
    maxHeight: MAX_HEIGHT_CONTAINER,
    background: theme.palette.background.default,
  },
  topBlock: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: MAX_WIDTH_CONTAINER,
    width: '100%',
    '@media only screen and (max-width: 490px)': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: theme.spacing(10),
    },
  },
  bottomBlock: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    maxWidth: MAX_WIDTH_CONTAINER,
    width: '100%',
    gap: theme.spacing(4),
    color: theme.palette.text.secondary,
    '@media only screen and (max-width: 490px)': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: theme.spacing(4),
    },
  },
  leftBlock: {
    display: 'flex',
    flexDirection: 'row',
    color: theme.palette.text.primary,
  },
  rightBlock: {
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.text.secondary,
    gap: theme.spacing(2),
  },
  otherColor: {
    color: theme.palette.text.primary,
  },
  linkColor: {
    color: theme.palette.text.secondary,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(8, 0, 8),
    width: '100%',
    maxWidth: MAX_WIDTH_CONTAINER,
  },
  dividerVertical: {
    height: 19,
  },
}))
