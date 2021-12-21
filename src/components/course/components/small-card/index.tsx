import React, { FC } from 'react'
import { Course } from 'entities/courses/courses.types'
import { Button } from 'ui-kit/button'
import css from './styles.scss'

interface Props {
  course: Course
}
export const SmallCard: FC<Props> = ({ course }) => {
  return (
    <div className={css.card}>
      <h3 className={css.title}>{course.title}</h3>
      <p className={css.price}>Бесплатный</p>

      <Button text='Начать курс' fluid />
    </div>
  )
}
