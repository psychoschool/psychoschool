import { useEffect, useLayoutEffect, useRef } from 'react'

export const useInterval = (callback: () => void, delay: number | null, onEnd?: () => void) => {
  const savedCallback = useRef(callback)

  useLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (!delay && delay !== 0) {
      return onEnd?.()
    }

    const id = setInterval(() => savedCallback.current(), delay)

    return () => clearInterval(id)
  }, [delay, onEnd])
}
