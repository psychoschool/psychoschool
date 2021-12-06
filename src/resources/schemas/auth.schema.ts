import camelize from 'camelize'
import { SigningResponse } from 'resources/types'

export const normalizeSignIn = (response: SigningResponse): Camelize<SigningResponse> => {
  return camelize(response)
}
