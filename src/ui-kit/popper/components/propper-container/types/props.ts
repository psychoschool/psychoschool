import { RefObject } from 'react'
import { Aligns, Placements } from '../../../types'
import { PopperComponentProps } from '../../proppper-component/types'

type Position = number | 'auto'

export interface PlacementStyles {
  top?: Position
  bottom?: Position
  left?: Position
  right?: Position
}

export type CompStylesProps = Pick<
  PopperContainerProps,
  | 'placement'
  | 'align'
  | 'allowedPlacements'
  | 'allowedAligns'
  | 'offset'
  | 'width'
  | 'isPortal'
  | 'disablePositionAdjust'
  | 'targetRef'
  | 'computeResultCallback'
  | 'hasArrow'
> & {
  popperRef: RefObject<HTMLDivElement>
}

export interface ResultStyles extends PlacementStyles {
  width?: CompStylesProps['width']
  opacity?: number
}

export interface PopperContainerProps
  extends Omit<
    PopperComponentProps,
    'popperRef' | 'updatePosition' | 'computedStyles' | 'computedPlacement' | 'computedAlign'
  > {
  open: boolean
  targetRef: RefObject<HTMLDivElement>
  placement: Placements
  align: Aligns
  allowedPlacements?: Placements[]
  allowedAligns?: Aligns[]
  offset: number
  disablePositionAdjust?: boolean
  computeResultCallback?: (isSuccess: boolean) => unknown
}
