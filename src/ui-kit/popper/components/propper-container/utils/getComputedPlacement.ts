import { StyleArgs } from './StyleArgs'
import { isSpaceEnoughFn } from './index'
import { Placements } from 'ui-kit/popper/types'

interface ComputedPlacement {
  placement: Placements
  success: boolean
}

export const getComputedPlacement = (args: StyleArgs): ComputedPlacement => {
  const { placementProps, width, rootRect, popperRect } = args
  const { placement, offset, disablePositionAdjust, allowedPlacements } = placementProps

  // если прокинули кастомную ширину - берём её за основу
  const reservedWidth = (typeof width === 'number' ? width : popperRect.width) + offset
  const reservedHeight = popperRect.height + offset
  const isSpaceEnough = isSpaceEnoughFn(rootRect, disablePositionAdjust)
  const isEnough = isSpaceEnough({ spaceX: reservedWidth, spaceY: reservedHeight })

  const relatives = {
    top: isEnough.top,
    bottom: isEnough.bottom,
    left: isEnough.left,
    right: isEnough.right
  }

  const computePlacement = (mainPlacement: Placements, alternativePlacement: Placements) => {
    // разворачиваем поппер если не хватает места по основному направлению но хватает в противоположном
    if (!relatives[mainPlacement]) {
      if (relatives[alternativePlacement] && allowedPlacements?.includes(alternativePlacement)) {
        return {
          placement: alternativePlacement,
          success: true
        }
      }

      return {
        placement: mainPlacement,
        success: false
      }
    }

    return {
      placement: mainPlacement,
      success: true
    }
  }

  switch (placement) {
    case 'top':
      return computePlacement('top', 'bottom')
    case 'left':
      return computePlacement('left', 'right')
    case 'right':
      return computePlacement('right', 'left')
    default:
      return computePlacement('bottom', 'top')
  }
}
