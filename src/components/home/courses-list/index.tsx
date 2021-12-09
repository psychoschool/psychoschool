import React, { FC } from 'react'
import { CourseItem, CoursesCollection, CoursesType } from 'entities/courses/courses.type'
import { FreeCourse } from './free-course'
import { ProCourse } from './pro-course'
import css from './styles.scss'

export interface Props {
  title: string
  type: CoursesType
  courses: CoursesCollection
}
export const CoursesList: FC<Props> = ({ title, type, courses }) => {
  if (type !== 'free') return null

  return (
    <>
      <h3 className={css.title}>{title}</h3>

      <div className={css.listing}>
        {Object.entries(courses).map(([id, course]) =>
          course.requirements ? (
            <ProCourse key={id} course={course as Required<CourseItem>} />
          ) : (
            <FreeCourse key={id} course={course} />
          )
        )}
      </div>
    </>
  )
}
