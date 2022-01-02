import React, { FC } from 'react'
import { LessonsCollection } from 'entities/lessons/lessons.types'
import { Lesson } from './lesson'
import css from './styles.scss'

export interface Props {
  title: string
  lessons: LessonsCollection
}
export const LessonsList: FC<Props> = ({ title, lessons }) => {
  const hasLessons = Object.entries(lessons).length > 0

  if (!hasLessons) return null

  return (
    <>
      <h3 className={css.title}>{title}</h3>

      <div className={css.listing}>
        {Object.entries(lessons).map(([id, lesson]) => (
          <Lesson key={id} lesson={lesson} />
        ))}
      </div>
    </>
  )
}
