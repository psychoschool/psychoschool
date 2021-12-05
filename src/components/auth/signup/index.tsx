import React from 'react'
import { Input } from 'ui-kit/input'
import { Button } from 'ui-kit/button'
import UserIcon from './user.icon.svg'
import css from './styles.scss'

export const Signup = () => {
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
          <Button text='SIGN UP' fluid />
        </div>
      </form>
    </div>
  )
}
