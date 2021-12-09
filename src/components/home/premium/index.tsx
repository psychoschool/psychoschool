import React, { FC } from 'react'
import { CoursesCollection } from 'entities/courses/courses.type'
import preview from './bg.jpg'
import css from './styles.scss'
import { Button } from 'ui-kit/button'

interface Props {
  courses: CoursesCollection
}
export const Premium: FC<Props> = ({ courses }) => {
  const course = courses['1']
  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Рекомендуемый курс</h3>

      <div className={css.course}>
        <img src={preview} className={css.image} alt='...' />
        <div className={css.info}>
          <div className={css.grid}>
            <h2>{course.title}</h2>
            <p>
              Индивидуальная программа формирования свободной личности. Курс направлен на внутреннюю работу с
              установками, зависимостями, которые мешают быть счастливым и получать удовольствие от жизни.
            </p>
          </div>

          <div className={css.button}>
            <Button size='medium' text='Начать курс' />
          </div>
        </div>
      </div>
    </div>
  )
}
