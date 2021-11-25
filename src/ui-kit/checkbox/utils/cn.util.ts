import cn from 'classnames'
import { CheckBoxProps } from '../types'
import css from '../styles.scss'

export const getClassNames = (props: CheckBoxProps) => {
  const { size, invalid, checked, disabled } = props

  return cn(css.wrapper, css[`${size}`], checked && css.checked, disabled && css.disabled, invalid && css.invalid)
}
