export interface PlayerProps {
  provider: 'youtube' | 'wistia'
  url: string
  autoPlay?: boolean
  muted?: boolean
  controls?: boolean
  onPlay?: () => void
  onPause?: () => void
  onEnded?: () => void
  onReady?: (params?: unknown) => void
}
