export interface SnackProps {
  id?: string
  message: string
  type?: 'default' | 'success' | 'warning' | 'info' | 'error'
}

export type Props = SnackProps & {
  onClose: (payload: SnackProps) => void
}
