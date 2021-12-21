import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'utils/store.util'
import { useCourseActions } from 'entities/courses/courses.slice'
import { selectCourses } from 'entities/courses/courses.selector'
import { Premium } from 'components/home/premium'
import { CoursesList } from './courses-list'
import { Filters } from './filters'

export const Home = () => {
  const dispatch = useAppDispatch()
  const { getCourses } = useCourseActions(dispatch)
  const courses = useAppSelector(selectCourses)

  useEffect(() => {
    getCourses()
  }, [getCourses])

  return (
    <>
      <Filters />

      <Premium />

      <CoursesList title='Доступные курсы ' courses={courses} />
    </>
  )
}
