import React, { FC, MouseEvent, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ModalProps } from './types'
import css from './styles.scss'

export const Modal: FC<ModalProps> = props => {
  const { onClose, open, children } = props

  const preventDefault = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [open])

  if (!open) return null

  return createPortal(
    <>
      <div className={css.overlay} onClick={onClose} />

      <div className={css.modal} onClick={preventDefault}>
        {children}
      </div>
    </>,
    document.body
  )
}
