import { ICourse } from 'entities/courses/courses.type'

export const hasTest = (course: ICourse) => Boolean(course.test)

export const passedTest = (course: ICourse) => {
  if (hasTest(course)) return course.test?.isCompleted
  return true
}
