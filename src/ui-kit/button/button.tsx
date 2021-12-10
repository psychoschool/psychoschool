import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ButtonProps } from './types'
import { getClassNames } from './utils/cn.util'

export const Button: FC<ButtonProps> = props => {
  const { text, type, disabled, to, href, target, onClick } = props
  const className = getClassNames(props)

  if (to)
    return (
      <button type={type} disabled={disabled} className={className}>
        <Link to={to}>{text}</Link>
      </button>
    )
  if (href)
    return (
      <a href={href} type={type} target={target} className={className}>
        {text}
      </a>
    )
  return (
    <button type={type} disabled={disabled} className={className} onClick={onClick}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  variant: 'contained',
  type: 'button'
}
