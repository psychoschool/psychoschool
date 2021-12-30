import React, { FC } from 'react'
import { PlayerProps } from './types'
import { Wistia, Youtube } from './components'
import css from './styles.scss'

export const Player: FC<PlayerProps> = ({
  provider,
  url,
  autoPlay,
  controls,
  muted,
  onReady,
  onEnded,
  onPause,
  onPlay
}) => {
  return (
    <div className={css.player}>
      {provider === 'wistia' && (
        <Wistia
          url={url}
          autoPlay={autoPlay}
          muted={muted}
          controls={controls}
          onReady={onReady}
          onEnded={onEnded}
          onPause={onPause}
          onPlay={onPlay}
        />
      )}

      {provider === 'youtube' && (
        <Youtube
          url={url}
          muted={muted}
          autoPlay={autoPlay}
          controls={controls}
          onReady={onReady}
          onEnded={onEnded}
          onPause={onPause}
          onPlay={onPlay}
        />
      )}
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
