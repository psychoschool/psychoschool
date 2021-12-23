import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Course } from 'components/course'
import { useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from 'utils/store.util'
import { useCourseActions } from 'entities/courses/courses.slice'
import { selectCourse, selectCourseMeta } from 'entities/courses/courses.selector'
import { useLessonActions } from 'entities/lessons/lessons.slice'
import { selectCurrentUser } from 'entities/user/user.selector'
import { selectAuth } from 'entities/auth/auth.selector'

const CoursePage = () => {
  const { courseUrl } = useParams()
  const dispatch = useAppDispatch()
  const { getCourseByUrl } = useCourseActions(dispatch)
  const course = useAppSelector(selectCourse)
  const { status } = useAppSelector(selectCourseMeta)

  const { getUserLessonByUrl } = useLessonActions(dispatch)
  const user = useAppSelector(selectCurrentUser)
  const { authorized } = useAppSelector(selectAuth)

  useEffect(() => {
    if (courseUrl) getCourseByUrl(courseUrl)
  }, [courseUrl, getCourseByUrl])

  useEffect(() => {
    if (authorized && user && courseUrl) {
      getUserLessonByUrl({ userId: user.id, url: courseUrl })
    }
  }, [authorized, courseUrl, getUserLessonByUrl, user])

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
