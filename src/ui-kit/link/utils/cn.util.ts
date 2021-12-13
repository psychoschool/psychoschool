import cn from 'classnames'
import { LinkProps } from '../types'
import css from '../styles.scss'

export const getClassNames = (props: LinkProps) => {
  const { size } = props

  return cn(css.wrapper, css[`${size}`])
}
