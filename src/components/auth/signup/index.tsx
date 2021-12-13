import React from 'react'
import { useAppDispatch } from 'utils/store.util'
import { useAuthActions } from 'entities/auth/auth.slice'
import { Link } from 'ui-kit/link'
import { Input } from 'ui-kit/input'
import { Button } from 'ui-kit/button'
import { useForm } from 'utils/form'
import UserIcon from './user.icon.svg'
import { validation } from './validation'
import css from './styles.scss'

export const Signup = () => {
  const dispatch = useAppDispatch()
  const { signUp } = useAuthActions(dispatch)
  const { values, setValue, errors, isValid } = useForm(
    {
      firstName: '',
      email: '',
      phone: '',
      password: ''
    },
    validation
  )

  const handleClick = () => signUp(values)

  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <UserIcon className={css.avatar} />
        <h2 className={css.title}>Создать аккаунт</h2>
      </div>

      <form className={css.form}>
        <Input onChange={setValue} name='firstName' label='Имя' invalid={!errors.firstName?.isValid} fluid />
        <div className={css.raw}>
          <Input onChange={setValue} name='email' label='Email' type='email' invalid={!errors.email?.isValid} fluid />
          <Input onChange={setValue} name='phone' label='Телефон' type='tel' invalid={!errors.phone?.isValid} fluid />
        </div>
        <Input
          label='Пароль'
          name='password'
          type='password'
          onChange={setValue}
          invalid={!errors.password?.isValid}
          fluid
        />
        <div className={css.btn}>
          <Button onClick={handleClick} text='Создать аккаунт' disabled={!isValid} fluid />
        </div>

        <Link linkTo='/login'>Уже есть аккаунт?</Link>
      </form>
    </div>
  )
}
