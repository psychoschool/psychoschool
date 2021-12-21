import React, { FC } from 'react'
import cn from 'classnames'
import { Button } from 'ui-kit/button'
import { Course } from 'entities/courses/courses.types'
import { useTheme } from 'utils/theme'
import { getLecCount } from './utils'
import css from './styles.scss'

interface Props {
  course: Course
}
export const LargeCard: FC<Props> = ({ course }) => {
  const { theme } = useTheme()
  return (
    <div className={cn(css.courseCard, { [css.dark]: theme === 'dark' })}>
      <img className={css.cardImage} src={course.image} alt='...' />
      <div className={css.cardBody}>
        <p className={css.price}>Бесплатный</p>
        <ul className={css.cardList}>
          <li>Лекций: {getLecCount(course)}</li>
          <li>Автор: {course.author.firstName}</li>
        </ul>
        <Button text='Начать курс' fluid />
      </div>
    </div>
  )
}
