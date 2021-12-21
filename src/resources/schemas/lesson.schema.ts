import { LessonResponse } from 'resources/types'
import { Lesson, LessonsCollection } from 'entities/lessons/lessons.types'
import { normalizeCourse } from 'schemas/course.schema'

export const normalizeLessons = (response: Array<LessonResponse>): LessonsCollection => {
  return response.reduce((acc, lesson) => {
    acc[lesson.id] = normalizeLesson(lesson)

    return acc
  }, {} as LessonsCollection)
}

export const normalizeLesson = (response: LessonResponse): Lesson => {
  const { course } = response

  return { ...response, course: normalizeCourse(course) }
}
