import { useMemo } from 'react'
import { bindActionCreators, createAsyncThunk, createReducer, Dispatch } from '@reduxjs/toolkit'
import * as userResource from 'api/user.resource'
import type { User } from './user.types'
import { signOut } from 'entities/auth/auth.actions'

/*--------------------------------------------------
  actions
  -------------------------------------------------- */
export const getCurrentUser = createAsyncThunk('auth/checkAuth', () => {
  return userResource.getUser({}, {})
})

/*--------------------------------------------------
  dispatch actions
  -------------------------------------------------- */
export const useUserActions = (dispatch: Dispatch) => {
  return useMemo(() => bindActionCreators({ getCurrentUser }, dispatch), [dispatch])
}

/*--------------------------------------------------
  reducers
  -------------------------------------------------- */
export const userReducer = createReducer<User>({ user: null }, builder => {
  builder
    .addCase(getCurrentUser.fulfilled, (state, action) => {
      return { user: action.payload }
    })
    .addCase(signOut.rejected, () => {
      return { user: null }
    })
})
