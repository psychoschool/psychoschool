export interface Course {
  id: string
  title: string
  image: string
  lectures: number
  requirements?: Array<{
    label: string
    valid: boolean
  }>
}

export type CoursesCollection = Collection<string, Course>
