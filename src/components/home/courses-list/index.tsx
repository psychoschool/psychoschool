import React, { FC } from 'react'
import { CoursesCollection } from 'entities/courses/courses.types'
import { FreeCourse } from './free-course'
import css from './styles.scss'

export interface Props {
  title: string
  courses: CoursesCollection
}
export const CoursesList: FC<Props> = ({ title, courses }) => {
  return (
    <>
      <h3 className={css.title}>{title}</h3>

      <div className={css.listing}>
        {Object.entries(courses).map(([id, course]) => course.isFree && <FreeCourse key={id} course={course} />)}
      </div>
    </>
  )
}
