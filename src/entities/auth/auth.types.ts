export interface Auth {
  status: 'succeeded' | 'pending' | 'failed'
  authorized: boolean
}
