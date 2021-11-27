import { CompStylesProps } from 'ui-kit/popper/components/propper-container/types'

type PlacementProps = Pick<
  CompStylesProps,
  'align' | 'placement' | 'allowedPlacements' | 'allowedAligns' | 'offset' | 'disablePositionAdjust'
>

export interface StyleArgs {
  placementProps: PlacementProps
  rootRect: ClientRect
  popperRect: ClientRect
  width: CompStylesProps['width']
  hasArrow: CompStylesProps['hasArrow']
  isPortal: CompStylesProps['isPortal']
  verticalShift: number
  horizontalShift: number
}
