import React, { FC } from 'react'
import cn from 'classnames'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'utils/theme'
import { useAppDispatch, useAppSelector } from 'utils/store.util'
import { selectAuth } from 'entities/auth/auth.selector'
import { useAuthActions } from 'entities/auth/auth.slice'
import LightIcon from './icons/light-mode.icon.svg'
import DarkIcon from './icons/dark-mod.icon.svg'
import LogOutIcon from './icons/logout.icon.svg'
import PersonIcon from './icons/person.icon.svg'
import css from './styles.scss'

interface Props {
  onSelect: () => void
}
export const Menu: FC<Props> = ({ onSelect }) => {
  const [theme, setTheme] = useTheme()
  const { authorized } = useAppSelector(selectAuth)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { signOut } = useAuthActions(dispatch)

  const toggleTheme = () => {
    setTheme(theme == 'dark' ? 'light' : 'dark')
    onSelect()
  }

  const handleLogin = () => {
    if (!authorized) navigate('/login')
    onSelect()
  }

  const handleLogout = () => {
    signOut()
    onSelect()
  }

  return (
    <ul className={css.wrapper}>
      <li className={css.item} onClick={handleLogin}>
        <div className={cn(css.avatar, { [css.dark]: theme === 'dark' })}>
          <PersonIcon className={css.avatarIcon} />
        </div>
        Профиль
      </li>

      <hr className={css.divider} />

      <li className={css.item} onClick={toggleTheme}>
        {theme === 'dark' ? <DarkIcon className={css.icon} /> : <LightIcon className={css.icon} />}
        Тема
      </li>

      {authorized && (
        <li className={css.item} onClick={handleLogout}>
          <LogOutIcon className={css.icon} />
          Выйти
        </li>
      )}
    </ul>
  )
}
