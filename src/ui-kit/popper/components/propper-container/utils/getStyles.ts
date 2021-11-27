import { PlacementStyles, ResultStyles } from '../types'
import { StyleArgs } from './StyleArgs'
import { getPlacementPortalStyles } from './getPlacementPortalStyles'
import { Aligns, Placements } from 'ui-kit/popper/types'

const getStylesTop = (): PlacementStyles => ({ top: 'auto' })
const getStylesBottom = (): PlacementStyles => ({ bottom: 'auto' })
const getStylesLeft = (): PlacementStyles => ({ left: 'auto' })
const getStylesRight = (): PlacementStyles => ({ right: 'auto' })

const getPlacementStyles = (placement: Placements): ResultStyles => {
  switch (placement) {
    case 'top':
      return getStylesTop()
    case 'bottom':
      return getStylesBottom()
    case 'left':
      return getStylesLeft()
    case 'right':
      return getStylesRight()
    default:
      return {}
  }
}

const getAlignStyles = (align: Aligns, placement: Placements, styleArgs: StyleArgs): ResultStyles => {
  const { width, rootRect, popperRect } = styleArgs
  switch (align) {
    case 'center':
      if (placement === 'top' || placement === 'bottom') {
        return {
          left: rootRect.width / 2 - (typeof width === 'number' ? width : popperRect.width) / 2,
          right: 'auto'
        }
      }
      return {
        top: rootRect.height / 2 - popperRect.height / 2,
        bottom: 'auto'
      }
    case 'top':
      return getStylesTop()
    case 'bottom':
      return getStylesBottom()
    case 'left':
      return getStylesLeft()
    case 'right':
      return getStylesRight()
    default:
      return {}
  }
}

export const getStyles = (computedAlign: Aligns, computedPlacement: Placements, styleArgs: StyleArgs): ResultStyles => {
  const { placementProps, width, rootRect, isPortal, horizontalShift, verticalShift } = styleArgs

  // Стартовое значение
  const base: PlacementStyles = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }

  const { offset } = placementProps
  const outerWidth = offset + rootRect.width
  const outerHeight = offset + rootRect.height

  // сразу определяем начальную позицию всех направлений, затем отсекаем ненужные в 'auto'
  if (computedPlacement === 'top' || computedPlacement === 'bottom') {
    base.top = outerHeight
    base.bottom = outerHeight
    base.left = -horizontalShift
    base.right = -horizontalShift
  }

  if (computedPlacement === 'left' || computedPlacement === 'right') {
    base.left = outerWidth
    base.right = outerWidth
    base.top = -verticalShift
    base.bottom = -verticalShift
  }

  const placementStyles = getPlacementStyles(computedPlacement)

  const alignStyles = getAlignStyles(computedAlign, computedPlacement, styleArgs)

  const positionStyles = {
    ...base,
    ...placementStyles,
    ...alignStyles
  }

  const placementStylesWithAdds: PlacementStyles = isPortal
    ? getPlacementPortalStyles(positionStyles, rootRect)
    : positionStyles

  return {
    width,
    ...placementStylesWithAdds
  }
}
