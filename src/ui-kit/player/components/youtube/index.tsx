import React, { FC } from 'react'
import ReactYT, { Options } from 'react-youtube'
import { PlayerProps } from 'ui-kit/player/types'
import { MATCH_URL_YOUTUBE } from 'ui-kit/player/utils'
import css from '../../styles.scss'

export const Youtube: FC<Omit<PlayerProps, 'provider'>> = ({
  autoPlay,
  controls,
  muted,
  onReady,
  url,
  onPlay,
  onPause,
  onEnded
}) => {
  const videoId = url.match(MATCH_URL_YOUTUBE)?.[1]
  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: autoPlay ? 1 : 0,
      controls: controls ? 1 : 0,
      mute: muted ? 1 : 0
    }
  } as Options

  return (
    <ReactYT
      className={css.player}
      videoId={videoId}
      opts={opts}
      onReady={onReady}
      onPlay={onPlay}
      onPause={onPause}
      onEnd={onEnded}
    />
  )
}
