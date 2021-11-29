import React, { FC } from 'react'
import { RequirementsCollection } from 'entities/courses/courses.type'
import { Button } from 'ui-kit/button'

interface Props {
  requirements: RequirementsCollection
}
export const Action: FC<Props> = ({ requirements }) => {
  if (!requirements.auth) return <Button to='login' text='Войти' />

  return <Button href='https://psychoschool.ru/' target='_blank' text='Купить' />
}
