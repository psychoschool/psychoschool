import React from 'react'
import { course } from './consts'
import css from './styles.scss'

export const Listing = () => {
  return (
    <div className={css.wrapper}>
      <h3 className={css.header}>Материалы курса</h3>

      <ul className={css.list}>
        {course.sections.map(s => (
          <li key={s.title}>
            <div className={css.sectionWrapper}>
              <h4 className={css.sectionTitle}>{s.title}</h4>
              <p className={css.sectionText}> 0 / 10 | 1ч 30 мин </p>
            </div>
            <ul>
              {s.lectures.map(l => (
                <li key={l.title} className={css.lectureWrapper}>
                  <p className={css.lectureTitle}>{l.title}</p>
                  <p className={css.lectureText}>{l.duration} мин</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
