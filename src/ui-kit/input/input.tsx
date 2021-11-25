import React, { FC, ChangeEvent, FocusEvent, createRef, useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { useOnClickOutside } from 'utils/outside.util'
import { getClassNames } from './getClassNames'
import { InputProps } from './InputProps'
import css from './styles.scss'

export const Input: FC<InputProps> = props => {
  const {
    label,
    value,
    disabled,
    onFocus,
    onChange,
    onValueChange,
    type = 'text',
    defaultValue = '',
    autoComplete = 'off'
  } = props
  const [id, setId] = useState('')
  const [focus, setFocus] = useState(false)
  const [inputValue, setInputValue] = useState(defaultValue)
  const inputRef = createRef<HTMLInputElement>()

  useEffect(() => {
    setId(uuid())
  }, [])

  useOnClickOutside(inputRef, () => {
    setFocus(false)
  })

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setFocus(true)
    onFocus?.(event)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    onChange?.(event)
    onValueChange?.(event.target.value)
  }

  return (
    <div className={getClassNames({ ...props, value: value ?? inputValue, focus })}>
      <label className={css.label} htmlFor={id}>
        {label}
      </label>

      <div className={css.inputContainer}>
        <input
          ref={inputRef}
          className={css.input}
          id={id}
          type={type}
          value={value ?? inputValue}
          autoComplete={autoComplete}
          disabled={disabled}
          onChange={handleChange}
          onFocus={handleFocus}
        />

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>
            <span>{label}</span>
          </legend>
        </fieldset>
      </div>
    </div>
  )
}
