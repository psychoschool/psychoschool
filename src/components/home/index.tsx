import React from 'react'
import { CoursesList } from './courses-list'
import { Filters } from './filters'
import { courses } from './consts'

export const Home = () => {
  return (
    <>
      <Filters />

      {courses.map(s => (
        <CoursesList key={s.title} title={s.title} courses={s.courses} />
      ))}
    </>
  )
}
