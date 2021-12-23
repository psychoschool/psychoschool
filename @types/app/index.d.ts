type Collection<TypeId extends string | number, T> = Record<TypeId, T>
interface Response<T> {
  data: T
}

type Nullable<T> = T | null

interface Window {
  IS_DEV: boolean
}
