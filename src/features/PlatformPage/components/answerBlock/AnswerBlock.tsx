import { Accordion, AccordionDetails, AccordionSummary, Typography, makeStyles } from '@material-ui/core'
import { useState } from 'react'
import { CloseIcon } from '../../../../app/assets/icons'

const MAX_WIDTH_BLOCK = 800

const AnswerBlock = () => {
  const classes = useStyles()

  const [expanded, setExpanded] = useState<string | false>('panel1')

  const handleChange = (panel: string) => (event: any, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div className={classes.container}>
      <div className={classes.textBlock}>
        <div className={classes.title}>
          <Typography variant='h4' className={classes.textColor}>
            Ответы
          </Typography>
          <Typography variant='h4'>&nbsp; на вопросы</Typography>
        </div>
        <div className={classes.bottomForBlock}>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} defaultExpanded>
            <AccordionSummary aria-controls='panel1d-content' id='panel1d-header' expandIcon={<CloseIcon />}>
              <Typography variant='subtitle1'>Как установить и пользоваться платформой?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1'>
                Программное обеспечение распространяется в виде интернет-сервиса, специальные действия по установке ПО
                на стороне пользователя не требуются. Документация по эксплуатации продукта доступна .
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} defaultExpanded>
            <AccordionSummary aria-controls='panel2d-content' id='panel2d-header' expandIcon={<CloseIcon />}>
              <Typography variant='subtitle1'>Какие системные требования?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body1'>
                ПО совместимо со следующими операционными системами, внесёнными в реестр российского программного
                обеспечения: Astra Linux Common Edition (рег. № 4433), Linux: базовая настройка, дистрибутивы Debian и
                CentOS (рег. № 6273).
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default AnswerBlock

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
  bottomForBlock: {
    marginBottom: theme.spacing(16),
  },
}))
