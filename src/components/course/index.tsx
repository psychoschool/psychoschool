import React, { FC } from 'react'
import { CourseId } from 'entities/courses/courses.type'
import { getDebugger } from 'utils/debugger.util'
import { passedTest } from './test.util'

import { Test } from './test'
import { Learn } from './learn'
import { course } from './consts'

interface Props {
  courseId: CourseId
}

const debug = getDebugger('component: Course')
export const Course: FC<Props> = ({ courseId }) => {
  const testPassed = passedTest(course)
  debug('courseID %s', courseId)
  debug('testPassed %s', testPassed)

  if (!testPassed) return <Test />
  return <Learn />
}
