import React, { FC } from 'react'
import { Button } from 'ui-kit/button'
import { Course } from 'entities/courses/courses.types'
import { selectIsTablet } from 'entities/ui/screen/screen.selector'
import { useAppSelector } from 'utils/store.util'
import css from './styles.scss'

interface Props {
  course: Course
}
export const SmallCard: FC<Props> = ({ course }) => {
  const isTablet = useAppSelector(selectIsTablet)
  const size = isTablet ? 'medium' : 'small'

  return (
    <div className={css.card}>
      <h3 className={css.title}>{course.title}</h3>
      <p className={css.price}>Бесплатный</p>

      <Button text='Начать курс' size={size} />
    </div>
  )
}
