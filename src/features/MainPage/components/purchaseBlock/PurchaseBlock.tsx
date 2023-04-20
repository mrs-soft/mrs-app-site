import { Button, Typography, makeStyles } from '@material-ui/core'
import { BUTTONS, PURCHASE_BLOCK } from '../../../../app/utils/constants'

const PurchaseBlock = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <div className={classes.textTitle}>
          <Typography variant='h4'>Покупка ПО и</Typography>
          <Typography variant='h4' className={classes.textColor}>
            разработка прикладных решений
          </Typography>
        </div>
        <Typography variant='body1'>{PURCHASE_BLOCK.body}</Typography>
      </div>
      <Button variant='text' className={classes.button}>
        <Typography variant='body1' className={classes.textColor}>
          {BUTTONS.more}
        </Typography>
      </Button>
    </div>
  )
}

export default PurchaseBlock

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    padding: theme.spacing(32, 0, 32),
    backgroundColor: theme.palette.background.paper,
    maxHeight: 472,
  },
  textColor: {
    color: theme.palette.primary.main,
  },
  button: {
    marginTop: theme.spacing(10),
  },
  textContainer: {
    maxWidth: 600,
    textAlign: 'center',
  },
  textTitle: {
    marginBottom: theme.spacing(6),
  },
}))
