import React, { FC } from 'react'
import cn from 'classnames'
import { useTheme } from 'utils/theme'
import { Course as TCourse } from 'entities/courses/courses.types'
import { Accordion } from 'ui-kit/accordion'
import { Checkbox } from 'ui-kit/checkbox'
import PlayIcon from 'components/lesson/listing/icons/play.icon.svg'
import DoneIcon from './icons/done.icon.svg'
import css from './styles.scss'
import { Button } from 'ui-kit/button'

interface Props {
  course: TCourse
}

export const getLecCount = (course: TCourse) =>
  course.sections.reduce((res, item) => {
    return res + item.lectures.length
  }, 0)
export const Course: FC<Props> = ({ course }) => {
  const { theme } = useTheme()
  return (
    <div className={cn(css.wrapper, { [css.dark]: theme === 'dark' })}>
      <div className={css.header}>
        <div className={css.content}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>

        <div className={css.courseCard}>
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

        <div className={css.mobCard}>
          <h3 className={css.mobTitle}>{course.title}</h3>
          <p className={css.mobPrice}>Бесплатный</p>
          <Button text='Начать курс' fluid />
        </div>
      </div>

      <div className={css.content}>
        <div className={css.pros}>
          <h3>Чему вы научитесь за этот курс</h3>

          <ul className={css.prosContent}>
            <li className={css.row}>
              <DoneIcon className={css.icon} />
              Самоогранизация
            </li>
            <li className={css.row}>
              <DoneIcon className={css.icon} />
              Самолечение
            </li>
            <li className={css.row}>
              <DoneIcon className={css.icon} />
              Много алкогля
            </li>
            <li className={css.row}>
              <DoneIcon className={css.icon} />
              Куча денег
            </li>
          </ul>
        </div>

        <div className={css.material}>
          <h3>Материалы курса</h3>

          <ul>
            {course.sections.map((s, index) => (
              <Accordion key={s.title} expanded={index == 0}>
                <div className={css.sectionHeader}>
                  <h4 className={css.sectionTitle}>{s.title}</h4>
                  <p className={css.sectionText}> 0 / {s.lectures.length} | 1ч 30 мин </p>
                </div>

                <ul>
                  {s.lectures.map(l => (
                    <li key={l.title} className={css.lectureWrapper}>
                      <Checkbox size='small' disabled />

                      <div>
                        <p className={css.lectureTitle}>{l.title}</p>
                        <p className={css.lectureText}>
                          <PlayIcon className={css.icon} />~ мин
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Accordion>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
