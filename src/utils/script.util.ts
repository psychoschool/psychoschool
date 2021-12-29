import { useEffect, useState } from 'react'

type Status = 'idle' | 'loading' | 'ready' | 'error'
export const useScript = (src: string) => {
  const [status, setStatus] = useState<Status>(src ? 'loading' : 'idle')

  useEffect(() => {
    if (!src) return setStatus('idle')

    let script: HTMLScriptElement | null = document.querySelector(`script[src="${src}"]`)
    if (!script) {
      script = document.createElement('script')
      script.src = src
      script.async = true
      script.setAttribute('data-status', 'loading')

      document.body.appendChild(script)
      const setAttributeFromEvent = (event: Event) => {
        script?.setAttribute('data-status', event.type === 'load' ? 'ready' : 'error')
      }
      script.addEventListener('load', setAttributeFromEvent)
      script.addEventListener('error', setAttributeFromEvent)
    } else {
      setStatus(script.getAttribute('data-status') as Status)
    }

    const setStateFromEvent = (event: Event) => {
      setStatus(event.type === 'load' ? 'ready' : 'error')
    }

    script.addEventListener('load', setStateFromEvent)
    script.addEventListener('error', setStateFromEvent)

    return () => {
      if (script) {
        script.removeEventListener('load', setStateFromEvent)
        script.removeEventListener('error', setStateFromEvent)
      }
    }
  }, [src])

  return status
}
