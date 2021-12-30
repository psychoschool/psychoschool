import React, { FC } from 'react'
import { PlayerProps } from './types'
import { Wistia } from 'ui-kit/player/components/wistia'
import css from './styles.scss'

export const Player: FC<PlayerProps> = ({ provider, url }) => {
  return (
    <div className={css.player}>
      {provider === 'wistia' && (
        <Wistia
          provider={provider}
          url={url}
          onReady={() => console.log('ready')}
          onEnded={() => console.log('ended')}
          onPause={() => console.log('onPause')}
          onPlay={() => console.log('onplay')}
        />
      )}
    </div>
  )
}
