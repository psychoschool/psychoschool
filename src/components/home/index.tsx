import React from 'react'
import { Filters } from './filters'
import { Premium } from './premium'
import { CoursesList } from './courses-list'
import { courses } from './consts'

export const Home = () => {
  const primaryCourses = courses.find(c => c.type === 'premium')

  return (
    <>
      <Filters />

      {primaryCourses && <Premium courses={primaryCourses.courses} />}

      {courses.map(s => (
        <CoursesList key={s.title} type={s.type} title={s.title} courses={s.courses} />
      ))}
    </>
  )
}
