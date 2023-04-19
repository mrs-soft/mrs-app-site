import { Route, Routes } from 'react-router-dom'
import { createStyles, makeStyles } from '@material-ui/core'
import { To } from 'app/router/to'
import MainPage from '../../features/MainPage/MainPage'

const MainRouter = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Routes>
        <Route path={To.main} element={<MainPage />} />
      </Routes>
    </div>
  )
}

export default MainRouter

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      margin: 0,
      backgroundColor: theme.palette.background.default,
    },
  }),
)
