import { UserResponse } from 'resources/types'

export interface CourseResponse {
  id: string
  title: string
  image: string
  isFree: boolean
  description: string
  author: UserResponse
  sections: Array<{
    title: string
    lectures: Array<Lecture>
  }>
  paidPlans: Array<{ id: string; name: string; price: number }>
}

export interface Lecture {
  id: string
  type: 'video'
  url: string
  title: string
}
