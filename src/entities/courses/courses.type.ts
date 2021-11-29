export type Requirements = 'auth' | 'pay'
export type RequirementsCollection = Partial<Collection<Requirements, boolean>>

export type CourseId = string
export interface CourseItem {
  id: string
  title: string
  image: string
  lectures: number
  requirements?: RequirementsCollection
}

interface ITest {
  title: string
  description?: string
  isCompleted: boolean
  questions: Array<{
    title: string
    type: 'single' | 'multi'
  }>
}

export interface ICourse {
  id: string
  title: string
  image: string
  test?: ITest
  sections: Array<{
    title: string
    lectures: Array<{
      title: string
      video: string
      isCompleted: boolean
      duration: number
    }>
  }>
}

export type CoursesCollection = Collection<CourseId, CourseItem>
