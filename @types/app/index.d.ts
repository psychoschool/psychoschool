type Collection<TypeId extends string | number, T> = Record<TypeId, T>
interface Response<T> {
  result: T
}

type Nullable<T> = T | null
type Callback = (params: unknown) => void
interface WistiaPlayer {
  bind: (params: string, cb?: Callback) => void
  unbind: (params: string, cb?: Callback) => void
}

interface Window {
  IS_DEV: boolean
  _wq: Array<{
    id: string
    options: object
    onReady: (player: WistiaPlayer) => void
  }>
}
