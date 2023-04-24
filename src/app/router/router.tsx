import { Route, Routes } from 'react-router-dom'
import { createStyles, makeStyles } from '@material-ui/core'
import { To } from 'app/router/to'
import MainPage from '../../features/MainPage/MainPage'
import NotFound from '../../features/ErrorPage/ErrorPage'
import PrivacyPolicyPage from '../../features/PrivacyPolicyPage/PrivacyPolicy'
import Header from '../../features/header/Header'
import Footer from '../../features/footer/Footer'
import PlatformPage from '../../features/PlatformPage/PlatformPage'
import AboutUsPage from '../../features/aboutUsPage/AboutUsPage'

const MainRouter = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <Routes>
        <Route path={To.main} element={<MainPage />} />
        <Route path={To.privacy} element={<PrivacyPolicyPage />} />
        <Route path={To.platform} element={<PlatformPage />} />
        <Route path={To.about} element={<AboutUsPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default MainRouter

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 0,
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.default,
    },
  }),
)
