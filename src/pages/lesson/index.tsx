import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from 'utils/store.util'
import { useCourseActions } from 'entities/courses/courses.slice'
import { selectCourse } from 'entities/courses/courses.selector'
import { Lesson } from 'components/lesson'

const LessonPage = () => {
  const { courseId } = useParams()
  const dispatch = useAppDispatch()
  const { getCourseById } = useCourseActions(dispatch)
  const course = useAppSelector(selectCourse)

  useEffect(() => {
    if (courseId) getCourseById(courseId)
  }, [courseId, getCourseById])

  if (!courseId) return <h3>Курс не найден</h3>

  return (
    <>
      <Helmet>
        <title>Lesson</title>
      </Helmet>

      {course && <Lesson course={course} />}
    </>
  )
}

export default LessonPage
