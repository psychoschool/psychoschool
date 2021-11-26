import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import cn from 'classnames'
import { ThemeContext } from 'utils/theme'
import LightIcon from './icons/light-mode.icon.svg'
import DarkIcon from './icons/dark-mod.icon.svg'
import logo from './icons/logo.png'
import css from './styles.scss'

export const Drawer = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme(theme == 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <header className={cn(css.wrapper, { [css.dark]: theme === 'dark' })}>
        <Link to='/' className={css.link}>
          <img className={css.logo} src={logo} alt='logo' />
          <h4 className={css.title}>Platform</h4>
        </Link>

        <button onClick={toggleTheme}>{theme === 'dark' ? <DarkIcon /> : <LightIcon />}</button>
      </header>

      <main className={css.content}>
        <Outlet />
      </main>
    </>
  )
}
