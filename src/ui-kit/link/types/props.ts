import { ReactNode, MouseEventHandler } from 'react'

export type Size = 'small' | 'medium' | 'large'

export type Target = '_self' | '_blank' | '_parent' | '_top'

export interface LinkProps {
  children?: ReactNode
  href?: string
  onClick?: MouseEventHandler
  size?: Size
  colorIcon?: string
  target?: Target
  rel?: string
  tabIndex?: number
  download?: boolean | string
  linkTo?: string | object
}
