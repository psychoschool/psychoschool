import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Course } from 'entities/courses/courses.types'
import { getLecCount } from 'utils/course.util'
import PlayListIcon from './icons/playlist.icon.svg'
import css from './styles.scss'

interface Props {
  type: 'course' | 'lesson'
  course: Course
}
export const FreeCourse: FC<Props> = ({ course, type }) => {
  const { url, title, image } = course
  const link = type === 'course' ? `course/${url}` : `course/${url}/learn`

  return (
    <Link to={link}>
      <div className={css.course}>
        <div className={css.cover}>
          <img src={image} className={css.image} alt='preview' />
          <div className={css.countWrapper}>
            {getLecCount(course)}
            <PlayListIcon className={css.countIcon} />
          </div>

          <div className={css.playWrapper}>Начать курс</div>
        </div>
        <h6 className={css.courseTitle}>{title}</h6>
      </div>
    </Link>
  )
}
