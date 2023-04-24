import { Accordion, AccordionDetails, AccordionSummary, Typography, makeStyles } from '@material-ui/core'
import { CloseIcon } from '../../app/assets/icons'
import { useState } from 'react'

const MAX_WIDTH_TEXT = 948
const MAX_WIDTH_CONTAINER_PRIVACY = 800

const AboutUsPage = () => {
  const classes = useStyles()

  const [expanded, setExpanded] = useState<string | false>('panel1')

  const handleChange = (panel: string) => (event: any, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div className={classes.aboutContainer}>
      <div className={classes.title}>
        <Typography variant='h4'>О нас</Typography>
      </div>
      <div className={classes.paragraphBlock}>
        <Typography variant='h5'>Описание</Typography>
        <Typography variant='body1'>
          ООО «Мобильные решения для строительства» это российская IT-компания. Мы разрабатываем продукты в области
          автоматизации строительства и промышленности с 2015 года. С августа 2017 года мы аккредитованы Минцифры как
          отечественный разработчик ПО. В декабре 2020 года мы стали резидентами «Сколково» в ИТ-сфере.
        </Typography>
      </div>
      <div className={classes.paragraphBlock}>
        <Typography variant='h5'>Реквизиты</Typography>
        <Typography variant='subtitle1'>Название организации</Typography>
        <Typography variant='body1'>
          ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «МОБИЛЬНЫЕ РЕШЕНИЯ ДЛЯ СТРОИТЕЛЬСТВА»
        </Typography>
        <Typography variant='subtitle1'>ИНН/КПП</Typography>
        <Typography variant='body1'>1215186406/121501001</Typography>
        <Typography variant='subtitle1'>Дата регистрации</Typography>
        <Typography variant='body1'>27.01.2015</Typography>
        <Typography variant='subtitle1'>Юридический адрес</Typography>
        <Typography variant='body1'>
          424000, Республика Марий Эл, город Йошкар-Ола, ул. Карла Маркса, д. 109б, офис 506
        </Typography>
        <Typography variant='subtitle1'>Руководитель</Typography>
        <Typography variant='body1'>Генеральный директор Шалагин Павел Сергеевич</Typography>
        <Typography variant='subtitle1'>Почта</Typography>
        <Typography variant='body1'>enquiry@mrsapp.ru</Typography>
        <Typography variant='subtitle1'>Телефон</Typography>
        <Typography variant='body1'>8 (800) 500-13-25</Typography>
      </div>
      <div className={classes.paragraphBlock}>
        <Typography variant='h5'>Виды деятельности</Typography>
        <Typography variant='body1'>
          ООО «Мобильные решения для строительства» осуществляет следующие виды деятельности в области информационных
          технологий:
        </Typography>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} defaultExpanded>
          <AccordionSummary aria-controls='panel1d-content' id='panel1d-header' expandIcon={<CloseIcon />}>
            <Typography variant='subtitle1'>1.01</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='body1'>
              Проектирование, разработка, адаптация, модификация, модернизация, обновление, установка, интеграция,
              настройка, конфигурирование, внедрение, сопровождение, тестирование, испытания, техническая поддержка
              программ для ЭВМ.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} defaultExpanded>
          <AccordionSummary aria-controls='panel2d-content' id='panel2d-header' expandIcon={<CloseIcon />}>
            <Typography variant='subtitle1'>1.05</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='body1'>
              Проектирование и(или) иная деятельность, а также оказание консультационных и экспертных услуг в отношении
              сайтов или страниц сайтов в информационно-телекоммуникационной сети, включая
              информационно-телекоммуникационную сеть «Интернет».
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} defaultExpanded>
          <AccordionSummary aria-controls='panel2d-content' id='panel2d-header' expandIcon={<CloseIcon />}>
            <Typography variant='subtitle1'>2.01</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='body1'>
              Реализация программ для ЭВМ (включая их обновления и изменения) любым способом и по любому виду договора,
              в том числе путем отчуждения прав, предоставления прав (лицензирования), предоставления удаленного доступа
              посредством информационно-телекоммуникационных сетей, включая Интернет.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} defaultExpanded>
          <AccordionSummary aria-controls='panel2d-content' id='panel2d-header' expandIcon={<CloseIcon />}>
            <Typography variant='subtitle1'>4.01</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='body1'>
              Комплексное обслуживание ИТ-инфраструктуры, организация удаленного доступа заказчика к ИТ-инфраструктуре,
              включая: администрирование прав доступа, учетной записи пользователей, аппаратной платформы
              ИТ-инфраструктуры, баз данных, систем мониторинга, выполнение системных настроек, получение обновлений, их
              установка и(или) сопровождение установки; обеспечение сетевой доступности; резервное копирование;
              выполнение плановых и внеплановых восстановлений; осуществление миграции (переноса) данных.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} defaultExpanded>
          <AccordionSummary aria-controls='panel2d-content' id='panel2d-header' expandIcon={<CloseIcon />}>
            <Typography variant='subtitle1'>8.01</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='body1'>
              Оказание услуг по оценке потребностей, сбору технических требований, подготовке и реализации проектов
              автоматизации и/или цифровизации процессов и производств, иных процессов цифровой трансформации.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default AboutUsPage

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    maxWidth: MAX_WIDTH_CONTAINER_PRIVACY,
    marginTop: theme.spacing(32),
    display: 'flex',
    flexDirection: 'column',
    '@media only screen and (max-width: 900px)': {
      width: '90%',
    },
    '@media only screen and (max-width: 700px)': {
      marginTop: theme.spacing(16),
    },
  },
  title: {
    maxWidth: MAX_WIDTH_TEXT,
    display: 'flex',
    flexDirection: 'row',
    '@media only screen and (max-width: 700px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  paragraphBlock: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    gap: theme.spacing(6),
    marginTop: theme.spacing(16),
  },
}))
