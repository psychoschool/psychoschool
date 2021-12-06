import React, { FC } from 'react'
import { Checkbox } from 'ui-kit/checkbox'
import { useAppSelector } from 'utils/store.util'
import { IQuestion } from 'entities/courses/courses.type'
import { selectIsMobile } from 'entities/ui/screen/screen.selector'
import css from './styles.scss'

interface Props {
  question: IQuestion
  actions: JSX.Element
}
export const Question: FC<Props> = ({ question, actions }) => {
  const isMobile = useAppSelector(selectIsMobile)
  const size = isMobile ? 'small' : 'medium'

  return (
    <div className={css.wrapper}>
      <h3 className={css.question}>{question.name}</h3>
      <ul>
        {question.answers.map(a => (
          <li key={a.name} className={css.answer}>
            <Checkbox size={size} label={a.name} />
          </li>
        ))}
      </ul>

      {actions}
    </div>
  )
}
