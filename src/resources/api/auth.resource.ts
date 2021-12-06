import { PSYCHO_API } from 'config/services'
import { resource } from 'utils/resource.util'
import type { UserResponse, SigningResponse, SignInParams } from 'resources/types'
import { normalizeSignIn } from 'schemas/auth.schema'

export const signIn = resource((ctx, params: SignInParams) => ({
  ctx,
  name: 'signIn',
  method: 'POST',
  serviceName: PSYCHO_API,
  url: '/login',
  data: params,
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
