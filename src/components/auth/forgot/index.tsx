import React from 'react'
import { Input } from 'ui-kit/input'
import { Button } from 'ui-kit/button'
import { useForm } from 'utils/form'
import { useAppDispatch } from 'utils/store.util'
import { useAuthActions } from 'entities/auth/auth.slice'
import { Link } from 'ui-kit/link'
import UserIcon from './user.icon.svg'
import css from './styles.scss'

export const Forgot = () => {
  const dispatch = useAppDispatch()
  const { forgot } = useAuthActions(dispatch)
  const { values, setValue } = useForm({
    email: ''
  })

  const handleSignIn = () => forgot(values.email)

  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <UserIcon className={css.avatar} />
        <h2 className={css.title}>Войти</h2>
      </div>
      <form className={css.form} autoComplete='off'>
        <Input onChange={setValue} name='email' label='Email' type='email' fluid />

        <div className={css.btn}>
          <Button text='Восстановить пароль' onClick={handleSignIn} fluid />
        </div>

        <div className={css.help}>
          <Link size='small' linkTo='/login'>
            Войти?
          </Link>
          <Link size='small' linkTo='/signup'>
            Создать аккаунт?
          </Link>
        </div>
      </form>
    </div>
  )
}
