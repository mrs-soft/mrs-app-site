import { Typography, makeStyles } from '@material-ui/core'
import FormFeedback from './FormFeedback'

const MAX_WIDTH_BLOCK = 656

const PriceBlock = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.textBlock}>
        <div className={classes.title}>
          <Typography variant='h4' className={classes.textColor}>
            Цены
          </Typography>
          <Typography variant='h4'>&nbsp;и тарифные планы</Typography>
        </div>
        <div>
          <Typography variant='body1'>
            «МРС Платформа 1.0» — это программное обеспечение для цифровизации бизнес-процессов и документооборота в
            организациях, в том числе в компаниях строительной отрасли. С её помощью можно гибко настраивать рабочие
            сценарии, чтобы они решали индивидуальные проблемы бизнеса.
          </Typography>
        </div>
      </div>
      <FormFeedback />
    </div>
  )
}

export default PriceBlock

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap: theme.spacing(16),
    padding: theme.spacing(32, 0, 32),
    '@media only screen and (max-width: 1200px)': {
      width: '90%',
    },
    '@media only screen and (max-width: 965px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
    '@media only screen and (max-width: 700px)': {
      padding: theme.spacing(16, 0, 16),
    },
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(16),
    flexDirection: 'row',
    '@media only screen and (max-width: 700px)': {
      marginBottom: theme.spacing(8),
    },
  },
  textColor: {
    color: theme.palette.primary.main,
  },
  textBlock: {
    maxWidth: MAX_WIDTH_BLOCK,
  },
}))
