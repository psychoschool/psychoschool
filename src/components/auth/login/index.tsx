import React from 'react'
import { Input } from 'ui-kit/input'
import { Button } from 'ui-kit/button'
import image from './avatar.png'
import UserIcon from './user.icon.svg'
import css from './styles.scss'
import { Checkbox } from 'ui-kit/checkbox'

export const Login = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <UserIcon className={css.avatar} />
        <h2 className={css.title}>Sign in</h2>
      </div>
      <form className={css.form}>
        <Input label='Username' fluid />
        <Input label='password' type='password' fluid />
        <Checkbox label='Запомнить меня' />

        <div className={css.btn}>
          <Button text='SIGN IN' fluid />
        </div>
      </form>
    </div>
  )
}
