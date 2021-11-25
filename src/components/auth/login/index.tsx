import React from 'react'
import { Input } from 'ui-kit/input'
import { Button } from 'ui-kit/button'
import { Checkbox } from 'ui-kit/checkbox'
import UserIcon from './user.icon.svg'
import css from './styles.scss'

export const Login = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <UserIcon className={css.avatar} />
        <h2 className={css.title}>Sign in</h2>
      </div>
      <form className={css.form}>
        <Input label='Email' type='email' fluid />
        <Input label='Password' type='password' fluid />
        <Checkbox label='Запомнить меня' />

        <div className={css.btn}>
          <Button text='SIGN IN' fluid />
        </div>
      </form>
    </div>
  )
}
