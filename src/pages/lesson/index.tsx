import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from 'utils/store.util'
import { Lesson } from 'components/lesson'
import { useLessonActions } from 'entities/lessons/lessons.slice'
import { selectCurrentUser } from 'entities/user/user.selector'
import { selectLesson } from 'entities/lessons/lessons.selector'

const LessonPage = () => {
  const { courseUrl } = useParams()
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectCurrentUser)
  const { getUserLessonByUrl } = useLessonActions(dispatch)
  const lesson = useAppSelector(selectLesson)

  useEffect(() => {
    if (courseUrl && user)
      getUserLessonByUrl({
        url: courseUrl,
        userId: user.id
      })
  }, [courseUrl, user, getUserLessonByUrl])

  if (!courseUrl || !lesson) return <h3>Курс не найден</h3>

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
