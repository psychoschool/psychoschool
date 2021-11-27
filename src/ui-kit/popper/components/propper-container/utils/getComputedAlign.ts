import { StyleArgs } from './StyleArgs'
import { isSpaceEnoughFn } from './index'
import { Aligns, Placements } from 'ui-kit/popper/types'

interface ComputedAlign {
  align: Aligns
  placement: Placements
  success: boolean
}

const returnAlign = (align: Aligns, placement: Placements, success: boolean = true): ComputedAlign => ({
  align,
  placement,
  success
})

export const getComputedAlign = (args: StyleArgs): ComputedAlign => {
  const { placementProps, width, rootRect, popperRect, horizontalShift, verticalShift } = args
  const { align, placement, disablePositionAdjust, allowedAligns, allowedPlacements } = placementProps

  const reservedWidth = (typeof width === 'number' ? width : popperRect.width) - rootRect.width - horizontalShift
  const reservedHeight = popperRect.height - rootRect.height - verticalShift
  const isSpaceEnough = isSpaceEnoughFn(rootRect, disablePositionAdjust)
  const isEnough = isSpaceEnough({ spaceX: reservedWidth, spaceY: reservedHeight })

  if (align === 'center') {
    if (placement === 'top' || placement === 'bottom') {
      const { left: isCenterLeftEnough, right: isCenterRightEnough } = isSpaceEnough({ spaceX: reservedWidth / 2 })

      if (!isCenterLeftEnough || !isCenterRightEnough) {
        if (isEnough.left && allowedAligns?.includes('left')) {
          return returnAlign('left', placement)
        }
        if (isEnough.right && allowedAligns?.includes('right')) {
          return returnAlign('right', placement)
        }
        if (isEnough.left && allowedPlacements?.includes('left')) {
          return returnAlign(align, 'left')
        }
        if (isEnough.right && allowedPlacements?.includes('right')) {
          return returnAlign(align, 'right')
        }

        return returnAlign('center', placement, false)
      }

      return returnAlign('center', placement)
    }

    if (placement === 'left' || placement === 'right') {
      const { top: isCenterTopEnough, bottom: isCenterBottomEnough } = isSpaceEnough({ spaceY: reservedHeight / 2 })

      if (!isCenterTopEnough || !isCenterBottomEnough) {
        if (isEnough.bottom && allowedAligns?.includes('bottom')) {
          return returnAlign('bottom', placement)
        }
        if (isEnough.top && allowedAligns?.includes('top')) {
          return returnAlign('top', placement)
        }
        if (isEnough.bottom && allowedPlacements?.includes('bottom')) {
          return returnAlign(align, 'bottom')
        }
        if (isEnough.top && allowedPlacements?.includes('top')) {
          return returnAlign(align, 'top')
        }

        return returnAlign('center', placement, false)
      }

      return returnAlign('center', placement)
    }
  }

  const relatives = {
    top: isEnough.top,
    bottom: isEnough.bottom,
    left: isEnough.left,
    right: isEnough.right,
    center: false
  }

  const computeAlign = (mainAlign: Aligns, alternativeAlign: Aligns): ComputedAlign => {
    // разворачиваем поппер если не хватает места по основному направлению но хватает в противоположном
    if (!relatives[mainAlign]) {
      if (relatives[alternativeAlign] && allowedAligns?.includes(alternativeAlign)) {
        return returnAlign(alternativeAlign, placement)
      }

      return returnAlign(mainAlign, placement, false)
    }

    return returnAlign(mainAlign, placement)
  }

  switch (align) {
    case 'bottom':
      return computeAlign('top', 'bottom')
    case 'top':
      return computeAlign('bottom', 'top')
    case 'left':
      return computeAlign('right', 'left')
    default:
      return computeAlign('left', 'right')
  }
}
