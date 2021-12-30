import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { CheckBoxProps, Size } from './types'
import { getClassNames } from './utils/cn.util'
import DoneIcon from './done.icon.svg'
import css from './styles.scss'

export const Checkbox: FC<CheckBoxProps> = props => {
  const { label, disabled, onValueChange, checked } = props
  const [value, setValue] = useState(checked)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked)
    onValueChange?.(e.target.checked)
  }

  useEffect(() => {
    setValue(checked)
  }, [checked])

  return (
    <div className={getClassNames({ ...props, checked: value })}>
      <label className={css.label}>
        <div className={css.checkboxWrapper}>
          <input
            type='checkbox'
            className={css.checkbox}
            onChange={handleChange}
            value={`${value}`}
            disabled={disabled}
          />

          <DoneIcon className={css.checkedIcon} />
        </div>
        {label}
      </label>
    </div>
  )
}

Checkbox.defaultProps = {
  size: 'medium',
  checked: false
}
