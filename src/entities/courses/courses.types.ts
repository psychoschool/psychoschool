import { CourseResponse } from 'resources/types'

export type CourseId = string
export type Course = Omit<CourseResponse, 'paidPlans'> & {
  paidPlans: Collection<string, CourseResponse['paidPlans'][number]>
}
export type CoursesCollection = Collection<CourseId, Course>
