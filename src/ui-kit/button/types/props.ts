import { MouseEvent } from 'react'

export interface ButtonProps {
  text?: string
  size?: 'small' | 'medium' | 'large'
  loading?: boolean
  disabled?: boolean
  fluid?: boolean
  type?: 'submit' | 'reset' | 'button'
  variant?: 'text' | 'contained' | 'outlined'
  href?: string
  to?: string
  target?: string
  download?: boolean | string
  referrerPolicy?: string
  rel?: string
  tabIndex?: number
  onClick?: (event: MouseEvent) => unknown
}
