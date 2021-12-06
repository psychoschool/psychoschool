import { useMemo } from 'react'
import { bindActionCreators, createReducer, Dispatch } from '@reduxjs/toolkit'
import { signIn, signOut } from 'entities/auth/auth.actions'
import { getCurrentUser } from 'entities/user/user.slice'
import type { Auth } from './auth.types'

/*--------------------------------------------------
  dispatch actions
  -------------------------------------------------- */
export const useAuthActions = (dispatch: Dispatch) => {
  return useMemo(() => bindActionCreators({ signIn, signOut }, dispatch), [dispatch])
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
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        return { authorized: true, status: 'succeeded' }
      })
      .addCase(getCurrentUser.pending, (state, action) => {
        return { ...state, authorized: false, status: 'pending' }
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        return { ...state, authorized: false, status: 'failed' }
      })
      .addCase(signIn.fulfilled, state => {
        return { ...state, authorized: true, status: 'succeeded' }
      })
      .addCase(signOut.fulfilled, state => {
        return { ...state, authorized: false, status: 'succeeded' }
      })
  }
)
