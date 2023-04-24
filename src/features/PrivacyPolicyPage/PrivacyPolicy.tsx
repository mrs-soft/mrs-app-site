import { Typography, makeStyles } from '@material-ui/core'

const MAX_WIDTH_TEXT = 948
const MAX_WIDTH_CONTAINER_PRIVACY = 800

const PrivacyPolicyPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.privacyContainer}>
      <div className={classes.title}>
        <Typography variant='h4'>Политика&nbsp;</Typography>
        <Typography variant='h4' className={classes.textColor}>
          конфиденциальности
        </Typography>
      </div>
      <div className={classes.paragraphBlock}>
        <Typography variant='h5'>1. Общие положения</Typography>
        <Typography variant='body1'>
          1.1. В рамках настоящей Политики под персональной информацией Пользователя понимаются:{' '}
        </Typography>
        <Typography variant='body1'>
          1.1.1. Персональная информация, которую Пользователь предоставляет о себе самостоятельно при заполнении форм
          обратной связи (номер телефона, имя, прочая информация) или в процессе использования Сервисов, включая
          персональные данные Пользователя.
        </Typography>
        <Typography variant='body1'>
          1.1.2. Данные, которые автоматически передаются сервисам Сайта в процессе их использования с помощью
          установленного на устройстве Пользователя программного обеспечения, в том числе IP-адрес, данные файлов
          cookie, информация о браузере Пользователя (или иной программе, с помощью которой осуществляется доступ к
          сервисам), технические характеристики оборудования и программного обеспечения, используемых Пользователем,
          дата и время доступа к сервисам, адреса запрашиваемых страниц и иная подобная информация.
        </Typography>
        <Typography variant='body1'>1.1.3. Иная информация, оставленная Пользователем.</Typography>
        <Typography variant='body1'>
          1.1.4. Настоящая Политика конфиденциальности применяется только к Сайту mrspro.ru. ООО «Мобильные решения для
          строительства» и администрация сайта не контролируют и не несут ответственности за сайты третьих лиц, на
          которые Пользователь может перейти по ссылкам, доступным на сайте mrspro.ru.
        </Typography>
      </div>
      <div className={classes.paragraphBlock}>
        <Typography variant='h5'>2. Цели обработки персональной информации пользователей</Typography>
        <Typography variant='body1'>
          2.1. Сайт собирает и хранит только ту персональную информацию, которая необходима для предоставления сервисов
          или обработки запросов пользователей, за исключением случаев, когда законодательством предусмотрено
          обязательное хранение персональной информации в течение определенного законом срока.
        </Typography>
        <Typography variant='body1'>
          2.2. Персональную информацию Пользователя Сайт обрабатывает в следующих целях:
        </Typography>
        <Typography variant='body1'>
          2.2.1. Идентификации Пользователя, отправившего запрос на демонстрацию программных продуктов ООО «Мобильные
          решения для строительства».
        </Typography>
        <Typography variant='body1'>
          2.2.2. Предоставления Пользователю доступа к персонализированным ресурсам Сайта.
        </Typography>
        <Typography variant='body1'>
          2.2.3. Установления с Пользователем обратной связи, включая направление уведомлений, запросов, касающихся
          использования Сайта, оказания услуг, обработку запросов и заявок от Пользователя.
        </Typography>
        <Typography variant='body1'>
          2.2.4. Определения места нахождения Пользователя для обеспечения безопасности, предотвращения мошенничества.
        </Typography>
        <Typography variant='body1'>
          2.2.5. Подтверждения достоверности и полноты персональных данных, предоставленных Пользователем.
        </Typography>
        <Typography variant='body1'>
          2.2.6. Предоставления Пользователю эффективной клиентской и технической поддержки при возникновении проблем,
          связанных с использованием Сайта.
        </Typography>
        <Typography variant='body1'>2.2.7. Осуществления рекламной деятельности с согласия Пользователя.</Typography>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage

const useStyles = makeStyles((theme) => ({
  privacyContainer: {
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
  firstItem: {
    alignSelf: 'center',
  },
  textColor: {
    color: theme.palette.primary.main,
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
