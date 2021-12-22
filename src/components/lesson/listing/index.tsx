import React, { FC } from 'react'
import cn from 'classnames'
import { Course, Lecture } from 'entities/courses/courses.types'
import PlayIcon from './icons/play.icon.svg'
import { Accordion } from 'ui-kit/accordion'
import { Checkbox } from 'ui-kit/checkbox'
import css from './styles.scss'

interface Props {
  current: Lecture
  course: Course
  completed: Array<string>
  onChange: (lecture: Lecture) => void
}

export const Listing: FC<Props> = ({ current, course, completed, onChange }) => {
  return (
    <div className={css.wrapper}>
      <h3 className={css.header}>Материалы курса</h3>
      <div className={css.list}>
        {course.sections.map((s, index) => (
          <Accordion key={s.title} expanded={index == 0}>
            <div className={css.sectionHeader}>
              <h4 className={css.sectionTitle}>{s.title}</h4>
              <p className={css.sectionText}> 0 / {s.lectures.length} | 1ч 30 мин </p>
            </div>

            <ul>
              {s.lectures.map(l => (
                <li
                  key={l.title}
                  className={cn(css.lectureWrapper, { [css.selected]: current.url === l.url })}
                  onClick={() => onChange(l)}
                >
                  <Checkbox size='small' checked={completed.includes(l.id)} />

                  <div>
                    <p className={css.lectureTitle}>{l.title}</p>
                    <p className={css.lectureText}>
                      <PlayIcon className={css.icon} />
                      {10} мин
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Accordion>
        ))}
      </div>
    </div>
  )
}
