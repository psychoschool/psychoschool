import cn from 'classnames'
import { InputProps } from '../types'
import { ThemeName } from 'utils/theme/theme.types'
import css from '../styles.scss'

export const getClassNames = (props: InputProps & { theme: ThemeName }) => {
  const { size, fluid, invalid, focus, value, disabled, theme } = props

  return cn(
    css.wrapper,
    css[`${size}`],
    disabled && css.disabled,
    invalid && css.invalid,
    fluid && css.fluid,
    focus && css.focus,
    value && css.notEmpty,
    theme === 'dark' && css.dark
  )
}
