import { ChangeEvent, useState } from 'react'
import { Errors, Validations } from './types'
import { initErrors, validateAll } from './utils/err.util'

export const useForm = <T extends object, K extends keyof T>(formData: T, validation: Validations<T>) => {
  const [values, setValues] = useState(formData)
  const [errors, setError] = useState<Errors<T>>(initErrors(formData))
  const [valid, setValid] = useState(false)

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.name as K

    setValues(data => ({ ...data, [field]: event.target.value }))
    validateError(field)
    setValid(validateAll(values, validation))
  }

  const validateError = (field: K) => {
    const value = values[field]
    const error = validation[field]?.(value)

    setError(errors => ({ ...errors, [field]: error }))
  }

  return { values, setValue: changeHandler, errors, isValid: valid }
}
