import React, { FC } from 'react'
import { Button } from 'ui-kit/button'
import preview from './bg.jpg'
import css from './styles.scss'

export const Premium: FC = () => {
  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Рекомендуемый курс</h3>

      <div className={css.course}>
        <img src={preview} className={css.image} alt='...' />
        <div className={css.info}>
          <div className={css.grid}>
            <h2>Шаг к свободе</h2>
            <p>
              Индивидуальная программа формирования свободной личности. Курс направлен на внутреннюю работу с
              установками, зависимостями, которые мешают быть счастливым и получать удовольствие от жизни.
            </p>
          </div>

          <div className={css.button}>
            <Button href='https://shag.psychoschool.ru' target='_blank' size='medium' text='Начать курс' />
          </div>
        </div>
      </div>
    </div>
  )
}
