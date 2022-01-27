import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from 'utils/store.util'
import { Lesson } from 'components/lesson'
import { useLessonActions } from 'entities/lessons/lessons.slice'
import { selectCurrentUser } from 'entities/user/user.selector'
import { selectLesson, selectLessonMeta } from 'entities/lessons/lessons.selector'
import { selectAuth } from 'entities/auth/auth.selector'
import { useNavigate } from 'react-router-dom'

const LessonPage = () => {
  const { slug } = useParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { authorized, status } = useAppSelector(selectAuth)
  const { status: lessonStatus } = useAppSelector(selectLessonMeta)
  const user = useAppSelector(selectCurrentUser)
  const { getUserLessonBySlug } = useLessonActions(dispatch)
  const lesson = useAppSelector(selectLesson)

  useEffect(() => {
    if ((!authorized && status === 'failed') || (!authorized && status === 'succeeded')) {
      navigate(`/course/${slug}`)
    }
  }, [slug, navigate, authorized, status])

  useEffect(() => {
    if (slug && user)
      getUserLessonBySlug({
        slug,
        userId: user.id
      })
  }, [slug, user, getUserLessonBySlug])

  useEffect(() => {
    if (lessonStatus === 'succeeded' && !lesson) {
      navigate(`/course/${slug}`)
    }
  }, [slug, lesson, lessonStatus, navigate, status])

  if (!slug || !lesson) return <p>Курс не найден</p>

  return (
    <>
      <Helmet>
        <title>Lesson</title>
      </Helmet>

      <Lesson lesson={lesson} />
    </>
  )
}

export default LessonPage
