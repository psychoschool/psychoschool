import React, { ReactNode } from 'react'
import { PopperContainerProps } from 'ui-kit/popper/components/propper-container/types'

export type Placements = 'top' | 'right' | 'bottom' | 'left'
export type Aligns = 'center' | 'top' | 'right' | 'bottom' | 'left'

export interface PopperProps
  extends Omit<PopperContainerProps, 'target' | 'targetRef' | 'placement' | 'align' | 'offset'> {
  open: boolean
  children: ReactNode

  placement?: Placements
  align?: Aligns
  offset?: number
  onClickEntry?: (event: React.MouseEvent) => unknown
  onMouseEnter?: (event: React.MouseEvent) => unknown
  onMouseLeave?: (event: React.MouseEvent) => unknown
  onFocus?: (event: FocusEvent) => unknown
  onBlur?: (event: FocusEvent) => unknown
}
