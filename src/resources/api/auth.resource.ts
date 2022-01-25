import { PSYCHO_API } from 'config/services'
import { resource } from 'utils/resource.util'
import type { SigningResponse, SignUpResponse, SignUpParams, SignInParams } from 'resources/types'
import { ResetParams } from 'resources/types'

export const signIn = resource((ctx, params: SignInParams) => ({
  ctx,
  name: 'signIn',
  method: 'POST',
  serviceName: PSYCHO_API,
  url: '/login',
  data: params,
  onSuccess: (response: SigningResponse) => response,
  onError: error => error
}))

export const forgot = resource((ctx, email: string) => ({
  ctx,
  name: 'reset',
  method: 'POST',
  serviceName: PSYCHO_API,
  url: '/forgot',
  data: { email },
  onSuccess: (response: SigningResponse) => response,
  onError: error => error
}))

export const reset = resource((ctx, params: ResetParams) => {
  const { userId, token, password } = params
  return {
    ctx,
    name: 'reset',
    method: 'POST',
    serviceName: PSYCHO_API,
    url: `/reset/${userId}/${token}`,
    data: { password },
    onSuccess: (response: SigningResponse) => response,
    onError: error => error
  }
})

export const signUp = resource((ctx, params: SignUpParams) => {
  const data = { ...params, phone: parseInt(params.phone) }

  return {
    ctx,
    name: 'signUp',
    method: 'POST',
    serviceName: PSYCHO_API,
    url: '/signup',
    data,
    onSuccess: (response: SignUpResponse) => response,
    onError: error => error
  }
})

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
