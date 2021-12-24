import { CourseResponse } from 'resources/types'

export type CourseId = string
export type Lecture = Course['sections'][number]['lectures'][number]
export type Course = CourseResponse
export type CoursesCollection = Collection<CourseId, Course>
