import React, { FC } from 'react'
import { Course } from 'entities/courses/courses.types'
import DoneIcon from './icons/done.icon.svg'
import css from './styles.scss'

interface Props {
  course: Course
}
export const Skills: FC<Props> = ({ course }) => {
  if (!course.skills.length) return null

  return (
    <div className={css.skills}>
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
