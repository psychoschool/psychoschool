import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store/index'

const selectScreen = (state: RootState) => state.ui.screen

export const selectIsMobile = createSelector([selectScreen], screen => screen.isMobile)
export const selectIsTablet = createSelector([selectScreen], screen => screen.isTablet)

export const selectIsDesktop = createSelector([selectScreen], screen => screen.isDesktop)
