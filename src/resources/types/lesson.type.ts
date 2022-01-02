import { CourseResponse } from 'resources/types/course.type'
import { UserResponse } from 'resources/types/user.types'

export type LessonResponse = {
  id: string
  course: CourseResponse
  user: UserResponse
  completedLectures: Array<string>
  purchasedPrice?: number
  progress: number
  isFree: boolean
}

export interface AddLessonParam {
  userId: string
  courseId: string
  url: string
  price?: number
  onSuccess: () => void
}

export interface GetLessonReqParams {
  userId: string
  url: string
}
