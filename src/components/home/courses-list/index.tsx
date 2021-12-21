import React, { FC } from 'react'
import { CoursesCollection } from 'entities/courses/courses.types'
import { FreeCourse } from './free-course'
import css from './styles.scss'

export interface Props {
  type: 'course' | 'lesson'
  title: string
  courses: CoursesCollection
}
export const CoursesList: FC<Props> = ({ title, courses, type }) => {
  return (
    <>
      <h3 className={css.title}>{title}</h3>

      <div className={css.listing}>
        {Object.entries(courses).map(
          ([id, course]) => course.isFree && <FreeCourse key={id} type={type} course={course} />
        )}
      </div>
    </>
  )
}
