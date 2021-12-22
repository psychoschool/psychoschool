import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Course } from 'components/course'
import { useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from 'utils/store.util'
import { useCourseActions } from 'entities/courses/courses.slice'
import { selectCourse, selectCourseMeta } from 'entities/courses/courses.selector'

const CoursePage = () => {
  const { courseUrl } = useParams()
  const dispatch = useAppDispatch()
  const { getCourseByUrl } = useCourseActions(dispatch)
  const course = useAppSelector(selectCourse)
  const { status } = useAppSelector(selectCourseMeta)

  useEffect(() => {
    if (courseUrl) getCourseByUrl(courseUrl)
  }, [courseUrl, getCourseByUrl])

  if (!courseUrl || (status === 'failed' && !course)) return <h3>Курс не найден</h3>

  return (
    <>
      <Helmet>
        <title>Курс</title>
      </Helmet>

      {course && <Course course={course} />}
    </>
  )
}

export default CoursePage
