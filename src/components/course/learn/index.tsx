import React, { useState } from 'react'
import { Preview } from './preview'
import { Listing } from './listing'
import { course } from '../consts'
import css from './styles.scss'

export const Learn = () => {
  const [current, setCurrent] = useState<string>(course.sections[0].lectures[0].video)

  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <Preview videoID={current} />

        <div className={css.info}>
          <h2 className={css.title}>Об этом курсе</h2>
          <p className={css.text}>
            Индивидуальная программа формирования свободной личности. Курс направлен на внутреннюю работу с установками,
            зависимостями, которые мешают быть счастливым и получать удовольствие от жизни.
          </p>
        </div>
      </div>

      <div className={css.listing}>
        <Listing current={current} course={course} onChange={setCurrent} />
      </div>
    </div>
  )
}
