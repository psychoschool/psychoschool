export type ModalId = 'subscribe'
export interface ModalSate {
  data?: unknown
  name: ModalId
  open: boolean
}

export type ModalsCollection = Collection<ModalId, ModalSate>
