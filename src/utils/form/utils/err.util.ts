import { Errors, Validations } from 'utils/form'

export const initErrors = <T extends object>(data: T) => {
  return Object.keys(data).reduce((acc, key) => {
    acc[key as keyof T] = { isValid: true }
    return acc
  }, {} as Errors<T>)
}

type Validator = (value: unknown) => { isValid: boolean }
export const validateAll = <T extends object>(values: T, validations: Validations<T>) => {
  return Object.entries(validations).every(([field, validate]) => {
    const validateFn = validate as Validator

    return validateFn(values[field as keyof T]).isValid
  })
}
