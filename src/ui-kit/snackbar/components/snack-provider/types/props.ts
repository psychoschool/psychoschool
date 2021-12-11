import { SnackProps } from 'ui-kit/snackbar'

export interface SnackBarProps {
  maxSnack?: number
  anchorOrigin?: {
    vertical?: 'top' | 'bottom'
    horizontal?: 'left' | 'center' | 'right'
  }
}

export interface SnackAction {
  type: 'ADD' | 'REMOVE'
  payload: SnackProps
}
