import React, { FC } from 'react'
import { CourseId } from 'entities/courses/courses.type'
import { getDebugger } from 'utils/debugger.util'
import { passedTest } from './test.util'

import { courses } from './consts'
import { Learn } from './learn'
import { Test } from './test'

interface Props {
  courseId: CourseId
}

const debug = getDebugger('component: Course')
export const Course: FC<Props> = ({ courseId }) => {
  const testPassed = passedTest(courses[courseId])
  debug('courseID %s', courseId)
  debug('testPassed %s', testPassed)

  if (!testPassed) return <Test />
  return <Learn course={courses[courseId]} />
}
