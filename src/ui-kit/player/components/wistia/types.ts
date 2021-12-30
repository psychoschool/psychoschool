type Callback = (params: unknown) => void
export interface WistiaPlayer {
  bind: (params: string, cb?: Callback) => void
  unbind: (params: string, cb?: Callback) => void
}
