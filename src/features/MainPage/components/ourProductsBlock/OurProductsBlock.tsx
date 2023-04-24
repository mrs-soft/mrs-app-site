import { Button, Link, Typography, makeStyles } from '@material-ui/core'
import { ArrowIcon, SecondImg, ThirdImg } from '../../../../app/assets/icons'
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
          <Typography variant='body1'>{OUR_PRODUCT_BLOCK.mrs.body} </Typography>
          <Typography variant='body1'>
            Зарегистрирован в реестре отечественного ПО <Link href=''>№... (ссылка на PDF)</Link>.
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
          <Typography variant='body1'>{OUR_PRODUCT_BLOCK.pkSK.body}</Typography>
          <Typography variant='body1'>
            Зарегистрирован в реестре отечественного ПО <Link href=''>№... (ссылка на PDF)</Link>.
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
    marginBottom: theme.spacing(16),
    flexDirection: 'row',
    maxWidth: 1200,
    justifyContent: 'flex-start',
    width: '100%',
    '@media only screen and (max-width: 965px)': {
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(10),
      width: '91%',
    },
    '@media only screen and (max-width: 700px)': {
      marginBottom: theme.spacing(10),
      marginLeft: theme.spacing(6),
      marginRight: theme.spacing(6),
    },
    '@media only screen and (max-width: 420px)': {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
  },
  itemContainer: {
    marginBottom: theme.spacing(24),
    '@media only screen and (max-width: 965px)': {
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(10),
    },
    '@media only screen and (max-width: 700px)': {
      marginBottom: theme.spacing(12),
      marginLeft: theme.spacing(6),
      marginRight: theme.spacing(6),
    },
    '@media only screen and (max-width: 420px)': {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
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
    '@media only screen and (max-width: 965px)': {
      marginTop: theme.spacing(10),
      height: '495px',
    },
    '@media only screen and (max-width: 700px)': {
      height: '332px',
    },
    '@media only screen and (max-width: 420px)': {
      height: '210px',
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
