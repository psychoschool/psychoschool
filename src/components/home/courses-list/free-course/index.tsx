import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Course } from 'entities/courses/courses.types'
import { getLecCount } from 'utils/course.util'
import PlayListIcon from './icons/playlist.icon.svg'
import css from './styles.scss'

interface Props {
  course: Course
}
export const FreeCourse: FC<Props> = ({ course }) => {
  const { slug, title, image } = course

  return (
    <Link to={`course/${slug}`}>
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
