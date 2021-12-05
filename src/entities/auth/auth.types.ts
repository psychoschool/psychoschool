import { AuthResponse } from 'resources/types'

export type Auth =
  | ({ status: 'succeeded'; authorized: true } & AuthResponse)
  | { status: 'pending' | 'failed'; authorized: false }
