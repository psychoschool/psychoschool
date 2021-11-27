import { PlacementStyles } from 'ui-kit/popper/components/propper-container/types'

export const getPlacementPortalStyles = (placementStyles: PlacementStyles, rootRect: ClientRect) => {
  const { top: rootTop, bottom: rootBottom, left: rootLeft, right: rootRight } = rootRect
  const top = window.scrollY + rootTop
  const bottom = document.documentElement.clientHeight - window.scrollY - rootBottom
  const left = window.scrollX + rootLeft
  const right = document.documentElement.clientWidth - window.scrollX - rootRight

  const adds: { [key: string]: number } = { top, bottom, left, right }

  return Object.entries(placementStyles).reduce(
    (styles, [k, v]) => ({
      ...styles,
      [k]: typeof v === 'number' ? v + (adds[k] || 0) : v
    }),
    {}
  )
}
