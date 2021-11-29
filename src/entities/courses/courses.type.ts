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

export interface IQuestion {
  name: string
  type: 'single' | 'multi'
  answers: Array<{ name: string }>
}

export interface ITest {
  title: string
  description?: string
  isCompleted: boolean
  questions: Array<IQuestion>
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
