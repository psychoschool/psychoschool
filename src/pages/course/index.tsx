import React from 'react'
import { Helmet } from 'react-helmet'
import { Course } from 'components/course'

const CoursePage = () => {
  return (
    <>
      <Helmet>
        <title>Курс</title>
      </Helmet>

      <Course />
    </>
  )
}

export default CoursePage
