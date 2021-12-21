import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Course } from 'entities/courses/courses.types'
import PlayListIcon from './icons/playlist.icon.svg'
import css from './styles.scss'

interface Props {
  course: Course
}
export const FreeCourse: FC<Props> = ({ course }) => {
  const { id, title, image, sections } = course

  return (
    <Link to={`course/${id}`}>
      <div className={css.course}>
        <div className={css.cover}>
          <img src={image} className={css.image} alt='preview' />
          <div className={css.countWrapper}>
            {12}
            <PlayListIcon className={css.countIcon} />
          </div>

          <div className={css.playWrapper}>Начать курс</div>
        </div>
        <h6 className={css.courseTitle}>{title}</h6>
      </div>
    </Link>
  )
}
