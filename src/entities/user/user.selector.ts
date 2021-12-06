import { RootState } from 'store/index'

export const selectCurrentUser = (state: RootState) => state.user.user
