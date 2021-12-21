import React, { FC } from 'react'
import cn from 'classnames'
import { useTheme } from 'utils/theme'
import { Course } from 'entities/courses/courses.types'
import DoneIcon from './icons/done.icon.svg'
import css from './styles.scss'

interface Props {
  course: Course
}
export const Skills: FC<Props> = () => {
  const { theme } = useTheme()
  return (
    <div className={cn(css.skills, { [css.dark]: theme === 'dark' })}>
      <h3>Чему вы научитесь за этот курс</h3>

      <ul className={css.content}>
        <li className={css.row}>
          <DoneIcon className={css.icon} />
          Самоогранизация
        </li>
        <li className={css.row}>
          <DoneIcon className={css.icon} />
          Самолечение
        </li>
        <li className={css.row}>
          <DoneIcon className={css.icon} />
          Много алкогля
        </li>
        <li className={css.row}>
          <DoneIcon className={css.icon} />
          Куча денег
        </li>
        <li className={css.row}>
          <DoneIcon className={css.icon} />
          Куча денег
        </li>
      </ul>
    </div>
  )
}
