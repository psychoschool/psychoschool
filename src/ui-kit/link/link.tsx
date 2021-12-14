import React, { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { useTheme } from 'utils/theme'
import { hexToRgb } from 'utils/hex.util'
import { addNoopenerNoreferredToRel } from './utils/refered.util'
import { getClassNames } from './utils/cn.util'
import { LinkProps } from './types'

export const Link: FC<LinkProps> = props => {
  const { href, children, onClick, target, rel, tabIndex, download, linkTo } = props
  const className = getClassNames(props)
  const { themeVars } = useTheme()
  const primaryColor = hexToRgb(themeVars.palette.primary.main)
  const rgba = `rgba(${primaryColor}, 0.4)`
  const style = { textDecorationColor: rgba }

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

  if (href)
    return (
      <a {...linkProps} style={style}>
        {children}
      </a>
    )

  if (linkTo) {
    return (
      <RouterLink style={style} className={className} to={linkTo} role='button' onClick={onClick}>
        {children}
      </RouterLink>
    )
  }

  return (
    <button type='button' style={style} className={className} {...additionalProps}>
      {children}
    </button>
  )
}

Link.defaultProps = {
  size: 'medium'
}
