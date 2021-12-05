import { PSYCHO_API } from 'config/services'
import { resource } from 'utils/resource.util'
import type { AuthResponse, SigningResponse } from 'resources/types'
import { normalizeSignIn } from 'schemas/auth.schema'

export const checkAuth = resource(ctx => ({
  ctx,
  name: 'checkAuth',
  method: 'GET',
  serviceName: PSYCHO_API,
  url: '/me',
  onSuccess: (response: AuthResponse) => response,
  onError: error => error
}))

export const signIn = resource(ctx => ({
  ctx,
  name: 'signIn',
  method: 'POST',
  serviceName: PSYCHO_API,
  url: '/login',
  data: {},
  onSuccess: (response: SigningResponse) => normalizeSignIn(response),
  onError: error => error
}))

export const signOut = resource(ctx => ({
  ctx,
  name: 'signOut',
  method: 'POST',
  serviceName: PSYCHO_API,
  url: '/logout',
  data: {},
  onSuccess: response => response,
  onError: error => error
}))
