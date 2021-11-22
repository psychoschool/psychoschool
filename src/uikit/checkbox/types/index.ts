import { ChangeEvent, FocusEvent, RefObject } from 'react'

export enum Size {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export interface CheckBoxProps {
  id?: string
  name?: string
  label?: string | JSX.Element
  inputRef?: RefObject<HTMLInputElement>
  size?: Size
  className?: string
  readonly?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  checked?: boolean
  // value: string
  valid?: boolean
  invalid?: boolean
  hover?: boolean
  focus?: boolean
  onSelect?: (item: CheckBoxProps) => unknown
  onValueChange?: (value: boolean) => unknown
  onChange?: (event: ChangeEvent<HTMLInputElement>) => unknown
  onFocus?: (event: FocusEvent<HTMLInputElement>) => unknown
  onBlur?: (event: FocusEvent<HTMLInputElement>) => unknown
}
