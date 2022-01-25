import { createAsyncThunk } from '@reduxjs/toolkit'
import type { SignInParams, SignUpParams } from 'resources/types'
import * as authResource from 'api/auth.resource'
import { ResetParams } from 'resources/types'

export const signIn = createAsyncThunk('auth/signIn', (params: SignInParams) => {
  return authResource.signIn({}, params)
})

export const signUp = createAsyncThunk('auth/signUp', (params: SignUpParams) => {
  return authResource.signUp({}, params)
})

export const signOut = createAsyncThunk('auth/signOut', () => {
  return authResource.signOut({}, {})
})

export const forgot = createAsyncThunk('auth/forgot', (email: string) => {
  return authResource.forgot({}, email)
})

export const reset = createAsyncThunk('auth/reset', (params: ResetParams) => {
  return authResource.reset({}, params)
})
