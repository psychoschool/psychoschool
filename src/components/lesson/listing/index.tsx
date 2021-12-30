import React, { FC } from 'react'
import cn from 'classnames'
import { Lecture } from 'entities/courses/courses.types'
import PlayIcon from './icons/play.icon.svg'
import { Accordion } from 'ui-kit/accordion'
import { Checkbox } from 'ui-kit/checkbox'
import { useAppDispatch } from 'utils/store.util'
import { useLessonActions } from 'entities/lessons/lessons.slice'
import { Lesson } from 'entities/lessons/lessons.types'
import { completedUtil } from './utils'
import css from './styles.scss'

interface Props {
  current: Lecture
  lesson: Lesson
  onChange: (lecture: Lecture) => void
}

export const Listing: FC<Props> = ({ current, lesson, onChange }) => {
  const { course, completedLectures } = lesson
  const dispatch = useAppDispatch()
  const { updateLesson } = useLessonActions(dispatch)

  const handleComplete = (lecId: string) => (value: boolean) => {
    const completed = completedUtil(completedLectures, lecId, value)
    updateLesson({ id: lesson.id, completedLectures: completed })
  }

  const isCompleted = (id: string) => {
    return completedLectures.includes(id)
  }

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
                  className={cn(css.lectureWrapper, { [css.selected]: current.video?.videoId === l.video?.videoId })}
                >
                  <Checkbox size='small' checked={isCompleted(l.id)} onValueChange={v => handleComplete(l.id)(v)} />

                  <div onClick={() => onChange(l)}>
                    <p className={css.lectureTitle}>{l.title}</p>
                    <p className={css.lectureText}>
                      <PlayIcon className={css.icon} />
                      {`${isCompleted(l.id)}`} мин
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
