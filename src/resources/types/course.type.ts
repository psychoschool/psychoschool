import { UserResponse } from 'resources/types'

export interface CourseResponse {
  id: string
  title: string
  image: string
  slug: string
  description: string
  duration: number
  author: UserResponse
  sections: Array<{
    title: string
    duration: number
    lectures: Array<Lecture>
  }>
  isFree: boolean
  price: { cost: number; promoCost?: number }
  skills: Array<string>
}

export interface Lecture {
  id: string
  type: 'video'
  title: string
  video?: {
    provider: 'youtube' | 'wistia'
    videoId: string
    videoUrl: string
    duration: number
  }
}
