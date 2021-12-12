import { ResourceError } from 'errors/resource-error'

export interface SigningResponse {
  access_token: string
}

export interface SignUpResponse extends SigningResponse {
  id: string
}

export interface SignInParams {
  email: string
  password: string
}

export interface SignUpParams {
  firstName: string
  email: string
  phone: number
  password: string
  onError?: (error: ResourceError) => void
}
