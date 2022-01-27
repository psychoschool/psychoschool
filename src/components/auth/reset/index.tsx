import React from 'react'
import { useParams } from 'react-router'
import { Input } from 'ui-kit/input'
import { Button } from 'ui-kit/button'
import { useForm } from 'utils/form'
import { useAppDispatch } from 'utils/store.util'
import { useAuthActions } from 'entities/auth/auth.slice'
import { Link } from 'ui-kit/link'
import UserIcon from './user.icon.svg'
import css from './styles.scss'

export const Reset = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const { reset } = useAuthActions(dispatch)
  const { values, setValue } = useForm({
    password: ''
  })

  const handleSignIn = () =>
    reset({
      userId: params.userId as string,
      token: params.token as string,
      password: values.password
    })

  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <UserIcon className={css.avatar} />
        <h2 className={css.title}>Введите новый пароль</h2>
      </div>
      <form className={css.form} autoComplete='off'>
        <Input label='Пароль' name='password' type='password' onChange={setValue} fluid />

        <div className={css.btn}>
          <Button text='Обновить пароль' onClick={handleSignIn} fluid />
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
