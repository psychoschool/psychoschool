export interface SnackProps {
  id: string
  message: string
  variant?: 'default' | 'success' | 'warning' | 'info' | 'error'
  autoHideDuration?: number
}

export type Props = SnackProps & {
  onClose: (id: string) => void
}
