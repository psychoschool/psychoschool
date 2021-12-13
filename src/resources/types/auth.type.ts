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
  phone: string
  password: string
}
