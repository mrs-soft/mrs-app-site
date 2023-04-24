import { Typography, makeStyles } from '@material-ui/core'
import Bullet from '../../../../app/components/bullet/Bullet'

const MAX_WIDTH_BLOCK = 800

const FunctionalBlock = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.textBlock}>
        <div className={classes.title}>
          <Typography variant='h4'>Функциональные</Typography>
          <Typography variant='h4' className={classes.textColor}>
            &nbsp;характеристики
          </Typography>
        </div>
        <div className={classes.bottomForBlock}>
          <div className={classes.itemContainer}>
            <Typography variant='body1'>
              «МРС Платформа 1.0» — это программное обеспечение для цифровизации бизнес-процессов и документооборота в
              организациях, в том числе в компаниях строительной отрасли. С её помощью можно гибко настраивать рабочие
              сценарии, чтобы они решали индивидуальные проблемы бизнеса.
            </Typography>
          </div>
          <div className={classes.itemContainer}>
            <Typography variant='body1'>
              Функционал ПО состоит из системных элементов, которые разрабатываются системными разработчиками по ходу
              всего жизненного цикла продукта, и конфигураций, которые создаются прикладными разработчиками на основе
              клиентских бизнес-процессов.
            </Typography>
          </div>
        </div>
        <div className={classes.itemContainer}>
          <div className={classes.titleContainer}>
            <Typography variant='h5'>Решаемые задачи</Typography>
          </div>
          <Typography variant='body1'>
            Функционал ПО состоит из системных элементов, которые разрабатываются системными разработчиками по ходу
            всего жизненного цикла продукта, и конфигураций, которые создаются прикладными разработчиками на основе
            клиентских бизнес-процессов.
          </Typography>
        </div>
        <div className={classes.bullet}>
          <Bullet title='Планирование работ' />
          <Bullet title='Работа с документацией' />
          <Bullet title='Приёмка работ' />
          <Bullet title='Ведение общего журнала работ' />
          <Bullet title='Фиксация замечаний' />
          <Bullet title='Входной контроль МТР' />
        </div>
      </div>
    </div>
  )
}

export default FunctionalBlock

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    padding: theme.spacing(32, 0, 32),
    backgroundColor: theme.palette.background.paper,
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
      flexDirection: 'column',
    },
  },
  itemContainer: {
    marginBottom: theme.spacing(6),
    '@media only screen and (max-width: 700px)': {
      marginBottom: theme.spacing(3),
    },
  },
  textColor: {
    color: theme.palette.primary.main,
  },
  textBlock: {
    maxWidth: MAX_WIDTH_BLOCK,
    '@media only screen and (max-width: 900px)': {
      width: '90%',
    },
  },
  titleContainer: {
    display: 'flex',
    alignSelf: 'flex-start',
    marginBottom: theme.spacing(6),
    '@media only screen and (max-width: 700px)': {
      marginBottom: theme.spacing(3),
    },
  },
  bottomForBlock: {
    marginBottom: theme.spacing(16),
  },
  bullet: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    maxHeight: 264,
    maxWidth: 800,
    width: '100%',
    marginTop: theme.spacing(4),
    flexWrap: 'wrap',
    gap: theme.spacing(6),
    '@media only screen and (max-width: 900px)': {
      maxHeight: 600,
    },
  },
}))
