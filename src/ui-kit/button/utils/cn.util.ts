import cn from 'classnames'
import { ButtonProps } from '../types'
import css from '../styles.scss'

export const getClassNames = (props: ButtonProps) => {
  const { size, fluid, disabled } = props

  return cn(css.wrapper, css[`${size}`], disabled && css.disabled, fluid && css.fluid)
}
