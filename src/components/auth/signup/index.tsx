import React, { RefObject } from 'react'
import { useIMask } from 'react-imask'
import { useAppDispatch } from 'utils/store.util'
import { useAuthActions } from 'entities/auth/auth.slice'
import { Link } from 'ui-kit/link'
import { Input } from 'ui-kit/input'
import { Button } from 'ui-kit/button'
import { useForm } from 'utils/form'
import UserIcon from './user.icon.svg'
import css from './styles.scss'

export const Signup = () => {
  const dispatch = useAppDispatch()
  const { signUp } = useAuthActions(dispatch)
  const { ref } = useIMask({ mask: '+{7} (000) 000-00-00' })
  const { values, setValue } = useForm({
    firstName: '',
    email: '',
    phone: '',
    password: ''
  })

  const handleClick = () =>
    signUp({
      ...values,
      phone: values.phone.replace(/\D/g, '')
    })

  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <UserIcon className={css.avatar} />
        <h2 className={css.title}>Создать аккаунт</h2>
      </div>

      <form className={css.form} autoComplete='OFF'>
        <Input onChange={setValue} name='firstName' label='Имя' fluid />
        <div className={css.raw}>
          <Input onChange={setValue} name='email' label='Email' type='email' fluid />
          <Input
            inputRef={ref as RefObject<HTMLInputElement>}
            onChange={setValue}
            name='phone'
            label='Телефон'
            type='tel'
            fluid
          />
        </div>
        <Input label='Пароль' name='password' type='password' onChange={setValue} fluid />
        <div className={css.btn}>
          <Button onClick={handleClick} text='Создать аккаунт' fluid />
        </div>

        <Link linkTo='/login'>Уже есть аккаунт?</Link>
      </form>
    </div>
  )
}
