import { makeStyles } from '@material-ui/core'
import Header from './components/header/Header'
import FirstBlock from './components/firstBlock/FirstBlock'
import OurProductsBlock from './components/ourProductsBlock/OurProductsBlock'
import OurPartnersBlock from './components/ourPartnersBlock/OurPartnersBlock'
import PurchaseBlock from './components/purchaseBlock/PurchaseBlock'
import Footer from './components/footer/Footer'

const MainPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Header />
      <FirstBlock />
      <OurPartnersBlock />
      <OurProductsBlock />
      {/* <PurchaseBlock /> */}
      <Footer />
    </div>
  )
}

export default MainPage

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
}))
