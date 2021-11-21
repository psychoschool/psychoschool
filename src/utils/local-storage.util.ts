import { useState, useEffect, useCallback } from 'react'

interface TEvent extends StorageEvent {
  detail: { key: string; value: never }
}

const tryParse = <T>(value: string | null) => {
  try {
    return JSON.parse(value ?? '')
  } catch (err) {
    return value
  }
}

const fireEvent = <T>(payload: { key: string; value: T }) =>
  new CustomEvent('onLocalStorageChange', { detail: payload })

const isTypeOfLocalStorageChanged = <Value>(evt: TEvent, key: string) => evt?.detail?.key === key

export const writeStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : `${value}`)
  dispatchEvent(fireEvent({ key, value }))
}

export function removeFromStorage(key: string) {
  localStorage.removeItem(key)
  dispatchEvent(fireEvent({ key, value: '' }))
}

export function useLocalStorage<T>(key: string, initialValue?: T): [T, (value: T) => void, () => void] {
  const changeState = useCallback((value: T) => writeStorage(key, value), [key])
  const deleteState = useCallback(() => removeFromStorage(key), [key])

  const [localState, setLocalState] = useState<T>(
    localStorage.getItem(key) === null ? (initialValue as T) : tryParse(localStorage.getItem(key))
  )

  const onLocalStorageChange = useCallback(
    (event: TEvent) => {
      if (isTypeOfLocalStorageChanged(event, key)) setLocalState(event.detail.value)
      else if (event.key === key && event.newValue) setLocalState(tryParse(event.newValue))
    },
    [key]
  )

  useEffect(() => {
    setLocalState(localStorage.getItem(key) === null ? (initialValue as T) : tryParse(localStorage.getItem(key)))
  }, [initialValue, key])

  useEffect(() => {
    const listener = (e: Event) => onLocalStorageChange(e as TEvent)

    addEventListener('onLocalStorageChange', listener)
    if (initialValue !== undefined && localStorage.getItem(key) === null) changeState(initialValue)

    return () => {
      removeEventListener('onLocalStorageChange', listener)
    }
  }, [changeState, initialValue, key, onLocalStorageChange])

  const state = localState === null ? (initialValue as T) : localState

  return [state, changeState, deleteState]
}
