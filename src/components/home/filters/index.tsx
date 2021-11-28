import React from 'react'
import { Chip } from 'ui-kit/chip'
import { tags } from './consts'
import css from './styles.scss'

export const Filters = () => {
  return (
    <div className={css.chipsWrapper}>
      <ul className={css.chips}>
        {tags.map((tag, index) => (
          <Chip key={tag} label={tag} active={index === 0} />
        ))}
      </ul>
    </div>
  )
}
