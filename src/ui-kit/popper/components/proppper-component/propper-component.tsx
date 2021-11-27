import React, { useEffect, useCallback, useMemo, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'
import debounce from 'lodash.debounce'
import cn from 'classnames'
import { PopperComponentProps } from './types'
import { isClickOutside } from './utils/otside.util'
import css from './styles.scss'
import { camelCase } from 'utils/camelize.util'

export const PopperComponent: React.FC<PopperComponentProps> = props => {
  const {
    updatePosition,
    computedStyles,
    computedPlacement,
    computedAlign,
    content,
    width,
    zIndex,
    maxHeight,
    target,
    targetRef,
    popperRef,
    onClickOutside,
    isPortal,
    hasArrow,
    hasShadow,
    backgroundColor
  } = props

  // анимация на открытие
  useEffect(() => {
    if (popperRef?.current) popperRef.current.style.opacity = '1'
  }, [popperRef])

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (targetRef.current && popperRef.current && isClickOutside([targetRef.current, popperRef.current], event)) {
        onClickOutside?.(event)
      }
    },
    [onClickOutside, popperRef, targetRef]
  )

  const handleResize = debounce(updatePosition, 50)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const addEventListeners = () => {
    document.addEventListener('click', handleClick)
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleResize)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const removeEventListeners = () => {
    document.removeEventListener('click', handleClick)
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('scroll', handleResize)
  }

  useEffect(() => {
    addEventListeners()

    return () => {
      removeEventListeners()
    }
  }, [addEventListeners, removeEventListeners])

  useLayoutEffect(() => {
    updatePosition()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target])

  const popperStyles = {
    width,
    ...computedStyles,
    zIndex,
    maxHeight,
    backgroundColor,
    borderColor: backgroundColor
  }

  const classNames = useMemo(
    () =>
      cn(css.root, {
        [css[`${camelCase(`placement-${computedPlacement}`)}`]]: computedPlacement,
        [css[`${camelCase(`align-${computedAlign}`)}`]]: computedAlign,
        [css.hasArrow]: hasArrow,
        [css.hasShadow]: hasShadow,
        [css.inPortal]: isPortal
      }),
    [computedPlacement, computedAlign, hasArrow, hasShadow, isPortal]
  )

  const root = (
    <div className={classNames} ref={popperRef} style={popperStyles}>
      {content}
    </div>
  )

  return isPortal ? createPortal(root, document.body) : root
}
