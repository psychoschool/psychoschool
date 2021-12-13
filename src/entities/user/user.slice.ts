import { useMemo } from 'react'
import { bindActionCreators, createAsyncThunk, createReducer, Dispatch } from '@reduxjs/toolkit'
import { signOut } from 'entities/auth/auth.actions'
import * as userResource from 'api/user.resource'
import type { User } from './user.types'

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
export const userReducer = createReducer<User>({ data: null }, builder => {
  builder
    .addCase(getCurrentUser.fulfilled, (state, action) => {
      return { data: action.payload }
    })
    .addCase(signOut.rejected, () => {
      return { data: null }
    })
})
