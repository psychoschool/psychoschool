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
  const { slug } = useParams()
  const dispatch = useAppDispatch()
  const { getCourseBySlug } = useCourseActions(dispatch)
  const course = useAppSelector(selectCourse)
  const { status } = useAppSelector(selectCourseMeta)

  const { getUserLessonBySlug } = useLessonActions(dispatch)
  const user = useAppSelector(selectCurrentUser)
  const { authorized } = useAppSelector(selectAuth)

  useEffect(() => {
    if (slug) getCourseBySlug(slug)
  }, [slug, getCourseBySlug])

  useEffect(() => {
    if (authorized && user && slug) {
      getUserLessonBySlug({ userId: user.id, slug })
    }
  }, [authorized, slug, getUserLessonBySlug, user])

  if (!slug || (status === 'failed' && !course)) return <h3>Курс не найден</h3>
  if (!course) return <h3>Курс не найден</h3>

  return (
    <>
      <Helmet>
        <title>Курс</title>
      </Helmet>

      <Course course={course} />
    </>
  )
}

export default CoursePage
