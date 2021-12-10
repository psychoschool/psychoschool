import React, { useContext, FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { ThemeContext } from 'utils/theme'
import { addNoopenerNoreferredToRel } from './utils/refered.util'
import { getClassNames } from './utils/cn.util'
import { LinkProps } from './types'

export const Link: FC<LinkProps> = props => {
  const { href, children, onClick, target, rel, tabIndex, download, linkTo } = props
  const { theme } = useContext(ThemeContext)

  const additionalProps = {
    onClick: onClick,
    role: !href && onClick ? 'button' : undefined,
    tabIndex
  }

  const linkProps = {
    target,
    rel: href && addNoopenerNoreferredToRel(rel),
    href,
    download,
    ...additionalProps
  }

  const className = getClassNames({ ...props, theme })

  if (href) return <a {...linkProps}>{children}</a>

  if (linkTo) {
    return (
      <RouterLink className={className} to={linkTo} role='button' onClick={onClick}>
        {children}
      </RouterLink>
    )
  }

  return (
    <button type='button' className={className} {...additionalProps}>
      {children}
    </button>
  )
}

Link.defaultProps = {
  size: 'medium'
}
