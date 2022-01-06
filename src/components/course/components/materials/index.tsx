import React, { FC } from 'react'
import { Accordion } from 'ui-kit/accordion'
import { Checkbox } from 'ui-kit/checkbox'
import { displayTime } from 'utils/time.util'
import { pluralize } from 'utils/string.util'
import PlayIcon from 'components/lesson/listing/icons/play.icon.svg'
import { Course, Section } from 'entities/courses/courses.types'
import css from './styles.scss'

interface Props {
  course: Course
}
export const Materials: FC<Props> = ({ course }) => {
  const getSectionMeta = (section: Section) => {
    const duration = displayTime(section.duration)
    const lecCount = pluralize(section.lectures.length, ['лекция', 'лекции', 'лекций'])

    return `${section.lectures.length} ${lecCount} | ${duration}`
  }

  return (
    <div className={css.material}>
      <h3>Материалы курса</h3>

      <ul>
        {course.sections.map((s, index) => (
          <Accordion key={s.title} expanded={index == 0}>
            <div className={css.sectionHeader}>
              <h4 className={css.sectionTitle}>{s.title}</h4>
              <p className={css.sectionText}>{getSectionMeta(s)}</p>
            </div>

            <ul>
              {s.lectures.map(l => (
                <li key={l.title} className={css.lectureWrapper}>
                  <p className={css.lectureTitle}>{l.title}</p>
                  <p className={css.lectureText}>
                    <PlayIcon className={css.icon} />
                    {l.video && displayTime(l.video?.duration)}
                  </p>
                </li>
              ))}
            </ul>
          </Accordion>
        ))}
      </ul>
    </div>
  )
}
