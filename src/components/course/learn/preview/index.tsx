import React, { FC, useState } from 'react'
import css from './styles.scss'

interface Props {
  videoID: string
}
export const Preview: FC<Props> = ({ videoID }) => {
  const [showFrame, setShowFrame] = useState(false)

  return (
    <div className={css.video} onClick={() => setShowFrame(true)}>
      {showFrame ? (
        <iframe
          className={css.preview}
          src={`https://www.youtube.com/embed/${videoID}?autoplay=1&rel=0`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      ) : (
        <>
          <picture>
            <source srcSet={`https://i.ytimg.com/vi_webp/${videoID}/maxresdefault.webp`} type='image/webp' />
            <img
              src={`https://i.ytimg.com/vi/${videoID}/maxresdefault.jpg`}
              className={css.preview}
              alt='video preview'
            />
          </picture>

          <button className={css.playBtn} aria-label='Play video'>
            <svg height='100%' version='1.1' viewBox='0 0 68 48' width='100%'>
              <path
                className={css.playBtnShape}
                d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z'
              />
              <path d='M 45,24 27,14 27,34' fill='#fff' />
            </svg>
          </button>
        </>
      )}
    </div>
  )
}
