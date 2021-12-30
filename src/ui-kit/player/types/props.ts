export interface PlayerProps {
  provider: 'youtube' | 'wistia'
  url: string
  autoPlay?: boolean
  muted?: boolean
  controls?: boolean
  onPlay?: (params: unknown) => void
  onPause?: (params: unknown) => void
  onEnded?: (params: unknown) => void
  onReady?: (params?: unknown) => void
}
