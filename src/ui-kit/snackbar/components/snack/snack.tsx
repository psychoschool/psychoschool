import React, { FC, useCallback, useState } from 'react'
import { v4 as uuid } from 'uuid'
import cn from 'classnames'
import { useInterval } from 'utils/useinterval.util'
import { getClassNames } from './utils/cn.util'
import { Props } from './types'
import css from './styles.scss'

export const Snack: FC<Props> = props => {
  const { onClose, ...snack } = props
  const className = getClassNames(props)
  const [time, setTime] = useState(255)
  const [close, setClose] = useState(false)

  const handleClose = useCallback(() => {
    setClose(true)

    setTimeout(() => {
      onClose(snack)
    }, 400)
  }, [onClose, snack])

  useInterval(() => setTime(time - 1), time ? 1000 : null, handleClose)

  return (
    <div className={cn(className, { [css.close]: close })}>
      <p className={css.content}>{props.message}</p>
      <button onClick={handleClose}>close</button>
    </div>
  )
}

Snack.defaultProps = {
  id: uuid(),
  type: 'default'
}
