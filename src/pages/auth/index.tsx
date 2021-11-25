import React from 'react'
import { Outlet, useLocation } from 'react-router'
import image from './nowere.png'
import css from './styles.scss'

const AuthPage = () => {
  const { pathname } = useLocation()

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
