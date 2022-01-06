import React, { FC } from 'react'
import cn from 'classnames'
import { Section, Lecture } from 'entities/courses/courses.types'
import PlayIcon from './icons/play.icon.svg'
import { Accordion } from 'ui-kit/accordion'
import { Checkbox } from 'ui-kit/checkbox'
import { displayTime } from 'utils/time.util'
import { useAppDispatch } from 'utils/store.util'
import { useLessonActions } from 'entities/lessons/lessons.slice'
import { Lesson } from 'entities/lessons/lessons.types'
import { completedUtil } from './utils'
import css from './styles.scss'

interface Props {
  current: Lecture
  lesson: Lesson
  sectionIndex: number
  onChange: (lecture: Lecture) => void
}

export const Listing: FC<Props> = ({ current, lesson, sectionIndex, onChange }) => {
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

  const getSectionMeta = (section: Section) => {
    const lecIds = section.lectures.map(l => l.id)
    const duration = displayTime(section.duration)
    const completed = lecIds.filter(l => completedLectures.includes(l)).length

    return ` ${completed} / ${section.lectures.length} | ${duration}`
  }

  return (
    <div className={css.wrapper}>
      <h3 className={css.header}>Материалы курса</h3>
      <div className={css.list}>
        {course.sections.map((s, index) => (
          <Accordion key={s.title} expanded={index == sectionIndex}>
            <div className={css.sectionHeader}>
              <h4 className={css.sectionTitle}>{s.title}</h4>
              <p className={css.sectionText}>{getSectionMeta(s)}</p>
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
                      {l.video && displayTime(l.video.duration)}
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
