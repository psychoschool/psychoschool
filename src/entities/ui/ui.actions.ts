import { useMemo } from 'react'
import { bindActionCreators } from 'redux'

import { AppDispatch } from 'store/index'
import * as screenActions from './screen/screen.slice'
import * as modalActions from './modals/modals.slice'
import * as snackActions from './snacks/snacks.slice'

export const useScreenActions = (dispatch: AppDispatch) => {
  return useMemo(() => bindActionCreators(screenActions, dispatch), [dispatch])
}

export const useModalActions = (dispatch: AppDispatch) => {
  return useMemo(() => bindActionCreators(modalActions, dispatch), [dispatch])
}

export const useSnackActions = (dispatch: AppDispatch) => {
  return useMemo(() => bindActionCreators(snackActions, dispatch), [dispatch])
}
