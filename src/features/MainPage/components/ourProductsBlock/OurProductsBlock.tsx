import { Button, Link, Typography, makeStyles } from '@material-ui/core'
import { ArrowIcon, FourthImg, SecondImg, ThirdImg } from '../../../../app/assets/icons'
import { BUTTONS, OUR_PRODUCT_BLOCK } from '../../../../app/utils/constants'

const MAX_WIDTH_ITEM_TEXT = 1000

const OurProductsBlock = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Typography variant='h4'>Наши</Typography>
        <Typography variant='h4' className={classes.textColor}>
          &nbsp;продукты
        </Typography>
      </div>
      <div className={classes.itemContainer}>
        <div className={classes.itemText}>
          <Typography variant='h5' className={classes.itemHeader}>
            {OUR_PRODUCT_BLOCK.mrs.title}
          </Typography>
          <Typography variant='body1'>
            {OUR_PRODUCT_BLOCK.mrs.body} <Link href=''>№... (ссылка на PDF)</Link>.
          </Typography>
          <Button variant='text' className={classes.button}>
            <Typography variant='body1' className={classes.textColor}>
              {BUTTONS.more}
            </Typography>
            <ArrowIcon className={classes.icon} />
          </Button>
        </div>
        <SecondImg className={classes.imgStyle} />
      </div>
      <div className={classes.itemContainer}>
        <div className={classes.itemText}>
          <Typography variant='h5' className={classes.itemHeader}>
            {OUR_PRODUCT_BLOCK.pkSK.title}
          </Typography>
          <Typography variant='body1'>
            {OUR_PRODUCT_BLOCK.pkSK.body}
            <Link href=''>№... (ссылка на PDF)</Link>.
          </Typography>
          <Button variant='text' className={classes.button}>
            <Typography variant='body1' className={classes.textColor}>
              {BUTTONS.more}
            </Typography>
            <ArrowIcon className={classes.icon} />
          </Button>
        </div>
        <ThirdImg className={classes.imgStyle} />
      </div>
      {/* <div className={classes.itemContainer}>
        <div className={classes.itemText}>
          <Typography variant='h5' className={classes.itemHeader}>
            {OUR_PRODUCT_BLOCK.pkUSP.title}
          </Typography>
          <Typography variant='body1'>{OUR_PRODUCT_BLOCK.pkUSP.body}</Typography>
        </div>
        <FourthImg className={classes.imgStyle} />
      </div> */}
    </div>
  )
}

export default OurProductsBlock

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    paddingTop: theme.spacing(32),
    backgroundColor: theme.palette.background.paper,
    '@media only screen and (max-width: 700px)': {
      paddingTop: theme.spacing(16),
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
  itemContainer: {
    marginBottom: theme.spacing(24),
    '@media only screen and (max-width: 700px)': {
      marginBottom: theme.spacing(12),
    },
  },
  itemHeader: {
    marginBottom: theme.spacing(4),
  },
  itemText: {
    maxWidth: MAX_WIDTH_ITEM_TEXT,
  },
  imgStyle: {
    marginTop: theme.spacing(10),
    maxWidth: '100%',
    '@media only screen and (max-width: 700px)': {
      marginTop: theme.spacing(5),
      height: '200px',
    },
  },
  textColor: {
    color: theme.palette.primary.main,
  },
  button: {
    marginTop: theme.spacing(4),
  },
  icon: {
    marginRight: theme.spacing(3),
  },
}))
