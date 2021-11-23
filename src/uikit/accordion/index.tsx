import React, { FC, useContext, useState } from 'react'
import cn from 'classnames'
import { ThemeContext } from 'utils/theme'
import ArrowIcon from './icons/arrow-forward.icon.svg'
import css from './styles.scss'

interface Props {
  expanded?: boolean
  title: JSX.Element | string
  onChange?: (expanded: boolean) => void
}
export const Accordion: FC<Props> = ({ title, children, expanded = false, onChange }) => {
  const { theme } = useContext(ThemeContext)
  const [open, setOpen] = useState(expanded)

  const handleChange = () => {
    setOpen(!open)
    onChange?.(!open)
  }

  return (
    <div className={cn(css.accordion, { [css.hidden]: !open })}>
      <div className={cn(css.summary, { [css.dark]: theme === 'dark' })} onClick={handleChange}>
        {title}

        <ArrowIcon className={css.icon} />
      </div>

      <div className={css.collapse}>
        <div className={css.details}>{children}</div>
      </div>
    </div>
  )
}
