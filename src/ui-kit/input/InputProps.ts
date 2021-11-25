import { ChangeEvent, ReactNode, RefObject, FocusEvent, ClipboardEvent, KeyboardEvent } from 'react'

import { Autocomplete } from './types'
import { Size } from './types/size'
import { Type } from './types/type'

export type SectionType = Element | ReactNode | string | ((params: { value: InputValue }) => ReactNode) | undefined

export type InputValue = string

export interface InputProps {
  name?: string
  label?: string
  type?: Type
  size?: Size
  autoComplete?: Autocomplete
  step?: number
  min?: number
  max?: number
  minLength?: number
  maxLength?: number
  tabIndex?: number
  fluid?: boolean
  readOnly?: boolean
  disabled?: boolean
  valid?: boolean
  validity?: 'valid' | 'invalid'
  invalid?: boolean
  hover?: boolean
  focus?: boolean
  invalidText?: string

  // Значение
  defaultValue?: InputValue
  value?: InputValue

  // Секции
  leftSection?: SectionType
  rightSection?: SectionType

  // Callback для правой секции
  rightSectionOnClick?: () => unknown

  // Ссылка
  inputRef?: RefObject<HTMLInputElement>

  // Callback
  onChange?: (event: ChangeEvent<HTMLInputElement>) => unknown
  onValueChange?: (value: InputValue) => unknown
  onFocus?: (event: FocusEvent<HTMLInputElement>) => unknown
  onBlur?: (event: FocusEvent<HTMLInputElement>) => unknown
  onPaste?: (event: ClipboardEvent<HTMLInputElement>) => unknown
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => unknown
}
