import React, { FC, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getIndex } from 'utils/lesson'
import { Lesson as TLesson } from 'entities/lessons/lessons.types'
import { Lecture } from 'entities/courses/courses.types'
import { Preview } from './preview'
import { Listing } from './listing'
import css from './styles.scss'

interface Props {
  lesson: TLesson
}
export const Lesson: FC<Props> = ({ lesson }) => {
  const navigate = useNavigate()
  const { lecId } = useParams()
  const { course } = lesson
  const { sectionIndex, lectureIndex } = getIndex(lecId, course)
  const [current, setCurrent] = useState(course.sections[sectionIndex].lectures[lectureIndex])

  const handleChange = (lec: Lecture) => {
    setCurrent(lec)
    navigate(`/course/${course.url}/learn/${lec.id}`)
  }

  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <Preview videoID={current.url} />

        <div className={css.info}>
          <h2 className={css.title}>Об этом курсе</h2>
          <p className={css.text}>{course.description}</p>
        </div>
      </div>

      <div className={css.listing}>
        <Listing current={current} lesson={lesson} onChange={handleChange} />
      </div>
    </div>
  )
}