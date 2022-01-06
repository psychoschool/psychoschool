import React, { FC, useState } from 'react'
import ReactPlayer from 'react-player'
import { PlayerProps } from './types'
import css from './styles.scss'

export const Player: FC<PlayerProps> = ({ provider, url, autoPlay, controls, muted, onEnded, onPause, onPlay }) => {
  const [duration, setDuration] = useState(0)

  const onReady = (player: ReactPlayer) => {
    setDuration(player.getDuration())
  }

  const onProgress = (state: { played: number; playedSeconds: number }) => {
    const gap = provider === 'youtube' ? 15 : 1
    if (duration - state.playedSeconds <= gap) onEnded?.()
  }

  if (!['wistia', 'youtube'].includes(provider)) return null

  return (
    <div className={css.player}>
      <ReactPlayer
        url={url}
        muted={muted}
        controls={controls}
        playing={autoPlay}
        onPlay={onPlay}
        onEnded={onEnded}
        onPause={onPause}
        onReady={onReady}
        onProgress={onProgress}
        width='100%'
        height='100%'
      />
    </div>
  )
}

Player.defaultProps = {
  autoPlay: false,
  controls: true,
  muted: false,
  onReady: () => {},
  onPlay: () => {},
  onPause: () => {},
  onEnded: () => {}
}
