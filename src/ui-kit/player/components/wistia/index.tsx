import React, { FC, useCallback, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useScript } from 'utils/script.util'
import { PlayerProps } from 'ui-kit/player/types'
import { MATCH_URL_WISTIA } from '../../utils'
import { WistiaPlayer } from 'ui-kit/player/components/wistia/types'

export const Wistia: FC<PlayerProps> = ({
  autoPlay,
  controls,
  muted,
  onReady,
  url,
  onPlay,
  onPause,
  onSeek,
  onEnded,
  onPlaybackRateChange
}) => {
  useScript('https://fast.wistia.com/assets/external/E-v1.js')
  const [player, setPlayer] = useState<WistiaPlayer | null>(null)
  const videoID = url.match(MATCH_URL_WISTIA)?.[1]
  const playerID = videoID || uuid()
  const style = { width: '100%', height: '100%' }
  const className = `wistia_embed wistia_async_${videoID}`

  const unbind = useCallback(() => {
    if (player) {
      player.unbind('play', onPlay)
      player.unbind('pause', onPause)
      player.unbind('seek', onSeek)
      player.unbind('end', onEnded)
      player.unbind('playbackratechange', onPlaybackRateChange)
    }
  }, [onEnded, onPause, onPlay, onPlaybackRateChange, onSeek, player])

  const bind = useCallback(() => {
    if (player) {
      player.bind('play', onPlay)
      player.bind('pause', onPause)
      player.bind('seek', onSeek)
      player.bind('end', onEnded)
      player.bind('playbackratechange', onPlaybackRateChange)
    }
  }, [onEnded, onPause, onPlay, onPlaybackRateChange, onSeek, player])

  useEffect(() => {
    window._wq = window._wq || []
    window._wq.push({
      id: playerID,
      options: {
        autoPlay,
        silentAutoPlay: 'allow',
        muted,
        controlsVisibleOnLoad: controls,
        fullscreenButton: controls,
        playbar: controls,
        playbackRateControl: controls,
        qualityControl: controls,
        volumeControl: controls,
        settingsControl: controls,
        smallPlayButton: controls
      },
      onReady: player => {
        setPlayer(player)
        onReady?.()
      }
    })
  }, [autoPlay, controls, muted, onReady, playerID])

  useEffect(() => {
    if (player) {
      unbind()
      bind()
    }

    return unbind
  }, [player, bind, unbind])

  return <div style={style} id={playerID} key={videoID} className={className} />
}
