import React, { FC, useContext, useState } from 'react'
import cn from 'classnames'
import { ThemeContext } from 'utils/theme'
import css from './styles.scss'

interface Props {
  expanded?: boolean
  title: JSX.Element | string
}
export const Accordion: FC<Props> = ({ title, children, expanded = false }) => {
  const { theme } = useContext(ThemeContext)
  const [open, setOpen] = useState(expanded)

  return (
    <div className={css.accordion}>
      <div className={cn(css.summary, { [css.dark]: theme === 'dark' })} onClick={() => setOpen(!open)}>
        {title}
      </div>

      <div className={cn(css.collapse, { [css.hidden]: !open })}>
        <div className={css.details}>{children}</div>
      </div>
    </div>
  )
}

// <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//   <AccordionSummary>
//     <Typography>Collapsible Group Item #1</Typography>
//   </AccordionSummary>
//   <AccordionDetails>
//     <Typography>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//       malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
//       sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//       sit amet blandit leo lobortis eget.
//     </Typography>
//   </AccordionDetails>
// </Accordion>
