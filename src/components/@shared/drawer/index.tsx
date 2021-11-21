import React from 'react'
import { Outlet } from 'react-router-dom'
import logo from './icons/logo.png'
import css from './styles.scss'

export const Drawer = () => {
  return (
    <>
      <header className={css.wrapper}>
        <img className={css.logo} src={logo} alt='logo' />
        <h4 className={css.title}>Platform</h4>

        <ul className={css.menu}>
          <li>nav 1</li>
          <li>nav 2</li>
          <li>nav 3</li>
        </ul>
      </header>

      <main className={css.content}>
        <Outlet />
      </main>
    </>
  )
}
