import cn from 'classnames'
import { ChipProps } from '../types'
import css from '../styles.scss'

export const getClassnames = (props: ChipProps) => {
  const { size, color, variant, active } = props

  return cn(css.wrapper, css[`${size}`], css[`${color}`], css[`${variant}`], active && css.active)
}
