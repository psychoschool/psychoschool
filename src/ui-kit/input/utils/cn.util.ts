import cn from 'classnames'
import { InputProps } from '../types'
import css from '../styles.scss'

export const getClassNames = (props: InputProps) => {
  const { size, fluid, invalid, focus, value, disabled } = props

  return cn(
    css.wrapper,
    css[`${size}`],
    disabled && css.disabled,
    invalid && css.invalid,
    fluid && css.fluid,
    focus && css.focus,
    value && css.notEmpty
  )
}
