import React, { FC } from 'react'
import { ButtonProps } from './types'
import { getClassNames } from './utils/cn.util'

export const Button: FC<ButtonProps> = props => {
  const { text, type, disabled } = props
  return (
    <button type={type} disabled={disabled} className={getClassNames(props)}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  variant: 'contained',
  type: 'button'
}
