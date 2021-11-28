import React, { FC } from 'react'
import DoneIcon from './icons/done.icon.svg'
import CloseIcon from './icons/close.icon.svg'
import css from './styles.scss'

interface Props {
  status?: boolean
}
export const Status: FC<Props> = ({ status = false }) => {
  if (status) return <DoneIcon className={css.done} />
  return <CloseIcon className={css.nope} />
}
