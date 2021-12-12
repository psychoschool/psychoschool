import { RootState } from 'store/index'

export const selectSnacksCollection = (state: RootState) => state.ui.snacks
