import React from 'react'
import { useAppSelector } from 'utils/store.util'
import { selectCourses } from 'entities/courses/courses.selector'
import { Premium } from 'components/home/premium'
import { CoursesList } from './courses-list'
import { Filters } from './filters'

export const Home = () => {
  const courses = useAppSelector(selectCourses)

  return (
    <>
      <Filters />

      <Premium />

      <CoursesList title='Продолжить обучение' type='lesson' courses={courses} />

      <CoursesList title='Доступные курсы' type='course' courses={courses} />
    </>
  )
}
