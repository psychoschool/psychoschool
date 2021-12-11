import { SnackProps } from 'ui-kit/snackbar'

export interface SnackBarProps {
  maxSnack?: number
  placement?: 'top' | 'bottom'
  align?: 'left' | 'center' | 'right'
}

export interface SnackAction {
  type: 'ADD' | 'REMOVE'
  payload: SnackProps
}
