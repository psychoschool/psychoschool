import React from 'react'
import { Helmet } from 'react-helmet'
import { Course } from 'components/course'
import { useParams } from 'react-router'

const CoursePage = () => {
  const { courseId } = useParams()

  if (!courseId) return <h3>Курс не найден</h3>

  return (
    <>
      <Helmet>
        <title>Курс</title>
      </Helmet>

      <Course courseId={courseId} />
    </>
  )
}

export default CoursePage
