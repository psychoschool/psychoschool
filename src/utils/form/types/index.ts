export type Validations<T> = {
  [p in keyof T]?: (v: T[p]) => { isValid: boolean; message?: string }
}

export type Errors<T> = {
  [p in keyof T]?: { isValid: boolean; message?: string }
}
