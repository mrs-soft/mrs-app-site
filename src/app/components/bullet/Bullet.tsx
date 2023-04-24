import { Typography, makeStyles } from '@material-ui/core'
import { MailIcon } from '../../assets/icons'

interface IBulletProps {
  title: string
}

const Bullet = ({ title }: IBulletProps) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <MailIcon className={classes.icon} />
      <Typography variant='subtitle1'>{title}</Typography>
    </div>
  )
}

export default Bullet

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    maxWidth: 388,
    height: 72,
    padding: theme.spacing(6, 6, 6.5),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 5,
    background: theme.palette.background.default,
    '@media only screen and (max-width: 700px)': {
      padding: theme.spacing(3, 3, 3.5),
    },
  },
  icon: {
    marginRight: theme.spacing(4.5),
  },
}))
