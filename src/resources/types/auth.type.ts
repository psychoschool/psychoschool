export interface AuthResponse {
  id: string
  phone: number
  email: string
  firstName: string
}

export interface SigningResponse {
  access_token: string
}
