import React from 'react'
import { useWistia } from 'pages/pay/useWistia'
import css from './styles.scss'

const url = 'kp7cnn109t'
const PayPage = () => {
  useWistia('kp7cnn109t', {
    autoPlay: false
  })

  return (
    <div>
      <iframe
        src={`//fast.wistia.net/embed/iframe/${url}`}
        frameBorder='0'
        scrolling='no'
        className={css.preview}
        name='wistia_embed'
        allowFullScreen
      />

      {/*<div className='wistia_responsive_padding' style={{ padding: '56.25% 0 0 0', position: 'relative' }}>*/}
      {/*  <div*/}
      {/*    className='wistia_responsive_wrapper'*/}
      {/*    style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}*/}
      {/*  >*/}
      {/*    <div*/}
      {/*      className='wistia_embed wistia_async_kp7cnn109t videoFoam=true'*/}
      {/*      style={{ height: '100%', position: 'relative', width: '100%' }}*/}
      {/*    >*/}
      {/*      <div*/}
      {/*        className='wistia_swatch'*/}
      {/*        style={{*/}
      {/*          height: '100%',*/}
      {/*          left: 0,*/}
      {/*          opacity: 0,*/}
      {/*          overflow: 'hidden',*/}
      {/*          position: 'absolute',*/}
      {/*          top: 0,*/}
      {/*          transition: 'opacity 200ms',*/}
      {/*          width: '100%'*/}
      {/*        }}*/}
      {/*      >*/}
      {/*        <img*/}
      {/*          src={`https://fast.wistia.com/embed/medias/${url}/swatch`}*/}
      {/*          style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }}*/}
      {/*          alt='...'*/}
      {/*          aria-hidden='true'*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}

export default PayPage
