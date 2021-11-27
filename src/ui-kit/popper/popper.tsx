import React, { FC, useRef } from 'react'
import { PopperProps } from './types'
import { PopperContainer } from 'ui-kit/popper/components/propper-container'
import { PopperContainerProps } from 'ui-kit/popper/components/propper-container/types'
import css from './styles.scss'

export const Popper: FC<PopperProps> = props => {
  const { onClickEntry, onMouseEnter, onMouseLeave, children, ...popperProps } = props
  const containerRef = useRef<HTMLDivElement>(null)
  const popperOpts = { target: children, targetRef: containerRef, ...popperProps } as PopperContainerProps

  return (
    <div className={css.wrapper}>
      <div
        className={css.target}
        onClick={onClickEntry}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={containerRef}
      >
        {children}
      </div>

      <PopperContainer {...popperOpts} />
    </div>
  )
}

Popper.defaultProps = {
  open: true,
  placement: 'bottom',
  align: 'right',
  width: 'auto',
  allowedPlacements: ['top', 'bottom', 'left', 'right'],
  allowedAligns: ['top', 'bottom', 'left', 'right', 'center'],
  offset: 4,
  isPortal: false,
  hasArrow: false
}
