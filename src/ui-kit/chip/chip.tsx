import React, { FC } from 'react'
import { getClassnames } from './utils/cn.util'
import { ChipProps } from './types'

export const Chip: FC<ChipProps> = props => {
  const { label } = props

  return (
    <div className={getClassnames(props)}>
      <span>{label}</span>
    </div>
  )
}

Chip.defaultProps = {
  variant: 'filled',
  size: 'medium',
  color: 'default',
  active: false
}
