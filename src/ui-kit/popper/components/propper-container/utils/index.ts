import { Aligns, Placements } from 'ui-kit/popper/types'

export const isSpaceEnoughFn =
  (rootRect: ClientRect, disable?: boolean) =>
  ({ spaceX, spaceY }: { spaceX?: number; spaceY?: number }) =>
    disable
      ? {}
      : {
          top: spaceY && rootRect.top > spaceY,
          right: spaceX && window.innerWidth - rootRect.right > spaceX,
          bottom: spaceY && window.innerHeight - rootRect.bottom > spaceY,
          left: spaceX && rootRect.left > spaceX
        }

export const resetUnusableAlignsForPlacement = (align: Aligns, placement: Placements): Aligns => {
  if (placement === 'bottom' || placement === 'top') {
    if (align === 'top' || align === 'bottom') {
      return 'left'
    }
  }
  if (placement === 'left' || placement === 'right') {
    if (align === 'left' || align === 'right') {
      return 'bottom'
    }
  }
  return align
}
