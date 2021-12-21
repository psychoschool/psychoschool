import { Course } from 'entities/courses/courses.types'

export const getLecCount = (course: Course) =>
  course.sections.reduce((res, item) => {
    return res + item.lectures.length
  }, 0)
