import React from 'react'
import { useAppSelector } from 'utils/store.util'
import { selectCourses } from 'entities/courses/courses.selector'
import { selectLessons } from 'entities/lessons/lessons.selector'
import { Premium } from 'components/home/premium'
import { LessonsList } from './lessons-list'
import { CoursesList } from './courses-list'
import { Filters } from './filters'

export const Home = () => {
  const courses = useAppSelector(selectCourses)
  const lessons = useAppSelector(selectLessons)

  return (
    <>
      <Filters />

      <Premium />

      <LessonsList title='Продолжить обучение' lessons={lessons} />

      <CoursesList title='Доступные курсы' courses={courses} />
    </>
  )
}
