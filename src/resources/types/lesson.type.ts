import { CourseResponse } from 'resources/types/course.type'
import { UserResponse } from 'resources/types/user.types'

export type LessonResponse = {
  id: string
  course: CourseResponse
  user: UserResponse
  completedLectures: Array<string>
  paidPlan: string
}

export interface AddLessonParam {
  userId: string
  courseId: string
  url: string
  paidPlan: string
  onSuccess: () => void
}

export interface GetLessonReqParams {
  userId: string
  url: string
}
