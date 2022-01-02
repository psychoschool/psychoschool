import React, { FC } from 'react'
import { Accordion } from 'ui-kit/accordion'
import { Checkbox } from 'ui-kit/checkbox'
import PlayIcon from 'components/lesson/listing/icons/play.icon.svg'
import css from './styles.scss'
import { Course } from 'entities/courses/courses.types'

interface Props {
  course: Course
}
export const Materials: FC<Props> = ({ course }) => {
  return (
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
  )
}
