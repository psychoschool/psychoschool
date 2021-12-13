import { SnacksCollection } from 'entities/ui/snacks/snacks.type'

export interface SnackBarProps {
  maxSnack?: number
  anchorOrigin?: {
    vertical?: 'top' | 'bottom'
    horizontal?: 'left' | 'center' | 'right'
  }
  snacks: SnacksCollection
  onRemoveSnack: (id: string) => void
}
