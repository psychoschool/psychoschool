export type Requirements = 'auth' | 'pay' | 'test'
export type RequirementsCollection = Partial<Collection<Requirements, boolean>>

export interface Course {
  id: string
  title: string
  image: string
  lectures: number
  requirements?: RequirementsCollection
}

export type CoursesCollection = Collection<string, Course>
