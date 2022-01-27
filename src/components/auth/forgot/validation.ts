import { Validations } from 'utils/form'

interface FormData {
  email: string
  password: string
}

export const validation: Validations<FormData> = {
  email: value => ({ isValid: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) }),
  password: value => ({ isValid: value.length > 5 })
}
