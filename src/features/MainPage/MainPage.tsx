import { makeStyles } from '@material-ui/core'
import FirstBlock from './components/firstBlock/FirstBlock'
import OurProductsBlock from './components/ourProductsBlock/OurProductsBlock'
import OurPartnersBlock from './components/ourPartnersBlock/OurPartnersBlock'

const MainPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.mainContainer}>
      <FirstBlock />
      <OurPartnersBlock />
      <OurProductsBlock />
    </div>
  )
}

export default MainPage

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))
