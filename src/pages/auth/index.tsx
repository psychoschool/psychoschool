import React from 'react'
import { Outlet } from 'react-router'
import image from './nowere.png'
import css from './styles.scss'

const AuthPage = () => {
  return (
    <div className={css.wrapper}>
      <img className={css.image} src={image} alt='...' />

      <div className={css.form}>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthPage
