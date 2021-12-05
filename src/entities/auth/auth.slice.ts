import { useMemo } from 'react'
import { bindActionCreators, createAsyncThunk, createReducer, Dispatch } from '@reduxjs/toolkit'
import * as authResource from 'api/auth.resource'
import type { SignInParams } from 'resources/types'
import type { Auth } from './auth.types'
import { push } from 'redux-first-history'

/*--------------------------------------------------
  actions
  -------------------------------------------------- */
export const checkAuth = createAsyncThunk('auth/checkAuth', () => {
  return authResource.checkAuth({}, {})
})

export const signIn = createAsyncThunk('auth/signIn', (params: SignInParams, { dispatch }) => {
  return authResource.signIn({}, params).then(() => dispatch(push('/')))
})

export const signOut = createAsyncThunk('auth/signOut', () => {
  return authResource.signOut({}, {})
})

/*--------------------------------------------------
  dispatch actions
  -------------------------------------------------- */
export const useAuthActions = (dispatch: Dispatch) => {
  return useMemo(() => bindActionCreators({ checkAuth, signIn, signOut }, dispatch), [dispatch])
}

/*--------------------------------------------------
  reducers
  -------------------------------------------------- */
export const authReducer = createReducer<Auth>(
  {
    authorized: false,
    status: 'pending'
  },
  builder => {
    builder
      .addCase(checkAuth.fulfilled, (state, action) => {
        const user = action.payload
        return { authorized: true, status: 'succeeded', ...user }
      })
      .addCase(checkAuth.pending, (state, action) => {
        return { ...state, authorized: false, status: 'pending' }
      })
      .addCase(checkAuth.rejected, (state, action) => {
        return { ...state, authorized: false, status: 'failed' }
      })
      .addCase(signOut.rejected, state => {
        return { ...state, authorized: false, status: 'failed' }
      })
  }
)
