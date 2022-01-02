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
  const { courseUrl } = useParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { authorized, status } = useAppSelector(selectAuth)
  const { status: lessonStatus } = useAppSelector(selectLessonMeta)
  const user = useAppSelector(selectCurrentUser)
  const { getUserLessonByUrl } = useLessonActions(dispatch)
  const lesson = useAppSelector(selectLesson)

  useEffect(() => {
    if ((!authorized && status === 'failed') || (!authorized && status === 'succeeded')) {
      navigate(`/course/${courseUrl}`)
    }
  }, [courseUrl, navigate, authorized, status])

  useEffect(() => {
    if (courseUrl && user)
      getUserLessonByUrl({
        url: courseUrl,
        userId: user.id
      })
  }, [courseUrl, user, getUserLessonByUrl])

  useEffect(() => {
    if (lessonStatus === 'succeeded' && !lesson) {
      navigate(`/course/${courseUrl}`)
    }
  }, [courseUrl, lesson, lessonStatus, navigate, status])

  if (!courseUrl || !lesson) return null

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
