import React, { FC } from 'react'
import cn from 'classnames'
import { useTheme } from 'utils/theme'
import { getLecCount } from 'utils/course.util'
import { displayTime } from 'utils/time.util'
import { Course } from 'entities/courses/courses.types'
import { SubmitBtn } from '../submit-btn'
import VideoIcon from './icons/video.icon.svg'
import UserIcon from './icons/user.icon.svg'
import TimeIcon from './icons/time.icon.svg'
import BookIcon from './icons/book.icon.svg'
import InfiniteIcon from './icons/infinite.icon.svg'
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
          <li className={css.row}>
            <TimeIcon className={css.icon} />
            Прдолжитеьность: {displayTime(course.duration)}
          </li>
          <li className={css.row}>
            <BookIcon className={css.icon} />
            Лекций: {getLecCount(course)}
          </li>
          <li className={css.row}>
            <InfiniteIcon className={css.icon} />
            Полный пожизненный доступ
          </li>
          <li className={css.row}>
            <UserIcon className={css.icon} />
            Автор: {course.author.firstName}
          </li>
        </ul>

        <SubmitBtn course={course} />
      </div>
    </div>
  )
}
