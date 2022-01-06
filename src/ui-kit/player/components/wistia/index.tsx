import React, { FC, useCallback, useEffect, useState } from 'react'
import { useScript } from 'utils/script.util'
import { PlayerProps } from 'ui-kit/player/types'
import { MATCH_URL_WISTIA } from '../../utils'
import { WistiaPlayer } from 'ui-kit/player/components/wistia/types'

export const Wistia: FC<Omit<PlayerProps, 'provider'>> = ({
  autoPlay,
  controls,
  muted,
  onReady,
  url,
  onPlay,
  onPause,
  onEnded
}) => {
  useScript('https://fast.wistia.com/assets/external/E-v1.js')
  const [player, setPlayer] = useState<WistiaPlayer | null>(null)
  const videoID = url.match(MATCH_URL_WISTIA)?.[1]
  const style = { width: '100%', height: '100%' }
  const className = `wistia_embed wistia_async_${videoID}`

  const unbind = useCallback(() => {
    if (player) {
      player.unbind('play', onPlay)
      player.unbind('pause', onPause)
      player.unbind('end', onEnded)
    }
  }, [onEnded, onPause, onPlay, player])

  const bind = useCallback(() => {
    if (player) {
      player.bind('play', onPlay)
      player.bind('pause', onPause)
      player.bind('end', onEnded)
    }
  }, [onEnded, onPause, onPlay, player])

  useEffect(() => {
    window._wq = window._wq || []
    window._wq.push({
      id: videoID,
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
  }, [autoPlay, controls, muted, onReady, videoID])

  useEffect(() => {
    if (player) {
      unbind()
      bind()
    }

    return unbind
  }, [player, bind, unbind])

  return <div style={style} id={videoID} className={className} />
}
