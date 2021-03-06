import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { getNextLec } from 'utils/lesson'
import { getLecCount } from 'utils/course.util'
import { Lesson as TLesson } from 'entities/lessons/lessons.types'
import PlayListIcon from './icons/playlist.icon.svg'
import css from './styles.scss'

interface Props {
  lesson: TLesson
}
export const Lesson: FC<Props> = ({ lesson }) => {
  const { course } = lesson
  const { slug, title, image } = course
  const nextLec = getNextLec(lesson)

  const link = `course/${slug}/learn/${nextLec.id}`

  return (
    <Link to={link}>
      <div className={css.lesson}>
        <div className={css.cover}>
          <img src={image} className={css.image} alt='preview' />
          <div className={css.countWrapper}>
            {`${lesson.completedLectures.length} / ${getLecCount(course)}`}
            <PlayListIcon className={css.countIcon} />
          </div>

          <div className={css.playWrapper}>Начать курс</div>
          <div className={css.progress} style={{ width: `${lesson.progress * 100}%` }} />
        </div>
        <h6 className={css.courseTitle}>{title}</h6>
      </div>
    </Link>
  )
}
