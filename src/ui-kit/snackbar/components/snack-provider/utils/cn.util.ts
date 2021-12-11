import cn from 'classnames'
import { SnackBarProps } from 'ui-kit/snackbar'
import css from '../styles.scss'

export const getClassNames = (props: SnackBarProps) => {
  const { anchorOrigin } = props

  return cn(css.snackList, css[`${anchorOrigin?.horizontal}`], css[`${anchorOrigin?.vertical}`])
}
