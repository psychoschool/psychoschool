import React, { FC, useState, useRef } from 'react'
import { Placements, Aligns } from '../../types'
import { PopperContainerProps, ResultStyles } from './types'
import { PopperComponent } from '../proppper-component/propper-component'
import { resetUnusableAlignsForPlacement } from 'ui-kit/popper/components/propper-container/utils'
import { getComputedPosition } from 'ui-kit/popper/components/propper-container/utils/getComputedPosition'
import { PopperComponentProps } from 'ui-kit/popper/components/proppper-component/types'

const ARROW_SIZE = 4

export const PopperContainer: FC<PopperContainerProps> = props => {
  const {
    open,
    placement,
    align,
    allowedPlacements,
    allowedAligns,
    offset,
    width,
    target,
    targetRef,
    isPortal,
    disablePositionAdjust,
    computeResultCallback,
    hasArrow,
    ...popperRenderProps
  } = props
  const popperRef = useRef<HTMLDivElement>(null)
  const [computedStyles, setComputedStyles] = useState<ResultStyles>({})
  const [computedPlacement, setComputedPlacement] = useState<Placements>()
  const [computedAlign, setComputedAlign] = useState<Aligns>()

  const stylesOpts = {
    placement,
    // Placement и Align в одну сторону несовместимы, например Placement.Top и Align.Top бессмысленны
    // поэтому неподходящие значения align в этом случае сбрасываем на дефолтные
    align: resetUnusableAlignsForPlacement(align, placement),
    // если есть стрелочка, увеличиваем отступ на её размер
    offset: hasArrow ? offset + ARROW_SIZE : offset,
    allowedPlacements,
    allowedAligns,
    width,
    isPortal,
    disablePositionAdjust,
    targetRef,
    popperRef,
    computeResultCallback,
    hasArrow
  }

  const updatePosition = () => {
    const {
      styles: newComputedStyles,
      placement: newComputedPlacement,
      align: newComputedAlign
    } = getComputedPosition(stylesOpts)
    setComputedStyles(newComputedStyles)
    setComputedPlacement(newComputedPlacement)
    setComputedAlign(newComputedAlign)
  }

  const popperOpts = {
    updatePosition,
    computedStyles,
    computedPlacement,
    computedAlign,
    target,
    popperRef,
    targetRef,
    isPortal,
    hasArrow,
    width,
    ...popperRenderProps
  } as PopperComponentProps

  return open ? <PopperComponent {...popperOpts} /> : null
}
