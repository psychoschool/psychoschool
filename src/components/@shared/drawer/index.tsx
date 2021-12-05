import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import cn from 'classnames'
import { Popper } from 'ui-kit/popper'
import { ThemeContext } from 'utils/theme'
import { useAppDispatch } from 'utils/store.util'
import { useAuthActions } from 'entities/auth/auth.slice'
import { Menu } from './menu'
import UserIcon from './icons/user.icon.svg'
import logo from './icons/logo.png'
import css from './styles.scss'

export const Drawer = () => {
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const { theme } = useContext(ThemeContext)

  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const { checkAuth } = useAuthActions(dispatch)

  useEffect(() => {
    checkAuth()
  }, [checkAuth, pathname])

  return (
    <>
      <header className={cn(css.wrapper, { [css.dark]: theme === 'dark' })}>
        <Link to='/' className={css.link}>
          <img className={css.logo} src={logo} alt='logo' />
          <h4 className={css.title}>Platform</h4>
        </Link>

        <Popper
          content={<Menu onSelect={handleClose} />}
          open={open}
          hasArrow
          hasShadow
          placement='bottom'
          align='right'
          onClickOutside={handleClose}
        >
          <button onClick={() => setOpen(!open)}>
            <UserIcon className={css.circleBtn} />
          </button>
        </Popper>
      </header>

      <main className={css.content}>
        <Outlet />
      </main>
    </>
  )
}
