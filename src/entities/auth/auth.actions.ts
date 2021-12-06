import { createAsyncThunk } from '@reduxjs/toolkit'
import { SignInParams } from 'resources/types'
import * as authResource from 'api/auth.resource'

export const signIn = createAsyncThunk('auth/signIn', (params: SignInParams) => {
  return authResource.signIn({}, params)
})

export const signOut = createAsyncThunk('auth/signOut', () => {
  return authResource.signOut({}, {})
})
