import React, { FC } from 'react'
import cn from 'classnames'
import PlayIcon from './icons/play.icon.svg'
import { course } from './consts'
import { Accordion } from 'uikit/accordion'
import { Checkbox, Size } from 'uikit/checkbox'
import css from './styles.scss'

interface Props {
  current: string
  onChange: (video: string) => void
}

export const Listing: FC<Props> = ({ current, onChange }) => {
  return (
    <div className={css.wrapper}>
      <h3 className={css.header}>Материалы курса</h3>
      <ul className={css.list}>
        {course.sections.map((s, index) => (
          <li key={s.title}>
            <Accordion
              expanded={index == 0}
              title={
                <div className={css.sectionHeader}>
                  <h4 className={css.sectionTitle}>{s.title}</h4>
                  <p className={css.sectionText}> 0 / {s.lectures.length} | 1ч 30 мин </p>
                </div>
              }
            >
              <ul>
                {s.lectures.map(l => (
                  <li
                    key={l.title}
                    className={cn(css.lectureWrapper, { [css.selected]: current === l.video })}
                    onClick={() => onChange(l.video)}
                  >
                    <Checkbox size={Size.Small} />

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
          </li>
        ))}
      </ul>
    </div>
  )
}
