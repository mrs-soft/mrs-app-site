import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  OutlinedInput,
  TextField,
  makeStyles,
} from '@material-ui/core'
import React, { useState } from 'react'
import { BUTTONS } from '../../../../app/utils/constants'

const FormFeedback = () => {
  const classes = useStyles()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [nameError, setNameError] = useState(false)

  const handleSubmit = (event: any) => {
    event?.preventDefault()

    setEmailError(false)
    setPasswordError(false)

    if (email === '') {
      setEmailError(true)
    }
    if (number === '') {
      setPasswordError(true)
    }
    if (name === '') {
      setNameError(true)
    }

    if (email && number) {
      console.log(email, number, name)
    }
  }

  return (
    <form autoComplete='off' onSubmit={handleSubmit} className={classes.formContainer}>
      <FormControl className={classes.input}>
        <FormLabel required>Имя</FormLabel>
        <OutlinedInput
          placeholder='Введите ваше имя'
          onChange={(e) => setName(e.target.value)}
          color='secondary'
          type='form'
          fullWidth
          value={name}
          error={nameError}
        />
      </FormControl>
      <FormControl className={classes.input}>
        <FormLabel required>E-mail</FormLabel>
        <OutlinedInput
          placeholder='Введите e-mail'
          onChange={(e) => setEmail(e.target.value)}
          color='secondary'
          type='email'
          fullWidth
          value={email}
          error={emailError}
        />
      </FormControl>
      <FormControl className={classes.input}>
        <FormLabel required>Номер телефона</FormLabel>
        <OutlinedInput
          placeholder='Введите номер телефона'
          onChange={(e) => setNumber(e.target.value)}
          color='secondary'
          type='tel'
          value={number}
          error={passwordError}
          fullWidth
        />
      </FormControl>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label='Даю согласие на обработку персональных данных' />
        <FormControlLabel control={<Checkbox />} label='Согласен с политикой конфиденциальности ' />
      </FormGroup>
      <Button variant='contained' type='submit'>
        {BUTTONS.moreIntegration}
      </Button>
    </form>
  )
}

export default FormFeedback

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    maxHeight: 552,
    maxWidth: 480,
    padding: theme.spacing(6),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 5,
    gap: theme.spacing(6),
    backgroundColor: theme.palette.background.paper,
    '@media only screen and (max-width: 700px)': {
      padding: theme.spacing(4),
    },
  },
  input: {
    width: '100%',
  },
}))
