import { Validations } from 'utils/form'

interface FormData {
  firstName: string
  email: string
  phone: string
  password: string
}

export const validation: Validations<FormData> = {
  firstName: value => ({ isValid: value.length > 3 }),
  email: value => ({ isValid: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) }),
  phone: value => ({ isValid: !isNaN(parseInt(value)) }),
  password: value => ({ isValid: value.length > 5 })
}
