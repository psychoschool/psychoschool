import React from 'react'
import { Input } from 'ui-kit/input'
import { Button } from 'ui-kit/button'
import { Checkbox } from 'ui-kit/checkbox'
import { useForm } from 'utils/form'
import { useAppDispatch } from 'utils/store.util'
import { useAuthActions } from 'entities/auth/auth.slice'
import { Link } from 'ui-kit/link'
import UserIcon from './user.icon.svg'
import { validation } from './validation'
import css from './styles.scss'

export const Login = () => {
  const dispatch = useAppDispatch()
  const { signIn } = useAuthActions(dispatch)
  const { values, setValue, errors, isValid } = useForm({ email: '', password: '' }, validation)

  const handleSignIn = () => signIn(values)

  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <UserIcon className={css.avatar} />
        <h2 className={css.title}>Войти</h2>
      </div>
      <form className={css.form}>
        <Input onChange={setValue} name='email' label='Email' type='email' invalid={!errors.email?.isValid} fluid />
        <Input
          label='Пароль'
          name='password'
          type='password'
          onChange={setValue}
          invalid={!errors.password?.isValid}
          fluid
        />
        <Checkbox size='small' label='Запомнить меня' />
        <div className={css.btn}>
          <Button disabled={!isValid} text='Войти' onClick={handleSignIn} fluid />
        </div>

        <div className={css.help}>
          <Link size='small' linkTo='/login'>
            Забыли пароль?
          </Link>
          <Link size='small' linkTo='/signup'>
            Создать аккаунт?
          </Link>
        </div>
      </form>
    </div>
  )
}
