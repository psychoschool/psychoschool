import React, { FC } from 'react'
import cn from 'classnames'
import { ICourse } from 'entities/courses/courses.type'
import PlayIcon from './icons/play.icon.svg'
import { Accordion } from 'ui-kit/accordion'
import { Checkbox } from 'ui-kit/checkbox'
import css from './styles.scss'

interface Props {
  current: string
  course: ICourse
  onChange: (video: string) => void
}

export const Listing: FC<Props> = ({ current, course, onChange }) => {
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
                  className={cn(css.lectureWrapper, { [css.selected]: current === l.video })}
                  onClick={() => onChange(l.video)}
                >
                  <Checkbox size='small' />

                  <div>
                    <p className={css.lectureTitle}>{l.title}</p>
                    <p className={css.lectureText}>
                      <PlayIcon className={css.icon} />
                      {l.duration} мин
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
