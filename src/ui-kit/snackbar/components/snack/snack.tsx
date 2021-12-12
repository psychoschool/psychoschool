import React, { FC, useCallback, useState } from 'react'
import cn from 'classnames'
import { useInterval } from 'utils/useinterval.util'
import { getClassNames } from './utils/cn.util'
import CloseIcon from './icons/close.icon.svg'
import { Props } from './types'
import css from './styles.scss'

export const Snack: FC<Props> = props => {
  const { onClose, ...snack } = props
  const [time, setTime] = useState(snack.autoHideDuration ?? 5)
  const [close, setClose] = useState(false)
  const className = getClassNames(props)

  const handleClose = useCallback(() => {
    setClose(true)

    setTimeout(() => {
      onClose(snack.id)
    }, 400)
  }, [onClose, snack])

  useInterval(() => setTime(time - 1), time ? 1000 : null, handleClose)

  return (
    <div className={cn(className, { [css.close]: close })}>
      <p className={css.content}>{snack.message}</p>
      <button className={css.closeBtn} onClick={handleClose}>
        <CloseIcon className={css.closeIcon} />
      </button>
    </div>
  )
}

Snack.defaultProps = {
  variant: 'default'
}
