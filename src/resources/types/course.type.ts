import { UserResponse } from 'resources/types'

export interface CourseResponse {
  id: string
  title: string
  image: string
  url: string
  description: string
  author: UserResponse
  sections: Array<{
    title: string
    lectures: Array<Lecture>
  }>
  isFree: boolean
  price: { cost: number; promoCost?: number }
  skills: Array<string>
}

export interface Lecture {
  id: string
  type: 'video'
  url: string
  title: string
}
