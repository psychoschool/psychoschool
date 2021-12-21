import { LessonResponse } from 'resources/types'
import { Course } from 'entities/courses/courses.types'

type LessonId = string
export type Lesson = Omit<LessonResponse, 'course'> & {
  course: Course
}
export type LessonsCollection = Collection<LessonId, Lesson>
