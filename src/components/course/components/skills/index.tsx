import React, { FC } from 'react'
import cn from 'classnames'
import { useTheme } from 'utils/theme'
import { Course } from 'entities/courses/courses.types'
import DoneIcon from './icons/done.icon.svg'
import css from './styles.scss'

interface Props {
  course: Course
}
export const Skills: FC<Props> = ({ course }) => {
  const { theme } = useTheme()
  if (!course.skills.length) return null

  return (
    <div className={cn(css.skills, { [css.dark]: theme === 'dark' })}>
      <h3>Чему вы научитесь за этот курс</h3>

      <ul className={css.content}>
        {course.skills.map(skill => (
          <li key={skill} className={css.row}>
            <DoneIcon className={css.icon} />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}
