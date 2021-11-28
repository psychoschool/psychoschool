import React, { FC, useContext } from 'react'
import { ThemeContext } from 'utils/theme'
import LightIcon from './icons/light-mode.icon.svg'
import DarkIcon from './icons/dark-mod.icon.svg'
import LogOutIcon from './icons/logout.icon.svg'
import PersonIcon from './icons/person.icon.svg'
import css from './styles.scss'
import cn from 'classnames'

interface Props {
  onSelect: () => void
}
export const Menu: FC<Props> = ({ onSelect }) => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme(theme == 'dark' ? 'light' : 'dark')
    onSelect()
  }

  return (
    <ul className={css.wrapper}>
      <li className={css.item} onClick={onSelect}>
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

      <li className={css.item} onClick={onSelect}>
        <LogOutIcon className={css.icon} />
        Выйти
      </li>
    </ul>
  )
}
