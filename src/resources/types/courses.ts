import { CoursesCollection, CoursesType } from 'entities/courses/courses.type'

export interface CoursesResponse {
  title: string
  type: CoursesType
  courses: CoursesCollection
}
