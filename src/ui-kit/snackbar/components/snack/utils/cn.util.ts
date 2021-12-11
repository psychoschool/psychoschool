import cn from 'classnames'
import { SnackProps } from 'ui-kit/snackbar'
import css from '../styles.scss'

export const getClassNames = (props: SnackProps) => {
  const { type } = props
  return cn(css.snack, css[`${type}`])
}
