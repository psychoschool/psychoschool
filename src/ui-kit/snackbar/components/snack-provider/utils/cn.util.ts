import cn from 'classnames'
import { SnackBarProps } from 'ui-kit/snackbar'
import css from '../styles.scss'

export const getClassNames = (props: SnackBarProps) => {
  const { align, placement } = props

  return cn(css.snackList, css[`${align}`], css[`${placement}`])
}
