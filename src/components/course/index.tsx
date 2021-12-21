import React, { FC } from 'react'
import { Course as TCourse } from 'entities/courses/courses.types'
import { Learn } from './learn'

interface Props {
  course: TCourse
}

export const Course: FC<Props> = ({ course }) => {
  // if (!testPassed) return <Test />
  return <Learn course={course} />
}
