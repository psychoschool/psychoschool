export interface PlayerProps {
  provider: 'youtube' | 'wistia'
  url: string
  autoPlay?: boolean
  muted?: boolean
  controls?: boolean
  config?: {
    playerId: string
    options: object
  }
  onPlay?: (params: unknown) => void
  onPause?: (params: unknown) => void
  onSeek?: (params: unknown) => void
  onEnded?: (params: unknown) => void
  onReady?: (params?: unknown) => void
  onPlaybackRateChange?: (params: unknown) => void
}
