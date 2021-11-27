interface AnyEvent extends MouseEvent {
  path: Array<EventTarget>
}
export const isClickOutside = (rootElement: HTMLElement[], event: MouseEvent) => {
  const path = event.composedPath?.() || (event as AnyEvent).path

  if (path) {
    return !rootElement.some(el => path.includes(el))
  }
  const targetElement = event.relatedTarget || event.target

  if (targetElement) {
    return !rootElement.some(el => el?.contains(targetElement as Node))
  }

  return true
}
