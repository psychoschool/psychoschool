import React, { useState } from 'react'
import { Button } from 'ui-kit/button'
import { Question } from './question'
import { test } from './consts'
import css from './styles.scss'

export const Test = () => {
  const [current, setCurrent] = useState(0)
  const next = () => setCurrent(current + 1)
  const prev = () => setCurrent(current - 1)

  return (
    <div className={css.wrapper}>
      <div style={{ transform: `translateY(-${current}00%)` }} className={css.slider}>
        {test.questions.map(question => (
          <div key={question.name} className={css.slide}>
            <Question
              question={question}
              actions={
                <div className={css.actions}>
                  <Button disabled={current === 0} text='Назад' onClick={prev} />
                  <Button disabled={current === test.questions.length - 1} text='Далее' onClick={next} />
                </div>
              }
            />
          </div>
        ))}
      </div>
    </div>
  )
}
