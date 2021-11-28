import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Course } from 'entities/courses/courses.type'
import PlayListIcon from './icons/playlist.icon.svg'
import css from './styles.scss'

interface Props {
  course: Course
}
export const FreeCourse: FC<Props> = ({ course }) => {
  const { id, title, image, lectures } = course

  return (
    <Link to={`course/${id}`}>
      <div className={css.course}>
        <div className={css.cover}>
          <img src={image} className={css.image} alt='preview' />
          <div className={css.countWrapper}>
            {lectures}
            <PlayListIcon className={css.countIcon} />
          </div>

          <div className={css.playWrapper}>Начать курс</div>
        </div>
        <h6 className={css.courseTitle}>{title}</h6>
      </div>
    </Link>
  )
}
