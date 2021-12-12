import React from 'react'
import { useAppDispatch } from 'utils/store.util'
import { useAuthActions } from 'entities/auth/auth.slice'
import { Link } from 'ui-kit/link'
import { Input } from 'ui-kit/input'
import { Button } from 'ui-kit/button'
import UserIcon from './user.icon.svg'
import css from './styles.scss'

export const Signup = () => {
  const dispatch = useAppDispatch()
  const { signUp } = useAuthActions(dispatch)

  const handleClick = () => {
    signUp({
      firstName: 'Klark',
      phone: 79998394800,
      password: 'denchik1508',
      email: 'klark@luthor.corp'
    })
  }

  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <UserIcon className={css.avatar} />
        <h2 className={css.title}>Sign up</h2>
      </div>

      <form className={css.form}>
        <Input label='Name' fluid />
        <div className={css.raw}>
          <Input label='Email' type='email' fluid />
          <Input label='Phone' type='tel' fluid />
        </div>
        <Input label='Password' type='password' fluid />
        <div className={css.btn}>
          <Button onClick={handleClick} text='SIGN UP' fluid />
        </div>

        <Link linkTo='/login'>Already have an account?</Link>
      </form>
    </div>
  )
}
