import { Aligns, Placements } from 'ui-kit/popper/types'
import { ReactNode, RefObject } from 'react'
import { ResultStyles } from 'ui-kit/popper/components/propper-container/types'

export interface PopperComponentProps {
  updatePosition: () => unknown
  computedStyles: ResultStyles
  computedPlacement: Placements
  computedAlign: Aligns

  content: ReactNode
  onClickOutside?: (event: MouseEvent) => unknown
  width?: number | string
  maxHeight?: number
  zIndex?: number
  isPortal?: boolean
  target: ReactNode
  popperRef: RefObject<HTMLDivElement>
  targetRef: RefObject<HTMLDivElement>
  hasArrow?: boolean
  hasShadow?: boolean
  backgroundColor?: string
}
