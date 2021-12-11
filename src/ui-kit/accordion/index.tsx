import React, { FC, useState } from 'react'
import cn from 'classnames'
import { useTheme } from 'utils/theme'
import ArrowIcon from './icons/arrow-forward.icon.svg'
import css from './styles.scss'

interface Props {
  expanded?: boolean
  onChange?: (expanded: boolean) => void
}
export const Accordion: FC<Props> = ({ children: childrenProp, expanded = false, onChange }) => {
  const [summary, ...children] = React.Children.toArray(childrenProp)
  const [theme] = useTheme()
  const [open, setOpen] = useState(expanded)

  const handleChange = () => {
    setOpen(!open)
    onChange?.(!open)
  }

  return (
    <div
      className={cn(css.accordion, {
        [css.dark]: theme === 'dark',
        [css.hidden]: !open
      })}
    >
      <div className={css.summary} onClick={handleChange}>
        {summary}

        <ArrowIcon className={css.icon} />
      </div>

      <div className={css.collapse}>
        <div className={css.details}>{children}</div>
      </div>
    </div>
  )
}
