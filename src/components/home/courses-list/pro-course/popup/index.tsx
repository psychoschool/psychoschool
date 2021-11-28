import React, { FC } from 'react'
import { Course } from 'entities/courses/courses.type'
import DoneIcon from './icons/done.icon.svg'
import css from './styles.scss'
import { Button } from 'ui-kit/button'

interface Props {
  course: Course
}
export const Popup: FC<Props> = ({ course }) => {
  const { title, requirements } = course
  return (
    <div className={css.popup}>
      <h4 className={css.title}>{title}</h4>
      <p className={css.info}>Чтобы начать этот курс вам необходимо сделать следующеее</p>

      <hr className={css.divider} />

      <ul className={css.list}>
        <li className={css.item}>
          <DoneIcon className={css.icon} />
          Авторизоваться на сайте
        </li>
        <li className={css.item}>
          <DoneIcon className={css.icon} />
          Оплатить курс
        </li>
        <li className={css.item}>
          <DoneIcon className={css.icon} />
          Пройти тест
        </li>
      </ul>

      <Button size='small' disabled text='начать курс' />
    </div>
  )
}
