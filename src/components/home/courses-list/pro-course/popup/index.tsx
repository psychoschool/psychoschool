import React, { FC } from 'react'
import { CourseItem, Requirements } from 'entities/courses/courses.type'
import { normalizeTitle } from './normalize.util'
import { Status } from './status'
import { Action } from './action'
import css from './styles.scss'

interface Props {
  course: Required<CourseItem>
}
export const Popup: FC<Props> = ({ course }) => {
  const { title, requirements } = course

  return (
    <div className={css.popup}>
      <h4 className={css.title}>{title}</h4>
      <p className={css.info}>Чтобы начать этот курс вам необходимо сделать следующеее</p>

      <hr className={css.divider} />

      <ul className={css.list}>
        {Object.entries(requirements).map(([key, value]) => (
          <li key={key} className={css.item}>
            <Status status={value} />
            {normalizeTitle(key as Requirements)}
          </li>
        ))}
      </ul>

      <Action requirements={requirements} />
    </div>
  )
}
