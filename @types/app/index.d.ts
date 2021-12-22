type Collection<TypeId extends string | number, T> = Record<TypeId, T>
interface Response<T> {
  data: T
}

interface Window {
  IS_DEV: boolean
}
