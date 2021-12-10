import React, { useState } from 'react'
import { Input } from 'ui-kit/input'
import { Button } from 'ui-kit/button'
import { Checkbox } from 'ui-kit/checkbox'
import { useAppDispatch } from 'utils/store.util'
import { useAuthActions } from 'entities/auth/auth.slice'
import { Link } from 'ui-kit/link'
import UserIcon from './user.icon.svg'
import css from './styles.scss'

export const Login = () => {
  const dispatch = useAppDispatch()
  const { signIn } = useAuthActions(dispatch)
  const [email, setEmail] = useState('lionel@luthor.corp')
  const [password, setPassword] = useState('denchik1508')
  const handleSignIn = () => {
    signIn({ email, password })
  }

  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <UserIcon className={css.avatar} />
        <h2 className={css.title}>Sign in</h2>
      </div>
      <form className={css.form}>
        <Input label='Email' type='email' value={email} onValueChange={setEmail} fluid />
        <Input label='Password' type='password' value={password} onValueChange={setPassword} fluid />
        <Checkbox size='small' label='Запомнить меня' />
        <div className={css.btn}>
          <Button text='SIGN IN' onClick={handleSignIn} fluid />
        </div>

        <div className={css.help}>
          <Link size='small' linkTo='/login'>
            Forgot password?
          </Link>
          <Link size='small' linkTo='/signup'>
            Don&apos;t have an account? Sign Up
          </Link>
        </div>
      </form>
    </div>
  )
}
