export type UserRole = 'admin' | 'tutor' | 'student'

export interface UserResponse {
  id: string
  phone: number
  email: string
  firstName: string
  role: UserRole
}
