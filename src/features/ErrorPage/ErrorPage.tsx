import { Typography, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { To } from '../../app/router/to'

const NotFound = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography variant='h3'>Ошибка 404</Typography>
      <Typography variant='body1' component={Link} to={To.main} className={classes.linkColor}>
        Вернуться на главную
      </Typography>
    </div>
  )
}

export default NotFound

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    flexDirection: 'column',
  },
  linkColor: {
    color: theme.palette.primary.main,
  },
}))
