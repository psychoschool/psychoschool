import React from 'react'
import { Listing } from 'components/home/listing'
import css from './styles.scss'

export const Home = () => {
  return (
    <div className={css.wrapper}>
      <picture>
        <source srcSet='https://i.ytimg.com/vi_webp/OugKFoihTpw/maxresdefault.webp' type='image/webp' />
        <img src='https://i.ytimg.com/vi/OugKFoihTpw/maxresdefault.jpg' alt='' />
      </picture>

      <Listing />
    </div>
  )
}
