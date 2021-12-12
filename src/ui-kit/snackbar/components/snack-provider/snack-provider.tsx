import React, { FC } from 'react'
import { Snack } from '../snack'
import { SnackBarProps } from './types'
import { getClassNames } from './utils/cn.util'

export const SnackProvider: FC<SnackBarProps> = props => {
  const { children, snacks, onRemoveSnack } = props
  const className = getClassNames(props)

  return (
    <>
      <div className={className}>
        {Object.entries(snacks).map(([id, snack]) => (
          <Snack onClose={onRemoveSnack} key={id} {...snack} />
        ))}
      </div>
      {children}
    </>
  )
}

SnackProvider.defaultProps = {
  maxSnack: 3,
  anchorOrigin: {
    horizontal: 'right',
    vertical: 'top'
  }
}
