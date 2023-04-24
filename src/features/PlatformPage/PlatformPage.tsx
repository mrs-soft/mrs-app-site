import { makeStyles } from '@material-ui/core'
import FirstBlock from './components/firstBlock/FirstBlock'
import FunctionalBlock from './components/functionalBlock/FunctionalBlock'
import PriceBlock from './components/priceBlock/PriceBlock'
import AnswerBlock from './components/answerBlock/AnswerBlock'

const PlatformPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.mainContainer}>
      <FirstBlock />
      <FunctionalBlock />
      <PriceBlock />
      <AnswerBlock />
    </div>
  )
}

export default PlatformPage

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))
