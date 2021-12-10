import cn from 'classnames'
import { ThemeName } from 'utils/theme/theme.types'
import { LinkProps } from '../types'
import css from '../styles.scss'

export const getClassNames = (props: LinkProps & { theme: ThemeName }) => {
  const { size, theme } = props

  return cn(css.wrapper, css[`${size}`], theme === 'dark' && css.dark)
}
