import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'utils/store.util'
import { selectAuth } from 'entities/auth/auth.selector'
import image from './nowere.png'
import css from './styles.scss'

const AuthPage = () => {
  const navigate = useNavigate()
  const { authorized } = useAppSelector(selectAuth)

  useEffect(() => {
    if (authorized) navigate('/')
  }, [authorized, navigate])

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
