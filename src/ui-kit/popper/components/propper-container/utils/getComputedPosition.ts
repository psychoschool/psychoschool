import { Aligns, Placements } from 'ui-kit/popper/types'
import { CompStylesProps, ResultStyles } from '../types'
import { getComputedAlign } from './getComputedAlign'
import { getComputedPlacement } from './getComputedPlacement'
import { getStyles } from './getStyles'

interface ComputedPosition {
  styles: ResultStyles
  placement: Placements
  align: Aligns
}

// минимальная ширина элемента к которому привязан поппер где не нужен сдвиг для центрирования стрелочки
// вычисляется как: отступ_от_края_поппера_до_стрелочки * 2 + ширина_стрелочки
const MIN_ROOT_SIZE_WITHOUT_SHIFT = 40

export const getComputedPosition = (props: CompStylesProps): ComputedPosition => {
  const {
    width: customWidth,
    isPortal,
    targetRef,
    popperRef,
    computeResultCallback,
    hasArrow,
    ...placementProps
  } = props

  if (!targetRef.current || !popperRef.current) {
    return {
      styles: {},
      placement: placementProps.placement,
      align: placementProps.align
    }
  }

  const rootRect = targetRef.current.getBoundingClientRect()
  const popperRect = popperRef.current.getBoundingClientRect()

  const width = customWidth || rootRect.width

  // если target маленький а попппер со стрелочкой - нужно добавить сдвига чтобы центрировать стрелочку на target
  const needVerticalShift = hasArrow && rootRect.height < MIN_ROOT_SIZE_WITHOUT_SHIFT
  const needHorizontalShift = hasArrow && rootRect.width < MIN_ROOT_SIZE_WITHOUT_SHIFT
  const horizontalShift = needHorizontalShift ? (MIN_ROOT_SIZE_WITHOUT_SHIFT - rootRect.width) / 2 : 0
  const verticalShift = needVerticalShift ? (MIN_ROOT_SIZE_WITHOUT_SHIFT - rootRect.height) / 2 : 0

  const styleArgs = { placementProps, width, hasArrow, rootRect, popperRect, isPortal, horizontalShift, verticalShift }

  const { success: placementSuccess, placement: computedPlacement } = getComputedPlacement(styleArgs)

  const styleArgsAfterPlacement = { ...styleArgs, placementProps: { ...placementProps, placement: computedPlacement } }

  const {
    success: alignSuccess,
    align: computedAlign,
    placement: computedPlacementAfterAlign
  } = getComputedAlign(styleArgsAfterPlacement)

  computeResultCallback?.(placementSuccess && alignSuccess)

  const styles = getStyles(computedAlign, computedPlacementAfterAlign, styleArgsAfterPlacement)

  return {
    styles,
    placement: computedPlacementAfterAlign,
    align: computedAlign
  }
}
